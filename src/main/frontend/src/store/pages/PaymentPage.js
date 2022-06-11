import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/payment.css";
import StoreFooter from "../components/StoreFooter";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import Stripe from "react-stripe-checkout";
import history from "../../history";
import store from "../../apis/store";
import { connect } from "react-redux";
import { orderPaid } from "../../actions";
  
const PaymentPage = (props) => {
    const product = {
        description: "Gym Alpha Merch",
        price: props.orderInfo.totalPrice
    }
    const updateOrder = async () => {
        const updatedOrder = {
            "id": props.orderInfo.orderId,
            "country": props.orderInfo.country,
            "mail": props.orderInfo.email,
            "firstName": props.orderInfo.firstName,
            "lastName": props.orderInfo.lastName,
            "telephoneNumber": props.orderInfo.telephone,
            "streetAndNumber": props.orderInfo.streetAndNumber,
            "postalCode": props.orderInfo.postalCode,
            "city": props.orderInfo.city,
            "items": props.orderInfo.cart,
            "paid": true
        }

        props.orderPaid(true);
        await store.post("/finalizeOrder", updatedOrder);
    }
    const handleToken = async (token) => {
        console.log(token);
        await store.post("/stripe/payment/charge", "", { headers: {
          token: token.id,
          amount: 500,
        },}).then(() => {
            updateOrder()
           history.push("/store/thank-you")
           }).catch((error) => {
           alert(error);
           });
    }
        return (
            <div className="payment-page">
                <StoreNavbar />
                <h1 className="header-store desktop">OWN IT!</h1>
                <div className="payment-grid">
                    <div className="payment-products">

                        <div className="payment-product"></div>
                        
                    </div>
                    <div className="payment-summary">
                        <h2 className="payment-header">SUMMARY</h2>
                        <p className="purchase-note">By purchasing our products you agree to our privacy policy and terms. Wear our merch proudly!</p>
                        <div className="delivery-badge-container"><div className="delivery-badge"></div><p className="delivery-badge-text">Delivery guarantee</p></div>
                        <p className="shipping-cost">Shipping cost: $9.99</p>
                        <p className="merch-cost">Mrch cost: $39.00</p>
                        <p className="total-cost">Total: $48.99</p>
                        <div className="paypal-container">
                            <PaypalCheckoutButton product={product}/>
                        </div>
                        <Stripe
                            image="http://drive.google.com/uc?export=view&id=1KfTb7h5yln1omHlJ3eHDX-A0LL-_LE3v" 
                            panelLabel="ORDER!" 
                            name="GYM ALPHA" 
                            description="Handled by Stripe." 
                            stripeKey="pk_test_51L90anDdmwDcjUrKGK935LoxR6popO2lxjsbPQ1Q0JNk9pkICAfmhZnmZetf1ggDJZ1efOT1WHlgBK62tK44iTPB00ttIu41jT" 
                            token={handleToken} 
                            email={props.orderInfo.email}>
                                <button className="stripe-paybtn">Pay With Card</button>
                            </Stripe>
                        {/* <button>Ethereum</button> */}
                    </div>
                </div>
                <StoreFooter />
            </div>

        )
}
const mapStateToProps = (state) => {
    return {orderInfo: state.orderInfo};
};
export default connect(mapStateToProps, {orderPaid})(PaymentPage);