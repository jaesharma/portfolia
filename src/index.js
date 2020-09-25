import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
	fetchData,
	login,
	logout,
	setProfilePic,
	setPortfolio,
} from "./actions/";
import database, { firebase } from "./firebase/config";
import { history } from "./router/AppRouter";
import App from "./components/App";
import store from "./store";

// const unsub=store.subscribe(()=>{
// 	console.log(store.getState());
// });

store.dispatch(fetchData());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		database
			.ref(`users/${user.uid}`)
			.once("value")
			.then((snapshot) => {
				return snapshot.val();
			})
			.then((data) => {
				if (!!!data) {
					data = {
						id: user.uid,
						profile_pic: user.photoURL,
						email: user.email,
						name: user.displayName,
					};
					database.ref(`users/`).child(user.uid).set(data);
					setPortfolio(user.uid, data);
				}
				if (!!!data.profile_pic) {
					store.dispatch(setProfilePic(user.uid, user.photoURL));
					data["profile_pic"] = user.photoURL;
				}
				store.dispatch(login(data));
				store.dispatch(fetchData());
			});
	} else {
		store.dispatch(logout());
		history.push("/");
	}
});
