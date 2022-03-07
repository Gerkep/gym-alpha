import React from "react";
import "../style/faq.css"
import useCollapse from 'react-collapsed';

const FaqTab = ({content, header}) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? <div className="faq-header-container"><div className="arrow-up"></div><h2>{header}</h2></div> : <div className="faq-header-container"><div className="arrow-down"></div><h2>{header}</h2></div> }
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    );
}

export default FaqTab;