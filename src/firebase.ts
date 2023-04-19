import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCVwmcSELShVw92HQxNbof3BaCewpJt2m8",
	authDomain: "seevproject.firebaseapp.com",
	projectId: "seevproject",
	storageBucket: "seevproject.appspot.com",
	messagingSenderId: "418719636263",
	appId: "1:418719636263:web:25aa04ebe4dbffc0842702",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
