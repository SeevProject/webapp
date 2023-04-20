import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { tryLogout, tryLogin } from "../data/mutations";

export function AuthPage() {
	// do login and logout mutations to server
	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: tryLogin,
		networkMode: "offlineFirst",
	});

	const logoutMutation = useMutation({
		mutationKey: ["logout"],
		mutationFn: tryLogout,
		networkMode: "offlineFirst",
	});

	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo", loginMutation.status, logoutMutation.status],
		queryFn: getUserInfo,
		networkMode: "offlineFirst",
	});

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-bold">LoginPage</h1>
			<div>
				{userInfoQuery.isLoading ? (
					<p>Loading</p>
				) : userInfoQuery.isError ? (
					<>
						<p>Error: {JSON.stringify(userInfoQuery.error)}</p>
						<button
							className="bg-red-800 p-2"
							onClick={() => loginMutation.mutate()}
						>
							Login
						</button>
					</>
				) : (
					<>
						<p>UID: {userInfoQuery.data.uid}</p>
						<button
							className="bg-red-800 p-2"
							onClick={() => logoutMutation.mutate()}
						>
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
}
