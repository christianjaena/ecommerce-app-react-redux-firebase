import { combineReducers } from 'redux';
import userReducer from './users/UsersReducer';

export default combineReducers({
	user: userReducer,
});
