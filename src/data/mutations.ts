import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase';

async function tryAuthwithgoogle(url: 'login') {
	// sign in and get token
	const user = await signInWithPopup(auth, new GoogleAuthProvider());
	// console.log(user);

	const token = await user.user.getIdToken();

	const bodyData = {
		uid: user?.user.providerData[0].uid,
		username: user?.user.providerData[0].displayName,
		type: 'company',
	};

	// send request to login with token
	const res = await fetch(`http://localhost:8080/auth/loginwithgoogle`, {
		method: 'POST',
		credentials: 'include',
		body: new Blob([JSON.stringify(bodyData)], { type: 'application/json' }),
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.body}`);

	const data = await res.json();

	return data;
}

// login and register both call auth using different urls

export async function tryLoginWithGoogle() {
	return tryAuthwithgoogle('login');
}

export async function tryLogin(username: string, password: string) {
	const bodyData = {
		uid: password,
		username: username
	};

	// send request to login with token
	const res = await fetch(`http://localhost:8080/auth/login`, {
		method: 'POST',
		credentials: 'include',
		body: new Blob([JSON.stringify(bodyData)], { type: 'application/json' }),
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.body}`);

	const data = await res.json();

	console.log(data)

	return data;
}

export async function tryRegister() {
	// console.log(user);

	// const bodyData = {
	// 	uid: user?.user.providerData[0].uid,
	// 	username: user?.user.providerData[0].displayName,
	// 	type: 'company',
	// };

	// // send request to login with token
	// const res = await fetch(`http://localhost:8080/auth/${url}`, {
	// 	method: 'POST',
	// 	credentials: 'include',
	// 	body: new Blob([JSON.stringify(bodyData)], { type: 'application/json' }),
	// });

	// // if not ok, reject with status text
	// if (!res.ok) return Promise.reject(`${res.body}`);

	// const data = await res.json();

	// return data;
}

export async function tryLogout() {
	// sign out from google
	signOut(auth);

	// send request for logout
	const res = await fetch('http://localhost:8080/auth/logout', {
		method: 'POST',
		credentials: 'include',
	});

	// if not ok, reject with status text
	if (!res.ok) return Promise.reject(`${res.statusText}`);
	const data = await res.json();

	return data;
}
