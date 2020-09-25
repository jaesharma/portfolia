import { LOGOUT } from "../actions/action-types.js";

const initialState = {
	isAuthenticated: false,
	data: {
		id: null,
		icon: "",
		username: "",
	},
};

const authenticationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN":
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
