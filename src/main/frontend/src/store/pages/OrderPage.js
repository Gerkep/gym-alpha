import React from "react";
import StoreNavbar from "../components/StoreNavbar";
import "../style/main-store.css";
import "../style/order.css";
import StoreFooter from "../components/StoreFooter";
import { Field, reduxForm } from 'redux-form';
import store from "../../apis/store";
import history from "../../history";
import { 
    orderCity, 
    orderCountry, 
    orderEmail, 
    orderFirstName, 
    orderLastName, 
    orderTelephone, 
    orderStreetAndNumber,
    orderPostalCode,
    saveOrderId
} 
from "../../actions";
import { connect } from "react-redux";
  
class OrderPage extends React.Component {
    renderError = ({error, touched}) => {
        if (touched && error){
            return (
                <div className="error-text">{error}</div>
            );
        }
    }

    renderTextField = ({input, meta}) => {
        const id = `${input.name === "Email" ? 'email' : ''}`
        const className = `text-field ${meta.error && meta.touched ? 'field-error' : meta.touched ? 'field-correct' : ''}`;
        return (
            <div>
                {this.renderError(meta)}
                <input className={className} id={id} {...input} placeholder={input.name}/>
            </div>

        )
    }

    onSubmit = async (formValues) => {
        const order = {
            "city": formValues.City,
            "country": formValues.Country,
            "mail": formValues.Email,
            "firstName": formValues.FirstName,
            "lastName": formValues.LastName,
            "telephoneNumber": formValues.Telephone,
            "streetAndNumber": formValues.StreetAndNumber,
            "postalCode": formValues.PostalCode,
            "items": this.props.orderInfo.cart,
            "paid": this.props.orderInfo.paid
        }
       this.props.orderCity(formValues.City);
       this.props.orderCountry(formValues.Country);
       this.props.orderEmail(formValues.FirstName);
       this.props.orderFirstName(formValues.FirstName);
       this.props.orderLastName(formValues.LastName);
       this.props.orderTelephone(formValues.Telephone);
       this.props.orderEmail(formValues.Email);
       this.props.orderStreetAndNumber(formValues.StreetAndNumber);
       this.props.orderPostalCode(formValues.PostalCode);
       await store.post("/finalizeOrder", order);
       history.push("/store/payment")
    }
    render(){
        return (
            <div className="order-page">
                <StoreNavbar/>
                    <h1 className="header-store">CLAIM IT!</h1>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="order-form">
                        <div className="form-first-column">
                            <Field name="FirstName" component={this.renderTextField}/>
                            <Field name="LastName" component={this.renderTextField}/>
                            <Field name="Telephone" component={this.renderTextField}/>
                            <Field name="Email" component={this.renderTextField}/>
                        </div>
                        <div className="form-second-column">
                            <Field name="StreetAndNumber" component={this.renderTextField}/>
                            <Field name="PostalCode" component={this.renderTextField}/>
                            <Field name="City" component={this.renderTextField}/>
                            <Field name="Country" component={this.renderTextField}/>
                        </div>
                        <button className="order-btn">CONTINUE</button>
                    </form>
                <StoreFooter/>
            </div>
        )
    }
}
const validate = (formValues) => {
    const errors ={};
    if(!(formValues.FirstName)){
        errors.FirstName = 'Enter your first name'
    }
    if(!(formValues.LastName)){
        errors.LastName = 'Enter your last name'
    }
    if(!(formValues.Email)){
        errors.Email = 'Enter correct email'
    }
    if(!(formValues.Telephone)){
        errors.Telephone = 'Enter correct telephone number'
    }else if(formValues.Telephone.charAt(0) !== '+'){
        errors.Telephone = 'Remember about + and code)'
    }
    if(!(formValues.StreetAndNumber)){
        errors.StreetAndNumber = 'Enter your street and number'
    }
    if(!(formValues.PostalCode)){
        errors.PostalCode = 'Enter correct postal code'
    }
    if(!(formValues.City)){
        errors.City = 'Enter correct city'
    }
    let foundCountry = 0;
    const countries = ["Poland", "United States"];
    for (let i = 0; i<countries.length; i++){
        if(formValues.Country === countries[i]){
            foundCountry = 1
        }
    }
    if(foundCountry !== 1){
        errors.Country = 'We cannot deliver to your country yet;( Check spelling and make sure you provided your country name in English'
    }
    if(!(formValues.Country)){
        errors.Country = 'Enter correct country name'
    }
    return errors;
}
const mapStateToProps = (state) => {
    return {orderInfo: state.orderInfo}
}
const formWrapped = reduxForm({
    form: 'order',
    validate
})(OrderPage);

export default connect(mapStateToProps, {    
    orderCity, 
    orderCountry, 
    orderEmail, 
    orderFirstName, 
    orderLastName, 
    orderTelephone, 
    orderStreetAndNumber,
    orderPostalCode,
    saveOrderId
})
(formWrapped);