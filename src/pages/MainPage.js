import React from "react";
import FaqTab from "../components/FaqTab";
import HolderBenefit from "../components/HolderBenefit";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import founderPic from "../images/founder.jpeg";
import dollarPic from "../images/money-bag-dynamic-premium.png";
import giftPic from "../images/gift-dynamic-premium.png";
import gymPic from "../images/gym-dynamic-premium.png";
import walletPic from "../images/wallet-dynamic-premium.png";
import ticketPic from "../images/file-fav-dynamic-premium.png";
import phonePic from "../images/chat-dynamic-premium.png";
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
                <p className="about desktop appearing">2777 NFTS MADE TO EMPOWER GYM RATS AND ATHLETES.<br/> GYM ALPHA IS MUCH MORE THAN A BRAND, IT IS A GYM<br/> AND BUSINESS ORIENTED COMMUNITY.</p>
                <button className="button join-btn appearing">JOIN DISCORD</button>
                <div className="main-image"><div className="image-dim-top"></div><div className="image-dim-left"></div></div>
                <h1 className="main-header next-header mobile">ABOUT</h1>
                <p className="about mobile">2777 NFTs made to empower gym rats and athletes. Gym Alpha is much more than a brand, it's a gym and business oriented community.</p>
                <h1 className="main-header appearing" id="membership-header">MEMBERSHIP BENEFITS.</h1>
                <div className="benefits-container">
                    <HolderBenefit image={dollarPic} header="Financial" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                    <HolderBenefit image={giftPic} header="Gifts" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                    <HolderBenefit image={gymPic} header="Gym For Free" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                    <HolderBenefit image={walletPic} header="Discounts" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                    <HolderBenefit image={ticketPic} header="VIP Tickets" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                    <HolderBenefit image={phonePic} header="Connections" text="Holders of our DAO will recieve dividend from our brand's profit every 3 months."/>
                </div>
                <h1 className="main-header next-header appearing" id="roadmap-header">PLAN OF ACTION.</h1>
                <Timeline/>
                <h1 className="main-header appearing">MEET THE TEAM.</h1>
                <div className="team-container">
                    <TeamCard profilePicture={founderPic} name="Piotr Gerke" position="The Pioneer" socialMedia={["https://twitter.com/PeterGerke_", "https://www.instagram.com/gerkedev/", "https://www.facebook.com/profile.php?id=100011194814784", "https://www.linkedin.com/in/piotr-gerke-137a05214/"]} />
                </div>
                <h1 className="main-header appearing">FREQUENTLY ASKED QUESTIONS.</h1>
                <div className="faq-container">
                    <FaqTab header="WHAT IS AN NFT?" content="NFT stands for non-fungible token or asset that cannot be replaced with another identical one of the same value. Just think about it as virtual goods, which you can actually own and store in your wallet. It can be a piece of art, ticket, video, music, almost everything what's digital."/>
                    <FaqTab header="WHAT IS MINT?" content="Mint is an event where you will be able to buy your NFT. It will most likely take place on our website. PS. To mint you need to have a wallet with ETH in it."/>
                    <FaqTab header="WHAT IS DAO?" content="DAO stands for Decentralized Autonomous Organisation. It gives the community ability to vote and cooporate online without any middleman or risks of being scammed. That's because it's just a transparent code everyone can see and review. In DAO there is usually a voting system. Once something is voted out(for example 50% vote for 'yes'), then the predetermined code is executed. That's basically how it works. All of this usually takes place in your browser, using your cryptocurrency wallet."/>
                    <div className="faq-show-more"><button className="arrow-down arrow-expand" id="faq-more-btn"></button></div>
                    <div className="faq-more">
                        <FaqTab header="WEN MINT?" content="Mint date is yet to be announced. It will most likely take place in May/June."/>
                        <FaqTab header="HOW TO BECOME A MEMBER?" content="To become GYM ALPHA board member you need to own our NFT(you will be able to mint it or buy on secondary market- Opensea) and stake it on our website. It will be possible shortly afer mint."/>
                        <FaqTab header="HOW DO I MINT?" content="To mint an NFT your wallet address have to be on our whitelist(list of wallets that can mint). Once your wallet is on our list, you will have to visit our website at the right time(we will announce it a few days before the mint), click the mint button and approve transaction! If you are new to the NFT space here is what you should do: setup your wallet(type in browser: How to setup metamask?), buy ETH(it can be done on every major cryptocurrency exchange for example Coinbase or Binance), transfer crypto to your wallet(type in your browser something like: How to transfer ETH from Coinbase to Metamask). That's it! Now the only thing you have to do is to get on our whitelist and buy when the time comes!"/>
                        <FaqTab header="WHAT IS THE VISION?" content="Community-driven brand that will empower individuals, who love strength training, and revolutionise the fitness industry. You will be able to directly influence the future of our brand by becoming a member of a new business model called DAO. You will be able to take part in designing process our own merchandise, organising events and building a worldwide gym chain. We firmly believe that this approach will introduce numerous innovations, that the community actually needs into the fitness industry, thus giving us an advantage over other brands."/>
                        <FaqTab header="WHAT ARE THE BENEFITS?" content="Every holder of our NFT will have access to the website(maybe in the future mobile app), where he/she will be able to vote and propose new ideas for Gym Alpha brand. As a board member you will also benefit financially. Every month our holders will receive some percentage of our brands profit(specific number will be announced before NFT minting process) and tokens for staking(you will be able to use it to vote or sell it on exchange). Depending on the rarity of the NFT and the instance of the DAO, members will receive various benefits and discounts. We will be offering: free entrance to any of our gyms in the world, merchandise gifts, free VIP tickets for our events and discounts for our products"/>
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