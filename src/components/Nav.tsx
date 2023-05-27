import { useMutation, useQuery } from "@tanstack/react-query";
import { tryLogout } from "../data/mutations";
import { getUserInfo } from "../data/queries";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";
import AdminProfile from './AdminProfile'

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
			{location.pathname.startsWith("/admin") ? ( // This code runs for every route that starts with "/admin"
				<div className="flex w-full flex-row justify-between gap-4 px-24 pt-8">
					<Link to={"/"}>
						<p className="font-bold">Logo</p>
					</Link>
					{/* Three buttons inside the admin route */}
					<div className=" flex flex-row rounded-full border border-border bg-box ">
						<Button
							className={`!rounded-l-full !rounded-r-none px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "templates"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`} // If the template button is active, add specific styles; otherwise, add different styles
							handleClick={() => {
								setActiveButton("templates"); // Set the template button as active when clicked
								navigate("/admin/templates"); // Go to this route when the button is active
							}}
							title="Templates" // Button button
						/>

						<Button // This is the second button. It has the same functionality as the first button, but with a different style for the radius.
							title="Companies"
							className={`!rounded-none  px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "companies"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`}
							handleClick={() => {
								setActiveButton("companies"); // Set the template button as active when clicked
								navigate("/admin/companies"); // Go to this route when the button is active
							}}
						/>
						<Button // This is the third button. It has the same functionality as the first and second button, but with a different style for the radius.
							className={`!rounded-l-none !rounded-r-full px-4 py-1.5 hover:bg-accentPrimary hover:text-background ${
								activeButton === "users"
									? "bg-accentPrimary text-background"
									: "bg-box text-text"
							}`}
							handleClick={() => {
								setActiveButton("users"); // Set the template button as active when clicked
								navigate("/admin/users"); // Go to this route when the button is active
							}}
							title="Users"
						/>
					</div>
					<div className="flex flex-row gap-2">
						<AdminProfile />
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
