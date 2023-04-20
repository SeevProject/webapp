import { useMutation, useQuery } from "@tanstack/react-query";
import { tryLogout } from "../data/mutations";
import { getUserInfo } from "../data/queries";
import { Link } from "react-router-dom";

export function Nav() {
	// try to logout
	const logoutMutation = useMutation({
		mutationKey: ["logout"],
		mutationFn: tryLogout,
	});

	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUserInfo,
		retry: 1,
	});

	return (
		<div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
			<Link to={"/"}>
				<p className="font-bold">Logo</p>
			</Link>
			<div className="flex flex-row gap-2">
				{userInfoQuery.isLoading ? (
					<p>Loading...</p>
				) : userInfoQuery.data ? (
					<button
						className="rounded-lg bg-red-800 p-1"
						onClick={() => logoutMutation.mutate()}
					>
						logout
					</button>
				) : (
					<Link to={"/auth"}>
						<button className="rounded-lg bg-amber-800 p-1">Login</button>
					</Link>
				)}
			</div>
		</div>
	);
}
