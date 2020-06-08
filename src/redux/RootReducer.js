import { combineReducers } from 'redux';
import userReducer from './users/UsersReducer';
import cartReducer from './cart/CartReducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});
