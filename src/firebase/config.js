import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DATABASEURL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_API_ID,
	measurementId: process.env.REACT_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const database = firebase.database();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, projectStorage, timestamp, googleAuth, database as default };
