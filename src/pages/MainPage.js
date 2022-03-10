import React from "react";
import FaqTab from "../components/FaqTab";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import founderPic from "../images/founder.jpeg";
import "../style/main.css";

class MainPage extends React.Component {

    componentDidMount(){
        //faq-show-&-hide-bbuttons
        let showMoreBtn = document.getElementById("faq-more-btn");
        let showLessBtn = document.getElementById("faq-less-btn");
        let showMoreContainer = document.querySelector(".faq-show-more");
        let faqMore = document.querySelector(".faq-more");
        let isOpen = false;

        showMoreBtn.addEventListener('click', () => {
            faqMore.classList.add("appear");
            showMoreContainer.style.display = "none"
            faqMore.style.display = "flex";
        })
        showLessBtn.addEventListener('click', () => {
            faqMore.classList.remove("appear");
            showMoreContainer.style.display = "flex"
            faqMore.style.display = "none";
        })

        //opacity from 0 to 1 observer
        const appearing = document.querySelectorAll('.appearing');

        //appering animation containers
        function handleIntersection(entries) {
            entries.map((entry) => {
              if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
              }
            });
          }
        const observer = new IntersectionObserver(handleIntersection);
        appearing.forEach(appear => observer.observe(appear));

    }

    render(){
        return (
            <div className="page">
                <h1 className="main-header appearing">BUILDING A STRONG BRAND TOGETHER.</h1>
                <p className="about desktop appearing">2777 NFTS MADE TO EMPOWER GYM RATS AND ATHLETES. BECOME A PART OF FITNESS INDUSTRY REVOLUTION AND LEAD A BRAND OF THE FUTURE.</p>
                <button className="button join-btn appearing">JOIN DISCORD</button>
                <div className="main-image"><div className="image-dim-top"></div><div className="image-dim-left"></div></div>
                <h1 className="main-header next-header mobile">ABOUT</h1>
                <p className="about mobile">2777 NFTs made to empower gym rats and athletes. Become a part of fitness industry revolution and lead a brand of the future.</p>
                <h1 className="main-header next-header appearing" id="roadmap-header">ROADMAP</h1>
                <Timeline/>
                <h1 className="main-header appearing">MEET THE TEAM.</h1>
                <div className="team-container">
                    <TeamCard profilePicture={founderPic} name="Piotr Gerke" position="The Pioneer" socialMedia={["https://twitter.com/PeterGerke_", "https://www.instagram.com/gerkedev/", "https://www.facebook.com/profile.php?id=100011194814784", "https://www.linkedin.com/in/piotr-gerke-137a05214/"]} />
                </div>
                <h1 className="main-header appearing">FREQUENTLY ASKED QUESTIONS.</h1>
                <div className="faq-container">
                    <FaqTab header="WEN MINT?" content="Mint date is yet to be announced. It will most likely take place in May/June."/>
                    <FaqTab header="WHAT IS MINT?" content="Mint date is yet to be announced. It will most likely take place in May/June."/>
                    <FaqTab header="WHAT IS DAO?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                    <div className="faq-show-more"><button className="arrow-down arrow-expand" id="faq-more-btn"></button></div>
                    <div className="faq-more">
                        <FaqTab header="WHAT IS AN NFT?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                        <FaqTab header="HOW TO BECOME A MEMBER?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                        <FaqTab header="HOW DO I MINT?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                        <FaqTab header="WHAT IS THE VISION?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                        <FaqTab header="WHAT ARE THE BENEFITS?" content="DAO stands for Decentralized Autonomous Organisation. It gives community the right to vote and once the majority agrees, execute code that is transparent."/>
                        <div className="faq-show-less"><button className="arrow-up arrow-shrink" id="faq-less-btn"></button></div>
                    </div>
                </div>
                <p className="appearing" id="faq-caption">If you have any other questions feel free<br className="mobile"/> to contact us on social media!</p>
                <div className="end-btn-container appearing">
                    <button className="end-dc-btn"><h2 className="end-dc-text">JOIN US ON DISCORD !</h2><div className="discord-img"></div></button>
                </div>
            </div>
        )
    }
}

export default MainPage;