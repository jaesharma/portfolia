import { LOGOUT, LOGIN } from "../actions/action-types.js";

const initialState = {
	isAuthenticated: false,
	data: {
		id: null,
		profile_pic: "",
		username: "",
	},
};

const authenticationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				isAuthenticated: true,
				data: action.data,
			};
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default authenticationReducer;
