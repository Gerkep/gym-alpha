import React from "react";
import FaqTab from "../components/FaqTab";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import founderPic from "../images/founder.jpeg";

const MainPage = () => {
    return (
        <div className="page">
            <h1 className="main-header">BUILDING A STRONG BRAND TOGETHER.</h1>
            <p className="about desktop">2777 NFTS MADE TO EMPOWER GYM RATS AND ATHLETES. BECOME A PART OF FITNESS INDUSTRY REVOLUTION AND LEAD A BRAND OF THE FUTURE.</p>
            <button className="button join-btn">JOIN DISCORD</button>
            <div className="main-image"><div className="image-dim-top"></div><div className="image-dim-left"></div></div>
            <h1 className="main-header next-header mobile">ABOUT</h1>
            <p className="about mobile">2777 NFTs made to empower gym rats and athletes. Become a part of fitness industry revolution and lead a brand of the future.</p>
            <h1 className="main-header next-header" id="roadmap-header">ROADMAP</h1>
            <Timeline/>
            <h1 className="main-header">MEET THE TEAM.</h1>
            <div className="team-container">
                <TeamCard profilePicture={founderPic} name="Piotr Gerke" position="The Pioneer" socialMedia={["https://twitter.com/PeterGerke_", "https://www.instagram.com/gerkedev/", "https://www.facebook.com/profile.php?id=100011194814784", "https://www.linkedin.com/in/piotr-gerke-137a05214/"]} />
            </div>
            <h1 className="main-header">FREQUENTLY ASKED QUESTIONS.</h1>
            <div className="faq-container">
                <FaqTab header="WEN MINT?" content="Mint date is yet to be announced. It will most likely take place in May/June."/>
                <FaqTab header="WHAT IS MINT?" content="Mint date is yet to be announced. It will most likely take place in May/June."/>
                <FaqTab header="WHAT IS DAO?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                <FaqTab header="WHAT IS AN NFT?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                <FaqTab header="HOW TO BECOME A MEMBER?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                <FaqTab header="HOW DO I MINT?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                <FaqTab header="WHAT IS THE VISION?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                <FaqTab header="WHAT ARE THE BENEFITS?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
            </div>
            <p id="faq-caption">If you have any other questions feel free to contact us on social media!</p>

        </div>
    )
}

export default MainPage;