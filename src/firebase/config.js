import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const database = firebase.database();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, projectStorage, timestamp, googleAuth, database as default };
