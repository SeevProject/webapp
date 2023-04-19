import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import { auth } from "../firebase";
import { useCallback } from "react";
import { Link } from "react-router-dom";

export function Layout() {
	// get auth state
	const [user, loading] = useAuthState(auth);

	// get user data or loading or not logged in based on auth
	const getUser = useCallback(() => {
		if (loading) return <p>Loading...</p>;
		if (!user) return <p>Not logged in</p>;
		return <p className="font-bold">{user.displayName}</p>;
	}, [loading, user]);

	return (
		<div className="min-w-screen flex min-h-screen flex-col gap-8">
			{/* Nav */}
			<div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
				<Link to={"/"}>
					<p className="font-bold">Logo</p>
				</Link>
				{getUser()}
			</div>
			{/* Nav end */}
			<div className="px-24">
				<Outlet />
			</div>
		</div>
	);
}
