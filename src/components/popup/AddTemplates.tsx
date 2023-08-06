import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

export default function AddTemplates() {
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
								<Dialog.Panel className="h-[19rem] w-[22rem] transform overflow-hidden rounded-2xl bg-background p-4 text-left align-middle shadow-[0px_9px_15px_2px_#00000024] transition-all">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
												<Dialog.Title
													as="h3"
													className="text-xl font-semibold leading-6"
												>
													Adding Template
												</Dialog.Title>
											</div>
										</div>
									</div>
									<div className="my-4  ">
										<div className="mx-auto flex h-[110px] w-[176px] items-center rounded-xl bg-box">
											<AiOutlineFileAdd className="h-[4rem] w-[11rem] cursor-pointer text-textAlt" />
										</div>
										<h4 className="mt-1 text-center text-xs text-border">
											File Name
										</h4>
									</div>

									<div className="px-4 py-4  sm:flex sm:flex-row-reverse  sm:px-6">
										<button
											type="button"
											className="inline-block w-full justify-center rounded-lg border border-border bg-accentPrimary   px-[0.8rem] py-1  text-sm font-semibold text-background shadow-sm sm:ml-3 sm:w-auto"
											onClick={closeModal}
										>
											Save
										</button>
										<button
											type="button"
											className="inline-block w-full justify-center rounded-lg border border-border bg-box p-2 text-sm  font-semibold text-text shadow-sm hover:bg-background sm:ml-3 sm:w-auto"
											onClick={closeModal}
										>
											Discard
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
