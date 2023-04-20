import { useMutation, useQuery } from "@tanstack/react-query";
import { tryLogout } from "../data/mutations";
import { getUserInfo } from "../data/queries";
import { Link } from "react-router-dom";
import { Button } from "./Button";

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
					<Button title="Logout" handleClick={() => logoutMutation.mutate()} />
				) : (
					<Link to={"/auth"}>
						<Button title="Login" handleClick={() => {}} />
					</Link>
				)}
			</div>
		</div>
	);
}
