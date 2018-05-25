import { createStore, combineReducers } from 'redux';
import Cookies from 'js-cookie';

const LOGIN_ACTION = 'LOGIN_ACTION';
const LOGOUT_ACTION = 'LOGOUT_ACTION';
const api = { prod: "not ready", dev: "https://lawyr.herokuapp.com/api/v1/" }
const session = { active: false }
let set_state = { api: api, session: session }
if(Cookies.get("lawyr") !== undefined) {
	set_state = Cookies.getJSON("lawyr");
}
function mainReducer(state=[], action) {
	switch(action.type) {
		case LOGIN_ACTION : 
			set_state.session.active = true;
		break;
		case LOGOUT_ACTION :
			set_state.session.active = false;
		break;
		default: break;
	}
	Cookies.set("lawyr", set_state, { expires: 7, path: '/' });
	return state;
}

const rootReducer = combineReducers ({
	state: (state = set_state) => {
		return state
	},
	main: mainReducer
});

const store = createStore(rootReducer);
export default store;