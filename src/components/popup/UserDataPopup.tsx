import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdPersonSearch } from "react-icons/md";

export default function UserDataPopup() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div className=" flex items-center justify-center">
				<button
					type="button"
					onClick={openModal}
					className="text-white focus-visible:ring-white cursor-pointer rounded-md bg-accentSecondary bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75"
				>
					Open popup
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="bg-black fixed inset-0 bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="bg-white h-[33rem] max-w-[32rem] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-[0px_9px_15px_2px_#00000024] transition-all">
									<div className="flex items-center justify-between">
										<MdPersonSearch
											className="h-20 w-24 rounded-full"
											style={{ color: "#FC991C" }}
										/>
										<div className=" mr-1 w-[23rem] pb-2 pl-3">
											<h1 className=" text-xl font-semibold">John B. Smith</h1>
											<p className="text-xs">
												A motivated worker. doing blah blah blah and everything
												else
											</p>
										</div>
										<div>
											<p className="font-bold">Male 31</p>
											<p className="font-bold">Unemployed</p>
											<p className="font-bold">Erbil</p>
										</div>
									</div>
									<div className="my-6">
										<h3 className="pb-2 text-lg font-bold">Experience</h3>
										<div className="flex w-64 items-center justify-between">
											<p className="text-gray-500 pb-1 text-sm font-medium">
												Editor, Washington Post
											</p>
											<p className="text-gray-500 pb-1 text-sm font-medium">
												2021 - 2023
											</p>
										</div>
										<p className="text-sm">
											Editing articles, making them comply to the standards of
											quality
										</p>
									</div>
									<div className="my-6">
										<h3 className="pb-2 text-lg font-bold">Education</h3>
										<div className="flex w-64 items-center justify-between">
											<p className="text-gray-500 pb-1 text-sm font-medium">
												PhD, Stanford University
											</p>
											<p className="text-gray-500 pb-1 text-sm font-medium">
												2018 - 2023
											</p>
										</div>
										<p className="text-sm">
											In Journalism. Studied fields were, blah, blah, and blah.
										</p>
									</div>
									<div>
										<h2 className="pb-2 text-lg font-bold">Skills</h2>
										<div className="flex w-44 items-center justify-between">
											<p className="text-gray-500 pb-1 text-sm font-medium">
												Content Writing
											</p>
											<p className="text-gray-500 pb-1 text-sm font-medium">
												7/10
											</p>
										</div>
										<div className="flex w-44 items-center justify-between">
											<p className="text-gray-500 pb-1 text-sm font-medium">
												Creativity
											</p>
											<p className="text-gray-500 pb-1 text-sm font-medium">
												8/10
											</p>
										</div>
									</div>

									<div className=" mt-12 text-center">
										<button
											type="button"
											className="inline-flex h-[2.4rem] w-[17rem] justify-center rounded-md border border-transparent bg-accentPrimary px-4 py-2 text-sm font-medium text-background hover:bg-accentSecondary focus:outline-none  "
											onClick={closeModal}
										>
											View CV for more information!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
