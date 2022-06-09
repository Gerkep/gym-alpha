export const selectSize = (size) => {
    return {
        type: 'SIZE_SELECTED',
        payload: size
    };
};
export const orderFirstName = (firstName) => {
    return {
        type: 'ORDER_FIRSTNAME',
        payload: firstName
    };
};
export const orderLastName = (lastName) => {
    return {
        type: 'ORDER_LASTNAME',
        payload: lastName
    };
};
export const orderTelephone = (tel) => {
    return {
        type: 'ORDER_TELEPHONE',
        payload: tel
    };
};
export const orderEmail = (email) => {
    return {
        type: 'ORDER_EMAIL',
        payload: email
    };
};
export const orderStreetAndNumber = (streetAndNumber) => {
    return {
        type: 'ORDER_STREETANDNUMBER',
        payload: streetAndNumber
    };
};

export const orderPostalCode = (postalCode) => {
    return {
        type: 'ORDER_POSTALCODE',
        payload: postalCode
    };
};
export const orderCity = (city) => {
    return {
        type: 'ORDER_CITY',
        payload: city
    };
};
export const orderCountry = (country) => {
    return {
        type: 'ORDER_COUNTRY',
        payload: country
    };
};