import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/error.css";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <Navbar />
            <div className="error-container">
                <h1 className="error">NOTHING INTERESTING HERE...</h1>
                <Link to="/" className="main-page-link">Main Page</Link>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;