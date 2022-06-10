import React from "react";
import { Link } from "react-router-dom";

import StoreNavbar from "../components/StoreNavbar";
import StoreFooter from "../components/StoreFooter";
import "../style/main-store.css";
import "../style/thanks.css";


  
class ComingSoon extends React.Component {
    render(){
        return (
            <div className="thankyou-page">
                <StoreNavbar/>
                <div className="thanks-container">
                    <h1 className="thanks">COMING SOON!</h1>
                    <Link to="/" className="main-page-link">Main Page</Link>
                </div>
                <StoreFooter/>
            </div>
        )
    }
}

export default ComingSoon;