import React from "react";
import "../style/timeline.css"


class Timeline extends React.Component {

    componentDidMount(){
        const containers = document.querySelectorAll('.container');

        //appering animation
        function handleIntersection(entries) {
            entries.map((entry) => {
              if (entry.isIntersecting) {
                    entry.target.classList.add("appear")
                observer.unobserve(entry.target);
              }
            });
          }
        const observer = new IntersectionObserver(handleIntersection);
        containers.forEach(container => observer.observe(container));

        //scrolling bar
        function myFunction() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           
            const contentHeight  =  document.querySelector(".timeline-content").offsetHeight;
            const contentOffssetTop =  document.querySelector(".timeline-content").offsetTop;
            
            let scrolled = (winScroll / height) * 100;
            let ScrollBarWidth;
            const diff =  winScroll - (contentOffssetTop - 650);
            if(diff <= 0){
               ScrollBarWidth=0
            }else{
               //check if we hav reached div bottom 
               if( (winScroll +100) <= (contentOffssetTop + contentHeight) ){
                    ScrollBarWidth=(diff /contentHeight)*100
                    if(ScrollBarWidth>98){
                        ScrollBarWidth = 98;
                    }
               }else {
                    ScrollBarWidth=98
               }
            }
            document.getElementById("myBar").style.height = ScrollBarWidth +  "%";
          }
        window.onscroll = function() {myFunction()};
    }
    
    render(){
    return(
        <div className="timeline">
            <div className="progress-bar" id="myBar"></div>
            <div className="timeline-content">
            <div className="container" id="first-container">
                <div className="content">
                    <h1 className="timeline-container-header">1. Building Foundations</h1>
                    <p className="timeline-container-date">Now-Forever</p>
                    <p className="timeline-container-content">
                        In this phase we will be focused on providing the best, quality content 
                        and building lasting relationships within our community. In this phase 
                        we are planning to:
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- start our Discord(channels for your PR’s, chanel with personal  trainer and much more)</li>
                        <li>- create a website</li>
                        <li>- assemble a great marketing team</li>
                        <li>- bring popular athletes on board</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="timeline-container-header">2. NFT Mint & DAO Launch</h1>
                    <p className="timeline-container-date">May 2022</p>
                    <p className="timeline-container-content">
                        Once we have fundamentals we can really start building! 
                        In this phase you will be able to acquire an NFT, become a member 
                        of a DAO and start voting.
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- NFT project mint</li>
                        <li>- $WHEY token launch</li>
                        <li>- assemble a great marketing team</li>
                        <li>- First DAO votings</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="timeline-container-header">3. Merchandise & Awareness</h1>
                    <p className="timeline-container-date">Depends on community</p>
                    <p className="timeline-container-content">
                        This is when it all becomes a reality.
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- Voting regarding merchandise(manufacturer, type of products etc.)</li>
                        <li>- Creation of chosen products(some of them sent to community)</li>
                        <li>- Online store launch</li>
                        <li>- Our stand at chosen big fitness events</li>
                        <li>- Collaborations with athletes</li>
                    </ul><br/>
                    <p className="timeline-container-caption">
                        This phase is going to begin within couple of days after mint and launch of a DAO. (to let paperhands sell and keep only real gym addicts on board)
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="timeline-container-header">4. First GYM</h1>
                    <p className="timeline-container-date">Hopefully Q1 2023</p>
                    <p className="timeline-container-content">
                        With money from merchandise and NFT mint we will be able to start building 
                        our first gym led by community!
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- Voting regarding: place, cost, final look/style, contractor etc.</li>
                        <li>- Deal with paperwork</li>
                        <li>- Land purchase</li>
                        <li>- Beginning of construction process(this process will require lot’s of voting)</li>
                        <li>- Buy equipment and hire staff(Or make it mostly autonomous?  It all depends on your votes and budget)</li>
                        <li>- Organise marketing campaign for our new gym</li>
                        <li>- Welcome our first gym members!</li>
                    </ul><br/>
                    <p className="timeline-container-caption">
                        Beginning of this process depends on how well merchandise turns out and a country, which community will choose for our first gym.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="timeline-container-header">5. Further Expansion</h1>
                    <p className="timeline-container-date">Hopefully Q1 2023</p>
                    <p className="timeline-container-content">
                        With our first gym, online store and a great community we will start organising our own big events, continue 
                        building worldwide gym chain, collaborating with 
                        well-known athletes and expanding our merchandise offer to make us the 
                        biggest player in fitness industry!
                    </p><br/>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default Timeline;