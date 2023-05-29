import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiUserCircle, HiCog, HiArrowRight } from "react-icons/hi";
import { tryLogout } from "../data/mutations";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./Button";
import { ProfileDropdownItem } from "./ProfileDropdownItem";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown(props: { notLoggedIn?: boolean }) {
	const navigate = useNavigate();

	// try to logout
	const logoutMutation = useMutation({
		mutationKey: ["logout"],
		mutationFn: tryLogout,
	});

	return (
		<Menu
			as="div"
			className="relative inline-block text-left focus:outline-none"
		>
			<div className="text-white outline-none">
				{/* Fix  color and hover amd item hover and make center*/}
				<Menu.Button>
					<Button
						handleClick={() => {}}
						icon={<HiUserCircle className="h-7 w-7" />}
					></Button>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="ring-black absolute -left-[37px] rounded-lg border border-border bg-box ring-opacity-5 focus:outline-none">
					{/* if the user is not logged in */}
					{props.notLoggedIn ? (
						<Menu.Item>
							<>
								<p className="px-2 py-2 text-sm">You're not logged in</p>

								<ProfileDropdownItem
									text="Login"
									icon={<HiCog className="text-gray-500 mr-2 inline h-5 w-5" />}
									handleClick={() => navigate("/auth")}
								/>
							</>
						</Menu.Item>
					) : (
						// if the user is logged in
						<>
							<Menu.Item>
								<ProfileDropdownItem
									text="Settings"
									icon={<HiCog className="text-gray-500 mr-2 inline h-5 w-5" />}
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
						// if the user is logged in end
					)}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
