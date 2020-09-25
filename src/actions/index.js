import { LOGOUT } from "./action-types.js";
import database, {
	firebase,
	timestamp,
	projectStorage,
	googleAuth,
} from "../firebase/config.js";

export const logout = () => {
	return (dispatch, getState) => {
		dispatch({ type: LOGOUT });
	};
};

export const login = (data) => ({
	type: "LOGIN",
	data,
});

export const startLogin = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuth);
	};
};

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

export const setStore = (users) => {
	return async (dispatch) => {
		await dispatch({ type: "SET_STORE", users });
	};
};

export const setProjectInitials = (projects) => {
	return (dispatch) => {
		dispatch({ type: "SET_PROJECT_INITIALS", projects });
	};
};

export const getUserProjects = async (userProjects, allProjects) => {
	let projects = await userProjects.map((pid) => {
		return allProjects[pid];
	});
	return projects;
};

export const fetchData = () => {
	return (dispatch) => {
		database
			.ref(`users`)
			.once("value")
			.then((snapshot) => {
				dispatch(setStore(snapshot.val()));
			})
			.then(() => {
				database
					.ref(`projects`)
					.once("value")
					.then((snapshot) => {
						dispatch(setProjectInitials(snapshot.val()));
					});
			});
	};
};

export const setPortfolio = (uid, portfolio) => {
	portfolio["links"] = {
		Github: "",
		LinkedIn: "",
		Twitter: "",
		Website: "",
	};
	database.ref(`portfolios`).child(uid).set(portfolio);
};

export const setProfilePic = (uid, photoURL) => {
	return (dispatch) => {
		database.ref(`users/${uid}`).child("profile_pic").set(photoURL);
	};
};

export const submitProject = (uid, title, desc, file, dispatch) => {
	const storageRef = projectStorage.ref(file.name);

	storageRef.put(file).on(
		"state_changed",
		(snap) => {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			console.log(percentage);
		},
		(err) => {
			console.log(err);
		},
		async () => {
			const icon = await storageRef.getDownloadURL();
			const createdAt = timestamp();
			var pid = database.ref().child("projects").push().key;
			let project = {
				pid,
				title,
				icon,
				description: desc,
			};
			database
				.ref()
				.child(`projects/${pid}`)
				.set(project)
				.then(() => {
					database
						.ref(`users/${uid}/projects`)
						.once("value")
						.then((snapshot) => {
							let projects = snapshot.val();
							let obj = {};
							var index = 0;
							if (!!projects)
								index = Object.keys(projects).length;
							obj[index] = pid;
							projects = { ...projects, ...obj };
							return projects;
						})
						.then((projects) => {
							database.ref(`users/${uid}/projects`).set(projects);
						})
						.then(() => {
							dispatch(fetchData());
						});
				});
		}
	);
};
