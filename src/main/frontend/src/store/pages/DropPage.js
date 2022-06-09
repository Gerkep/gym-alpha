import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/drop.css";
import StoreFooter from "../components/StoreFooter";
import SizeCheckbox from "../components/SizeCheckbox";
import store from "../../apis/store";
  
class DropPage extends React.Component {
    state = {xs_disabled: false, s_disabled: true, m_disabled: false, l_disabled: false, xl_disabled: false, product: {}}

    componentDidMount = async () => {
        const fetchedProduct = await store.get('/products/1').then((result) => result.data);
        this.setState({product: fetchedProduct});
    }
    fet
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
                        <h1 className="product-name">{this.state.product.name}</h1>
                        <h2 className="product-family">{this.state.product.type}</h2>
                        {this.renderCheckboxes()}
                        <div className="product-description">{this.state.product.description}</div>
                        <div className="product-badges">
                        <div className="product-badge"><div className="badge-img quality"></div><p className="badge-name">Quality guarantee</p></div>
                        <div className="product-badge"><div className="badge-img fabric"></div><p className="badge-name">Fabric: {this.state.product.material}</p></div>
                        </div>
                        <div className="purchase-details"><p className="product-price">${this.state.product.price}</p><p className="supply-left">*Only {this.state.product.l} left!</p></div>
                        <button className="purchase-btn">SWEEP!</button>
                    </div>
                </div>
                <StoreFooter/>
            </div>
        )
    }
}

export default DropPage;