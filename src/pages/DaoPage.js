import React from "react";
import "../style/dao.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DaoPage = () => {
    return (
        <div className="dao-page">
            <Navbar/>
            <h2 className="coming-soon">DAO Coming soon...</h2>
            <Footer />
        </div>
    )
}

export default DaoPage;