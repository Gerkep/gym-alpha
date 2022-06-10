import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/thanks.css";
import StoreFooter from "../components/StoreFooter";
import { Link } from "react-router-dom";
import history from "../../history";
  
class ThankYouPage extends React.Component {

    render(){
        return (
            <div className="thankyou-page">
                <StoreNavbar />
                <div className="thanks-container">
                    <h1 className="thanks">YOUR MERCH<br/> IS ON ITS WAY!</h1>
                    <Link to="/" className="main-page-link">Main Page</Link>
                </div>
                <StoreFooter />
            </div>

        )
    }
}
export default ThankYouPage;