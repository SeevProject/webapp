import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";

async function tryAuth(url: "login" | "register") {
	// sign in and get token
	const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
	const token = await user.getIdToken();

	// send request to login with token
	const res = await fetch(`http://localhost:3000/auth/${url}`, {
		method: "POST",
		credentials: "include",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();
	return data;
}

// login and register both call auth using different urls

export async function tryLogin() {
	return tryAuth("login");
}

export async function tryRegister() {
	return tryAuth("register");
}

export async function tryLogout() {
	// sign out from google
	signOut(auth);

	// send request for logout
	const res = await fetch("http://localhost:3000/auth/logout", {
		method: "POST",
		credentials: "include",
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);

	const data = await res.json();
	return data;
}
