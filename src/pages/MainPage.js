import React from "react";
import FaqTab from "../components/FaqTab";
import HolderBenefit from "../components/HolderBenefit";
import TeamCard from "../components/TeamCard";
import Timeline from "../components/Timeline";
import founderPic from "../images/founder.jpeg";
import martynaPic from "../images/Martyna.jpg";
import dollarPic from "../images/money.png";
import giftPic from "../images/gift.png";
import gymPic from "../images/gym-dumbell.png";
import walletPic from "../images/wallet.png";
import ticketPic from "../images/vip.png";
import phonePic from "../images/people.png";
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
                <div className="dim-background"></div>
                <div className="intro-desktop">
                    <h1 className="main-header appearing" id="intro-header">UNLEASH THE POWER <br className="desktop"/>OF NFT <span className="underlined">COMMUNITY.</span></h1>
                    <p className="about desktop appearing">GYM ALPHA IS MUCH MORE THAN JUST A <b>DECENTRALIZED FITNESS BRAND.</b> IT IS A GYM AND NFT ORIENTED <b>COMMUNITY, DETERMINED TO SHOW</b> THE WORLD <b><span className="underlined">THE TRUE POWER OF NFTs.</span></b><br/> </p>
                    {/* <a href="https://discord.gg/725SakGDPU" className="button join-btn appearing">JOIN DISCORD</a> */}
                    <div className="image-dim-bottom"></div>

                </div>
                <div className="main-image"><div className="image-dim-top"></div><div className="image-dim-left"></div></div>
                <h1 className="next-header mobile"><span className="underlined">ABOUT</span></h1>
                <p className="about mobile">5777 NFTs made to empower gym rats and athletes. Gym Alpha is much more than a brand, it's a gym and business oriented community.</p>
                <h1 className="next-header appearing" id="membership-header">MEMBERSHIP <span className="underlined">BENEFITS</span></h1>
                <div className="benefits-container">
                    <HolderBenefit image={dollarPic} header="Staking & Dividends" text="As a member you will be passively earning governance token. Elite NFT holders will be receiving a dividend every 3 mo."/>
                    <HolderBenefit image={giftPic} header="Gifts" text="Once we launch our online store, we will begin sending gifts to randomly selected holders."/>
                    <HolderBenefit image={gymPic} header="Gym For Free" text="All active members of the Main DAO will have 50% off for pass to all of our gyms all around the world. Elite ones- free."/>
                    <HolderBenefit image={walletPic} header="Discounts" text="You will get discounts for every product in our offer as well as events."/>
                    <HolderBenefit image={ticketPic} header="VIP Tickets" text="Holders with rare NFTs will receive a free VIP invitation for our events."/>
                    <HolderBenefit image={phonePic} header="Connections" text="You will have access to our Discord category intended for holders and exclusive seminars."/>
                </div>
                <h1 className="next-header appearing" id="roadmap-header"><span className="underlined">ROADMAP</span></h1>
                <Timeline/>
                <h1 className="next-header appearing" id="team-header">MEET THE <span className="underlined">TEAM</span></h1>
                <div className="team-container">
                    <TeamCard profilePicture={founderPic} name="Piotr Gerke" position="The Pioneer" socialMedia={["https://twitter.com/PeterGerke_", "https://www.instagram.com/gerkedev/", "https://www.facebook.com/profile.php?id=100011194814784", "https://www.linkedin.com/in/piotr-gerke-137a05214/"]} />
                    <TeamCard profilePicture={martynaPic} name="Martyna Kaźmierczak" position="Discord Mod" socialMedia={["https://twitter.com/Martynak041", "https://www.instagram.com/martynak0076/"]} />
                </div>
                <h1 className="main-header next-header appearing">FAQ</h1>
                <div className="faq-container">  
                    <FaqTab header="WHAT IS AN NFT?" content="NFT stands for non-fungible token or asset that cannot be replaced with another identical one of the same value. Just think about it as virtual goods, which you can actually own and store in your wallet. It can be a piece of art, ticket, video, music, almost everything what's digital."/>
                    <FaqTab header="WHAT IS MINT?" content="Mint is an event where you will be able to buy your NFT. It will most likely take place on our website. PS. To mint you need to have a wallet with ETH in it."/>
                    <FaqTab header="WHAT IS DAO?" content="DAO stands for Decentralized Autonomous Organisation. It gives the community ability to vote and cooporate online without any middleman or risks of being scammed. That's because it's just a transparent code everyone can see and review. In DAO there is usually a voting system. Once something is voted out(for example 50% vote for 'yes'), then the predetermined code is executed. That's basically how it works. All of this usually takes place in your browser, using your cryptocurrency wallet."/>
                    <div className="faq-show-more"><button className="arrow-down arrow-expand" id="faq-more-btn"></button></div>
                    <div className="faq-more">
                        <FaqTab header="WEN MINT?" content="Mint date is yet to be announced. It will most likely take place this summer."/>
                        <FaqTab header="WHAT IS THE SUPPLY?" content="It depends on the ETH value this summer."/>
                        <FaqTab header="WHAT IS THE MINT PRICE?" content="We will be releasing 5777 NFTs this summer. However, it's not all, we are expecting more mints for different DAO instances in the future."/>
                        <FaqTab header="HOW TO BECOME A MEMBER?" content="To become GYM ALPHA board member you need to own our NFT(you will be able to mint it or buy on secondary market- Opensea) and stake it on our website. It will be possible shortly after you mint."/>
                        <FaqTab header="HOW DO I MINT?" content="To mint an NFT your wallet address have to be on our whitelist(list of wallets that can mint). Once your wallet is on our list, you will have to visit our website at the predetermined time(we will announce it a few days before the mint), click the mint button and approve transaction! If you are new to the NFT space here is what you should do: setup your wallet(type in browser: How to setup metamask?), buy ETH(it can be done on every major cryptocurrency exchange for example Coinbase or Binance), transfer crypto to your wallet(type in your browser something like: How to transfer ETH from Coinbase to Metamask). That's it! Now the only thing you have to do is to get on our whitelist and buy when the time comes!"/>
                        <FaqTab header="WHAT IS THE VISION?" content="Community-driven brand that will empower individuals, who love strength training, and revolutionise the fitness industry. You will be able to directly influence the future of our brand by becoming a member of a new business model called DAO. You will be able to take part in designing process our own merchandise, organising events and building a worldwide gym chain. We firmly believe that this approach will introduce numerous innovations, that the community actually needs into the fitness industry, thus giving us an advantage over other brands."/>
                        <div className="faq-show-less"><button className="arrow-up arrow-shrink" id="faq-less-btn"></button></div>
                    </div>
                </div>
                <p className="appearing" id="faq-caption">If you have any other questions feel free<br className="mobile"/> to contact us on social media!</p>
                <div className="end-btn-container appearing">
                    <a href="https://discord.gg/725SakGDPU" className="end-dc-btn"><h2 className="end-dc-text">JOIN US ON DISCORD !</h2><div className="discord-img"></div></a>
                </div>
            </div>
        )
    }
}

export default MainPage;