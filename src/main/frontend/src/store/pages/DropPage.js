import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/drop.css";
import StoreFooter from "../components/StoreFooter";
import SizeCheckbox from "../components/SizeCheckbox";
import Countdown from "../../main/components/Countdown";
import store from "../../apis/store";
import { Link } from "react-router-dom";
  
class DropPage extends React.Component {
    state = {xs_disabled: false, s_disabled: true, m_disabled: false, l_disabled: false, xl_disabled: false, products: [], timeout: 0}

    componentDidMount = async () => {
        // const product = {
        //         "name": "OG OVERSIZE TEE",
        //         "material": "100% cotton",
        //         "type": "Classic",
        //         "description": "Legendary OG Oversize Tee made for pioneers. The genesis of Gym Alpha merch. There are only 20 of these. Wear it proudly.",
        //         "price": "???",
        //         "xs": 0,
        //         "s": 0,
        //         "m": 0,
        //         "l": 14,
        //         "xl": 0
        //      }
        // await store.post('/products/add', product);
        const DAYS_IN_MS = 0 * 24 * 60 * 60 * 1000;
        const NOW_IN_MS = new Date().getTime();
        const endTime = NOW_IN_MS + DAYS_IN_MS;
        const fetchedProduct = await store.get('/products/list').then((result) => result.data);
        this.setState({products: fetchedProduct, timeout: endTime});
    }
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
    addToOrder = () => {
        alert("Out of stock. The sewing factory rugged us, delivering low quality product. We value quality and therefore we won't sell any product until we build our own sewing room and produce best quality merch. We are really sorry for this inconvinience...")
    }
    renderProduct = () => {
        const product = this.state.products.map((product) => {
            if(product.id===1){//change to 2
                return(
                    <div className="product-about" key={product.id}>
                    <h1 className="product-name">{product.name}</h1>
                    <h2 className="product-family">{product.type}</h2>
                    {this.renderCheckboxes()}
                    <div className="product-description">{product.description}</div>
                    <div className="product-badges">
                    <div className="product-badge"><div className="badge-img quality"></div><p className="badge-name">Quality guarantee</p></div>
                    <div className="product-badge"><div className="badge-img fabric"></div><p className="badge-name">Fabric: {product.material}</p></div>
                    </div>
                    <div className="purchase-details"><p className="product-price">${product.price}</p><p className="supply-left">*Only {product.l} left!</p></div>
                    <Link  to="/store/drop"><button onClick={this.addToOrder} className="purchase-btn">SWEEP!</button></Link>
                </div>
                )
            }
        });
        return(
            <div>{product}</div>
        )
    }
    render(){
        return (
            <div className="drop-page">
                <StoreNavbar/>
                <div className="drop-container">
                    <div className="title-product">
                        <h1 className="header-store">DROP</h1>
                        <h3 className="drop-counter"><Countdown targetDate={this.state.timeout}></Countdown></h3>
                        <div className="merch-img"></div>
                    </div>
                    {this.renderProduct()}
                </div>
                <StoreFooter/>
            </div>
        )
    }
}

export default DropPage;