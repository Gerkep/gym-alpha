import { PayPalButtons } from "@paypal/react-paypal-js";
import actions from "redux-form/lib/actions";
import history from "../../history";
import { orderPaid } from "../../actions";
import { connect } from "react-redux";
import store from "../../apis/store";

const PaypalCheckoutButton = (props) => {
    const {product} = props;

    const handleApprove = (orderID) => {
        props.orderPaid(true);
        updateOrder();
        history.push("thank-you")
    }
    const updateOrder = async () => {
        console.log(props.orderInfo.orderId)
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
    return(
        <PayPalButtons
            style={{
                color: "silver", 
                layout: "horizontal", 
                height: 48, 
                tagline: false, 
                shape: "rect"
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                handleApprove(data.orderID);
            }}
            onCancel={() => {
                alert("Payment cancelled. If you are having some problems contact us!")
            }}
            onError={(err) => {
                alert("Something went wrong when processing your payment. Please try again or contact us for assistance.")
            }}
        />
    )
}
const mapStateToProps = (state) => {
    return {orderInfo: state.orderInfo};
};
export default connect(mapStateToProps, {orderPaid})(PaypalCheckoutButton);