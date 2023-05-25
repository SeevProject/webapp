import { useMutation, useQuery } from "@tanstack/react-query";
import { tryLogout } from "../data/mutations";
import { getUserInfo } from "../data/queries";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export function Nav() {
	const location = useLocation();
	const [activeButton, setActiveButton] = useState("templates");
	const navigate = useNavigate();
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
		<div>
			{location.pathname.startsWith("/admin") ? ( // Every route start with admin run this code
				<div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
					<Link to={"/"}>
						<p className="font-bold">Logo</p>
					</Link>
					<div className=" flex flex-row rounded-full border border-border bg-box ">
						<Button
							className={`!important rounded-full px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "templates"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`}
							handleClick={() => {
								setActiveButton("templates");
								navigate("/admin/templates");
								{
									/* Go to these route if button is active */
								}
							}}
							title="Templates"
						/>

						<Button
							title="Companies"
							className={`!important rounded-full  px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "companies"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`}
							handleClick={() => {
								setActiveButton("companies");
								navigate("/admin/companies");
							}}
						/>

						<Button
							className={`!important rounded-full  px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "users"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`}
							handleClick={() => {
								setActiveButton("users");
								navigate("/admin/users");
							}}
							title="Users"
						/>
					</div>

					<div className="flex flex-row gap-2">
						<Button handleClick={() => {}} title="Profile Icon" />
					</div>
				</div>
			) : (
				// if it's not start with admin run this code
				<div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
					<Link to={"/"}>
						<p className="font-bold">Logo</p>
					</Link>
					<div className="flex flex-row gap-2">
						{userInfoQuery.isLoading ? (
							<p>Loading...</p>
						) : userInfoQuery.data ? (
							<Button
								title="Logout"
								handleClick={() => logoutMutation.mutate()}
							/>
						) : (
							<Link to={"/auth"}>
								<Button title="Login" handleClick={() => {}} />
							</Link>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
