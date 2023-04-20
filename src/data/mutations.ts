import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

export async function tryLogin() {
	// sign in and get token
	const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
	const token = await user.getIdToken();

	// send request to login with token
	const res = await fetch("http://localhost:3000/auth/login", {
		method: "POST",
		credentials: "include",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const data = await res.json();
	return data;
}

export async function tryLogout() {
	// sign out from google
	signOut(auth);

	// send request for logout
	const res = await fetch("http://localhost:3000/auth/logout", {
		method: "POST",
		credentials: "include",
	});

	const data = await res.json();
	return data;
}
