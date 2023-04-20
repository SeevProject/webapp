import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { tryLogin } from "../data/mutations";
import { Navigate } from "react-router-dom";

export function AuthPage() {
	// do login and logout mutations to server
	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: tryLogin,
	});

	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUserInfo,
		retry: 1,
	});

	// redirect to home if user is logged in
	if (userInfoQuery.isSuccess) return <Navigate replace to={"/"}></Navigate>;

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">LoginPage</h1>

			{/* on loading */}
			{userInfoQuery.status === "loading" && (
				<p className="text-gray-500">Loading</p>
			)}

			{/* on errors */}
			{userInfoQuery.status === "error" && (
				<>
					<p>{JSON.stringify(userInfoQuery.error)}</p>
					<button onClick={() => loginMutation.mutate()}>login</button>
				</>
			)}
		</div>
	);
}
