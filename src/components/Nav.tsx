import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { AiOutlineLoading } from "react-icons/ai";

export function Nav() {
	const navigate = useNavigate();
	const location = useLocation();

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
						className={`rounded-[10rem] px-4 py-1.5 ${
							location.pathname.includes("templates")
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`} // If the template button is active, add specific styles; otherwise, add different styles
						onClick={() => navigate("/admin/templates")}
					>
						Templates
					</button>

					<button
						className={`rounded-[10rem] px-4 py-1.5 ${
							location.pathname.includes("companies")
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`}
						onClick={() => navigate("/admin/companies")}
					>
						Companies
					</button>

					<button
						className={`rounded-[10rem] px-4 py-1.5 ${
							location.pathname.includes("users")
								? "bg-accentPrimary text-background"
								: "bg-box text-text"
						}`}
						onClick={() => navigate("/admin/users")}
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
