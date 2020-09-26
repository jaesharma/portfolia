import { SET_STORE } from "../actions/action-types";

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_STORE:
			return { ...action.users };
		default:
			return state;
	}
};

export default userReducer;
