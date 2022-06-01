import React from "react";
import "../style/store.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StorePage = () => {
    return (
        <div className="store-page"> 
            <Navbar/>
            <h2 className="coming-soon">Store Coming Soon...</h2>
            <Footer />
        </div>
    )
}

export default StorePage;