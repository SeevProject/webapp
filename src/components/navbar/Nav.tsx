import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../data/queries";
import { Link } from "react-router-dom";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import { AiOutlineLoading } from "react-icons/ai";
import { NavCenterItem } from "./NavCenterItem";
import { Menu } from "@headlessui/react";
import { ProfileDropdownItem } from "../dropdown/ProfileDropdownItem";
import { HiCog, HiArrowRight } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { tryLogout } from "../../data/mutations";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export function Nav() {
	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ["userInfo"],
		queryFn: getUserInfo,
		retry: 1,
	});

	// try to logout
	const logoutMutation = useMutation({
		mutationKey: ["logout"],
		mutationFn: tryLogout,
	});
	const location = useLocation();

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
				) : userInfoQuery.data ? (
					<ProfileDropdown
						notLoggedIn={true}
						menuItemsPoition={"-left-[25px]"}
					/>
				) : location.pathname.startsWith("/companie") ? (
					<ProfileDropdown
						notLoggedIn={false}
						menuItemsPoition={"-left-[35px]"}
						customItemsComponent={
							<>
								<p className="mb-[0.3rem] border-b border-b-border pl-3 pt-2 ">
									CMP Name
								</p>
								<Menu.Item>
									<ProfileDropdownItem
										text="Settings"
										icon={
											<HiCog className="text-gray-500 mr-2 inline h-5 w-5 " />
										}
										handleClick={() => {}}
									/>
								</Menu.Item>
								<Menu.Item>
									<ProfileDropdownItem
										text="Support"
										icon={
											<BiSupport className="text-gray-500 mr-2 inline h-5 w-5" />
										}
										handleClick={() => null}
									/>
								</Menu.Item>
								<Menu.Item>
									<ProfileDropdownItem
										text="Logout"
										icon={
											<HiArrowRight className="text-gray-500 mr-2 inline h-5 w-5" />
										}
										handleClick={() => logoutMutation.mutate()}
									/>
								</Menu.Item>
							</>
						}
					/>
				) : (
					<ProfileDropdown
						notLoggedIn={false}
						menuItemsPoition={"-left-[35px]"}
						customItemsComponent={
							<>
								<Menu.Item>
									<ProfileDropdownItem
										text="Settings"
										icon={
											<HiCog className="text-gray-500 mr-2 inline h-5 w-5" />
										}
										handleClick={() => {}}
									/>
								</Menu.Item>
								<Menu.Item>
									<ProfileDropdownItem
										text="Logout"
										icon={
											<HiArrowRight className="text-gray-500 mr-2 inline h-5 w-5" />
										}
										handleClick={() => logoutMutation.mutate()}
									/>
								</Menu.Item>
							</>
						}
					/>
				)}
			</div>
		</div>
	);
}