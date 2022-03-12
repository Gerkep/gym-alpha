import React from "react";
import "../style/timeline.css"


class Timeline extends React.Component {

    componentDidMount(){
        const containers = document.querySelectorAll('.container');
        const graphics = document.querySelectorAll('.timeline-graphics');

        //appering animation containers
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

                //appering animation graphics
                function handleGraphicsIntersection(entries) {
                    entries.map((entry) => {
                      if (entry.isIntersecting) {
                            entry.target.classList.add("appear")
                        observer.unobserve(entry.target);
                      }
                    });
                  }
                const graphicObserver = new IntersectionObserver(handleGraphicsIntersection);
                graphics.forEach(graphic => graphicObserver.observe(graphic));

        //scrolling bar
        function progressBar() {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
           
            const contentHeight  =  document.querySelector(".timeline-content").offsetHeight;
            const contentOffssetTop =  document.querySelector(".timeline-content").offsetTop;
            
            let scrolled = (winScroll / height) * 100;
            let ScrollBarWidth;
            const diff =  winScroll - (contentOffssetTop - 250);
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
            document.querySelector(".progress-bar").style.height = ScrollBarWidth +  "%";
          }
        window.onscroll = function() {progressBar()};
    }
    
    render(){
    return(
        <div>
        <div className="timeline">
            <div className="progress-bar" id="myBar"></div>
            <div className="timeline-content">
            <div className="timeline-graphics desktop left"><h2 className="timeline-phase">Phase 1</h2><div className="timeline-img" id="foundations-img"></div></div>
            <div className="container right" id="first-container">
                <div className="content">
                    <h1 className="timeline-container-header">Building Foundations</h1>
                    <p className="timeline-container-date">Now-Forever</p>
                    <p className="timeline-container-content">
                        In this phase we will be focused on providing the best, quality content 
                        and building lasting relationships with our community. <br />In this phase 
                        we are planning to:
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- Start our Discord(channel for your PR’s, personal trainer, workout music and much more!)</li>
                        <li>- Create a website✅</li>
                        <li>- Assemble a great social media/marketing team</li>
                        <li>- Bring popular athletes on board</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-graphics desktop right"><h2 className="timeline-phase">Phase 2</h2><div className="timeline-img" id="launch-img"></div></div>
            <div className="container left">
                <div className="content">
                    <h1 className="timeline-container-header">NFT Mint & DAO Launch</h1>
                    <p className="timeline-container-date">May/June 2022</p>
                    <p className="timeline-container-content">
                        Once we have fundamentals we can really start building! 
                        In this phase you will be able to acquire an NFT, become a member 
                        of a DAO and start voting.
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- NFT project mint</li>
                        <li>- $WHEY token launch</li>
                        <li>- Launch main DAO</li>
                        <li>- First DAO votings</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-graphics desktop left"><h2 className="timeline-phase">Phase 3</h2><div className="timeline-img" id="store-img"></div></div>
            <div className="container right">
                <div className="content">
                    <h1 className="timeline-container-header">Merchandise & Awareness</h1>
                    <p className="timeline-container-date">Depends on community</p>
                    <p className="timeline-container-content">
                        This is when it all becomes a reality.
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- Mint and launch of Merchandise DAO</li>
                        <li>- Votinings regarding merchandise(manufacturer, type of products etc.)</li>
                        <li>- Create chosen products(some of them sent to community)</li>
                        <li>- Launch online store</li>
                        <li>- Our stand at chosen big fitness events</li>
                        <li>- Collaborate with top tier athletes</li>
                    </ul><br/>
                    <p className="timeline-container-caption">
                        This phase is gonna begin within couple of days after mint and launch of a DAO. (to let paperhands sell and keep only real gym addicts on board)
                    </p>
                </div>
            </div>
            <div className="timeline-graphics desktop right"><h2 className="timeline-phase">Phase 4</h2><div className="timeline-img" id="gym-img"></div></div>
            <div className="container left">
                <div className="content">
                    <h1 className="timeline-container-header">First GYM</h1>
                    <p className="timeline-container-date">Hopefully Q1 2023</p>
                    <p className="timeline-container-content">
                        With money from merchandise and NFT mint we will be able to start building 
                        our first gym governed by community!
                    </p><br/>
                    <ul className="timeline-container-content">
                        <li>- Votings regarding: place, cost, style, contractor etc.</li>
                        <li>- Purchase land</li>
                        <li>- Begin construction process</li>
                        <li>- Buy equipment and hire staff(Or make it mostly autonomous?  It all depends on your votes!)</li>
                        <li>- Organise marketing campaign for our new gym</li>
                        <li>- Welcome our first gym members!</li>
                    </ul><br/>
                    <p className="timeline-container-caption">
                        Beginning of this process depends on how well merchandise turns out and a country, which community will choose for our first gym.
                    </p>
                </div>
            </div>
            <div className="timeline-graphics desktop left"><h2 className="timeline-phase">Phase 5</h2><div className="timeline-img" id="expansion-img"></div></div>
            <div className="container right">
                <div className="content" id="last-container">
                    <h1 className="timeline-container-header">5. Further Expansion</h1>
                    <p className="timeline-container-date">2023-Forever</p>
                    <div className="timeline-container-content">
                        With our first gym, online store and a great community we will:<br/><br/>

                        <ul className="timeline-container-content">
                        <li>- Start organising our own BIG events</li>
                        <li>- Continue building our worldwide gym chain</li>
                        <li>- Collaborate with well-known athletes and youtubers</li>
                        <li>- Expand our merchandise offer</li>
                        <li>- Organise spontaneous trainings with founders all around the world</li>
                        <li>- Continue biulding amazing community</li>
                        <li>- Partner with well-known brands(Gymshark, Adidas, Nike...)</li>
                    </ul><br/>
                    </div><br/>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }
}

export default Timeline;