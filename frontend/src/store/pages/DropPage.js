import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/drop.css";
import StoreFooter from "../components/StoreFooter";
import SizeCheckbox from "../components/SizeCheckbox";
  
class DropPage extends React.Component {
    state = {xs_disabled: false, s_disabled: true, m_disabled: false, l_disabled: false, xl_disabled: false}

    renderCheckboxes = () => {
        return(
            <div className="sizes-container">
                <SizeCheckbox text={'XS'} disable={this.state.xs_disabled}/>
                <SizeCheckbox text={'S'} disable={this.state.s_disabled}/>
                <SizeCheckbox text={'M'} disable={this.state.m_disabled}/>
                <SizeCheckbox text={'L'} disable={this.state.l_disabled}/>
                <SizeCheckbox text={'XL'} disable={this.state.xl_disabled}/>
            </div>
        )

    }
    render(){
        return (
            <div className="drop-page">
                <StoreNavbar/>
                <div className="drop-container">
                    <div className="title-product">
                        <h1 className="header-store">DROP</h1>
                        <h3 className="drop-counter">Ends in: <b>01d 23h 21m 23s</b></h3>
                        <div className="merch-img"></div>
                    </div>
                    <div className="product-about">
                        <h1 className="product-name">OG OVERSIZE TEE</h1>
                        <h2 className="product-family">Classic</h2>
                        {this.renderCheckboxes()}
                        <div className="product-description">Legendary OG Oversize Tee. The genesis of Gym Alpha merch. Thanks to black color it will be a great fit to everything in your wardrobe! You will wear it proudly.</div>
                        <div className="product-badges">
                        <div className="product-badge"><div className="badge-img quality"></div><p className="badge-name">Quality guarantee</p></div>
                        <div className="product-badge"><div className="badge-img fabric"></div><p className="badge-name">Fabric: 100% cotton</p></div>
                        </div>
                        <div className="purchase-details"><p className="product-price">$39.00</p><p className="supply-left">*Only 12 left!</p></div>
                        <button className="purchase-btn">SWEEP!</button>
                    </div>
                </div>
                <StoreFooter/>
            </div>
        )
    }
}

export default DropPage;