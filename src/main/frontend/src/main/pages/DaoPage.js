import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/dao.css";

const DaoPage = () => {
    return (
        <div className="dao-page">
            <Navbar />
            <h2 className="coming-soon">DAO Coming soon...</h2>
            <Footer />
        </div>
    )
}

export default DaoPage;