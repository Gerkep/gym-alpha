import React from "react";
import FaqTab from "../components/FaqTab";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import founderPic from "../images/founder.jpeg";

const MainPage = () => {
    return (
        <div className="page">
            <h1 className="main-header">BUILDING A STRONG BRAND TOGETHER.</h1>
            <button className="button join-btn">JOIN DISCORD</button>
            <div className="main-image"></div>
            <h1 className="main-header next-header">ABOUT</h1>
            <p className="main-caption">2777 NFTs made for gym rats and athletes. Become a part of fitness industry revolution.</p>
            <h1 className="main-header next-header">ROADMAP</h1>
            <Timeline/>
            <h1 className="main-header">MEET THE TEAM.</h1>
            <div className="team-container">
                <TeamCard profilePicture={founderPic} name="Piotr Gerke" position="The Pioneer" socialMedia={["https://twitter.com/PeterGerke_", "https://www.instagram.com/gerkedev/", "https://www.facebook.com/profile.php?id=100011194814784", "https://www.linkedin.com/in/piotr-gerke-137a05214/"]} />
            </div>
            <h1 className="main-header">FAQ</h1>
            <div className="faq-container">
                <FaqTab header="Wen mint?" content="Mint date is yet to be announced."/>
                <FaqTab header="What is DAO?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
            </div>

        </div>
    )
}

export default MainPage;