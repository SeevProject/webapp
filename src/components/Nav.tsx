import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { AiOutlineLoading } from "react-icons/ai";

export function Nav() {
	const [activeButton, setActiveButton] = useState("templates");
	const navigate = useNavigate();

	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUserInfo,
		retry: 1,
	});

	return (
		<div>
			<div className="flex w-full flex-row items-center justify-between gap-4 px-24 pt-8">
				{/* Logo */}
				<Link to={"/"}>
					<p className="font-bold">Logo</p>
				</Link>

				{/* Three buttons inside the admin route */}
				<div className="flex flex-row overflow-hidden rounded-full border border-border bg-box">
					<button
						className={`rounded-[10rem] px-4 py-2 ${
							activeButton === "templates"
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`} // If the template button is active, add specific styles; otherwise, add different styles
						onClick={() => {
							setActiveButton("templates"); // Set the template button as active when clicked
							navigate("/admin/templates"); // Go to this route when the button is active
						}}
					>
						Templates
					</button>

					<button
						className={`rounded-[10rem] px-4 py-2 ${
							activeButton === "companies"
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`}
						onClick={() => {
							setActiveButton("companies"); // Set the template button as active when clicked
							navigate("/admin/companies"); // Go to this route when the button is active
						}}
					>
						Companies
					</button>

					<button
						className={`rounded-[10rem] px-4 py-2 ${
							activeButton === "users"
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`}
						onClick={() => {
							setActiveButton("users"); // Set the template button as active when clicked
							navigate("/admin/users"); // Go to this route when the button is active
						}}
					>
						Users
					</button>
				</div>
				{/* Three buttons inside the admin route End */}

				{/* The dropdown */}
				{userInfoQuery.isLoading ? (
					<AiOutlineLoading className="h-8 w-8 animate-spin" />
				) : !userInfoQuery.data ? (
					<ProfileDropdown notLoggedIn />
				) : (
					<ProfileDropdown />
				)}
			</div>
		</div>
	);
}
