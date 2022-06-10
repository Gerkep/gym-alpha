import React from "react";
import '../style/benefit.css'

const HolderBenefit = ({image, header, text}) => {
    return(
        <div className="benefit-container appearing">
            <div className="benefit-illustration" style={{backgroundImage: `url(${image})`}}></div>
            <h3 className="benefit-header">{header}</h3>
            <div className="benefit-text">{text}</div>
        </div>
    )
}

export default HolderBenefit;