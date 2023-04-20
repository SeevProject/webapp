import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function LoginPage() {
	// get auth state
	const [user, userLoading] = useAuthState(auth);

	async function getUsers() {
		const res = await fetch("http://localhost:3000/users", {
			credentials: "include",
		});
		const data = await res.json();
		console.log(data);
	}

	// login the user with google
	async function loginWithGoogle() {
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

		// log the response
		console.log(data);
	}

	// logout the user
	function logout() {
		signOut(auth);
	}

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">LoginPage</h1>
			{userLoading ? (
				<p>Loading...</p>
			) : (
				<button
					onClick={() => {
						user ? logout() : loginWithGoogle();
					}}
					className="w-fit rounded-lg bg-red-300 p-2 text-black"
				>
					{user ? "Logout" : "Login"}
				</button>
			)}
			<button onClick={() => getUsers()}>users</button>
		</div>
	);
}
