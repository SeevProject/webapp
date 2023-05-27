import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiUserCircle, HiCog, HiArrowRight } from "react-icons/hi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ProfileDropdown() {
	return (
		<Menu
			as="div"
			className="relative inline-block text-left focus:outline-none"
		>
			<div
				style={{
					outline: "none",
					color: "white",
				}}
			>
				{/* Fix  color and hover amd item hover and make center*/}
				<Menu.Button className="ring-gray-300 inline-flex items-center justify-center rounded-[0.6rem] bg-accentPrimary px-[0.65rem] py-2 text-sm font-semibold ring-inset">
					<HiUserCircle className="h-7 w-7" />
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
				<Menu.Items className="ring-black absolute right-[-2.4rem]  mt-2 w-[8rem] origin-top-right rounded-lg border border-border bg-box shadow-lg ring-opacity-5 focus:outline-none ">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<a
									href="#"
									className={classNames(
										active ? "bg-gray-100 text-gray-900" : "text-gray-700",
										"block px-4 py-2 text-sm hover:opacity-70",
									)}
								>
									<HiCog className="text-gray-500 mr-2 inline h-5 w-5" />
									Settings
								</a>
							)}
						</Menu.Item>

						<form method="POST" action="/admin">
							<Menu.Item>
								{({ active }) => (
									<button
										type="submit"
										className={classNames(
											active ? "bg-gray-100 text-gray-900" : "text-gray-700",
											"block w-full px-4 py-2 text-left text-sm hover:opacity-70",
										)}
									>
										<HiArrowRight className="text-gray-500 mr-2 inline h-5 w-5" />
										Logout
									</button>
								)}
							</Menu.Item>
						</form>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
