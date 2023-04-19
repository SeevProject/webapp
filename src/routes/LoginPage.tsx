import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function LoginPage() {
	// get auth state
	const [user, userLoading] = useAuthState(auth);

	// login the user with google
	function loginWithGoogle() {
		signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
			result.user.getIdToken().then((token) => {
				console.log(token);
			});
		});
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
		</div>
	);
}
