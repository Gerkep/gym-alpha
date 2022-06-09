import React from "react";
import { Link } from "react-router-dom";
import "../style/error.css";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h2 className="coming-soon">There is nothing interesting here...</h2>
            <div className="error-link-container"><Link to="/" className="homepage-link"><span className="text-gradient">Back to Homepage.</span></Link></div>
        </div>
    )
}

export default ErrorPage;