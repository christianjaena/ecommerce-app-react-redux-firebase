import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
	apiKey: "AIzaSyDMcfTRQ37byEhRwg-O13PXJ_rFItwRL7E",
	authDomain: "react-ecommerce-app-pdngl.firebaseapp.com",
	databaseURL: "https://react-ecommerce-app-pdngl.firebaseio.com",
	projectId: "react-ecommerce-app-pdngl",
	storageBucket: "react-ecommerce-app-pdngl.appspot.com",
	messagingSenderId: "50798329986",
	appId: "1:50798329986:web:fe73d32ace47d5673b349b"
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;