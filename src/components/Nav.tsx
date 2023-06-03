import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../data/queries";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import { AiOutlineLoading } from "react-icons/ai";
import { NavCenterItem } from "./NavCenterItem";

export function Nav() {
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

				{/* Navigation Center */}
				{userInfoQuery.data && (
					<div className="flex flex-row overflow-hidden rounded-full border border-border bg-box">
						<NavCenterItem title="Templates" navigateTo="/admin/templates" />
						<NavCenterItem title="Companies" navigateTo="/admin/companies" />
						<NavCenterItem title="Users" navigateTo="/admin/users" />
					</div>
				)}

				{/* Dropdown for profile */}
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
