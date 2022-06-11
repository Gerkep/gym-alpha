import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/thanks.css";
import StoreFooter from "../components/StoreFooter";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from 'react-redux';
  
class ThankYouPage extends React.Component {

    componentDidMount() {
        console.log(this.props.orderInfo)
    }
    render(){
        return (
            <div className="thankyou-page">
                <StoreNavbar />
                <div className="thanks-container">
                    <h1 className="thanks">YOUR MERCH<br/> IS ON ITS WAY!</h1>
                    <Link to="/" className="main-page-link">Main Page</Link>
                </div>
                <StoreFooter />
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {orderInfo: state.orderInfo}
}
export default connect(mapStateToProps)(ThankYouPage);