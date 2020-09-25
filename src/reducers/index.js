import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import authenticationReducer from "./authenticationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	userReducer,
	projectReducer,
	authenticationReducer,
});

export default rootReducer;
