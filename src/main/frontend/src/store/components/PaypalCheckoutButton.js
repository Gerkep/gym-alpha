import { PayPalButtons } from "@paypal/react-paypal-js";
import actions from "redux-form/lib/actions";
import history from "../../history";

const PaypalCheckoutButton = (props) => {
    const {product} = props;

    const handleApprove = (orderID) => {
        //call backend with order

        // if response is succesful update paid to true
        history.push("thank-you")
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

export default PaypalCheckoutButton;