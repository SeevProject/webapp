import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { tryLogin, tryRegister } from "../data/mutations";
import { Navigate } from "react-router-dom";
import { Button } from "../components/Button";
import { TbLogin } from "react-icons/tb";

export function AuthPage() {
	// do login and logout mutations to server
	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: tryLogin,
	});

	const registerMutation = useMutation({
		mutationKey: ["register"],
		mutationFn: tryRegister,
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
					<Button
						title="register"
						icon={<TbLogin />}
						handleClick={() => registerMutation.mutate()}
					/>
					<Button
						title="Login with Google"
						icon={<TbLogin />}
						handleClick={() => loginMutation.mutate()}
					/>
				</>
			)}
		</div>
	);
}
