import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

const sizeReducer = (selectedSize = null, action) => {
    if (action.type === 'SIZE_SELECTED'){
        return action.payload;
    }
    return selectedSize;
}
const firstNameReducer = (firstName = null, action) => {
    if (action.type === 'ORDER_FIRSTNAME'){
        return action.payload;
    }
    return firstName;
}
const lastNameReducer = (lastName = null, action) => {
    if (action.type === 'ORDER_LASTNAME'){
        return action.payload;
    }
    return lastName;
}
const telephoneReducer = (telephone = null, action) => {
    if (action.type === 'ORDER_TELEPHONE'){
        return action.payload;
    }
    return telephone;
}
const emailReducer = (email = null, action) => {
    if (action.type === 'ORDER_EMAIL'){
        return action.payload;
    }
    return email;
}
const streetAndNumberReducer = (streetAndNumber = null, action) => {
    if (action.type === 'ORDER_STREETANDNUMBER'){
        return action.payload;
    }
    return streetAndNumber;
}
const postalCodeReducer = (postalCode = null, action) => {
    if (action.type === 'ORDER_POSTALCODE'){
        return action.payload;
    }
    return postalCode;
}
const cityReducer = (city = null, action) => {
    if (action.type === 'ORDER_CITY'){
        return action.payload;
    }
    return city;
}
const countryReducer = (country = null, action) => {
    if (action.type === 'ORDER_COUNTRY'){
        return action.payload;
    }
    return country;
}

export default combineReducers({
   size: sizeReducer,
   form: formReducer,
   firstName: firstNameReducer,
   lastName: lastNameReducer,
   telephone: telephoneReducer,
   email: emailReducer,
   streetAndNumber: streetAndNumberReducer,
   postalCode: postalCodeReducer,
   city: cityReducer,
   country: countryReducer,
});