import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

const sizeReducer = (selectedSize = null, action) => {
    if (action.type === 'SIZE_SELECTED'){
        return action.payload;
    }
    return selectedSize;
}

export default combineReducers({
   size: sizeReducer,
   form: formReducer
});