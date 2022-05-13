import React from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="logo-container">
                <div className="logo" id="footer-logo"></div>
            </div>
            <div className="footer-links">
                    <Link className="footer-link" to="/store">STORE</Link>
                    <Link className="footer-link" to="/token">TOKEN</Link>
                    <a className="footer-link" href="https://dune-globe-9dc.notion.site/GYM-ALPHA-4c1e7ba461f64ef79144d8343807128e">WHITE PAPER</a>
                    <Link className="footer-link" to="/dao">DAO</Link>
            </div>
            <div className="footer-media">
                <a className="media-icon facebook footer-media-icon" href="https://www.facebook.com/Gym-Alpha-105759028738624"></a>
                <a className="media-icon twitter footer-media-icon" href="https://twitter.com/GymAlphaNFT"></a>
                <a className="media-icon instagram footer-media-icon" href="https://www.instagram.com/gymalpha_community/"></a>
            </div>
            <div className="footer-contribution">
                <p>@2022 Gym Alpha <br className="mobile"/> Designed & Developed by Piotr Gerke</p>
            </div>
        </div>
    )
}

export default Footer;