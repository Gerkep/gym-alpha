import React from "react";
import "../style/teamcard.css";

class TeamCard extends React.Component {

    componentDidMount(){
        const cards = document.querySelectorAll('.card');


        function handleIntersection(entries) {
            entries.map((entry) => {
              if (entry.isIntersecting) {
                    entry.target.classList.add("appear")
                observer.unobserve(entry.target);
              }
            });
          }
        const observer = new IntersectionObserver(handleIntersection);
        cards.forEach(card => observer.observe(card));
    }

    renderSocialMedia(){
        return this.props.socialMedia.map(media => {
           if(media.includes("twitter")){
            return <a className="media-icon twitter" href={media}></a>
           }else if(media.includes("instagram")){
            return <a className="media-icon instagram" href={media}></a>
           }else if(media.includes("linkedin")){
            return <a className="media-icon linkedin" href={media}></a>
           }else if(media.includes("facebook")){
            return <a className="media-icon facebook" href={media}></a>
           }else{
               return null;
           }
        })
    }
    render(){
        return(
            <div className="card">
                <div className="profile-picture" style={{backgroundImage: `url(${this.props.profilePicture})`}}></div>
                <h4 className="name">{this.props.name}</h4>
                <h2 className="position">{this.props.position}</h2>
                <div className="social-media">
                    {this.renderSocialMedia()}
                </div>
            </div>
        )
    }
}

export default TeamCard;