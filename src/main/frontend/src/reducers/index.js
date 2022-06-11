import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

const initialState = {
    cart:[],
    orderId: 0,
    firstName: '',
    lastName: '',
    telephone: '',
    email: '',
    streetAndNumber: '',
    postalCode: '',
    city: '',
    country: '',
    paid: false,
    totalPrice: 0
}
const sizeReducer = (selectedSize = null, action) => {
    if (action.type === 'SIZE_SELECTED'){
        return action.payload;
    }
    return selectedSize;
}
const orderReducer = (state = initialState, action) => {
    switch (action.type){
            case 'ADD_PRICE' :
                return { 
                    ...state,
                    totalPrice: action.payload
            }
            case 'SAVE_ID' :
                return { 
                    ...state,
                    orderId: action.payload
            }
            case 'ITEM_ADDED' :
                return { 
                    ...state,
                    cart: [...state.cart, action.payload]
            }
            case 'ORDER_PURCHASED' :
                return { 
                    ...state,
                    paid: action.payload
            }
            case 'ORDER_FIRSTNAME' :
                return { 
                    ...state,
                    firstName: action.payload
                }
            case 'ORDER_LASTNAME' :
                return { 
                    ...state,
                    lastName: action.payload
            }
            case 'ORDER_TELEPHONE' :
                return { 
                    ...state,
                    telephone: action.payload
            }
            case 'ORDER_EMAIL' :
                return { 
                    ...state,
                    email: action.payload
            }
            case 'ORDER_STREETANDNUMBER' :
                return { 
                    ...state,
                    streetAndNumber: action.payload
            }
            case 'ORDER_POSTALCODE' :
                return { 
                    ...state,
                    postalCode: action.payload
            }
            case 'ORDER_CITY' :
                return { 
                    ...state,
                    city: action.payload
            }
            case 'ORDER_COUNTRY' :
                return { 
                    ...state,
                    country: action.payload
            }
            

        default:
            return state
    }
}


export default combineReducers({
   size: sizeReducer,
   form: formReducer,
   orderInfo: orderReducer,
});