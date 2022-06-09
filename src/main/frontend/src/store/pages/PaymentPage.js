import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/payment.css";
import StoreFooter from "../components/StoreFooter";
import history from "../../history";
  
class PaymentPage extends React.Component {

    render(){
        return (
            <div className="payment-page">
                <StoreNavbar />
                <h1 className="header-store desktop">OWN IT!</h1>
                <div className="payment-grid">
                    <div className="payment-products">

                        <div className="payment-product"></div>
                        <div className="payment-product"></div>
                        <div className="payment-product"></div>
                        <div className="payment-product"></div>
                        <div className="payment-product"></div>
                        <div className="payment-product"></div>
                        
                    </div>
                    <div className="payment-summary">
                        <h2 className="payment-header">SUMMARY</h2>
                        <p className="purchase-note">By purchasing our products you agree to our privacy policy and terms. Wear our merch proudly!</p>
                        <div className="delivery-badge-container"><div className="delivery-badge"></div><p className="delivery-badge-text">Delivery guarantee</p></div>
                        <p className="shipping-cost">Shipping cost: $9.99</p>
                        <p className="merch-cost">Mrch cost: $39.00</p>
                        <p className="total-cost">Total: $48.99</p>
                        <button>Paypal</button>
                        <button>Stripe</button>
                        <button>Ethereum</button>
                    </div>
                </div>
                <StoreFooter />
            </div>

        )
    }
}
export default PaymentPage;