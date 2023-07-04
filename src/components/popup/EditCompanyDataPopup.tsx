import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";

export default function EditCompanyDataPopup() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const [isApprovTrue, setIsApprovTrue] = useState(false);
	const [isStudyingTrue, setIsStudyingTrue] = useState(false);

	const handleClick = () => {
		setIsApprovTrue(!isApprovTrue);
	};
	const handleStudyingClick = () => {
		setIsStudyingTrue(!isStudyingTrue);
	};

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
								<Dialog.Panel className="h-[23rem] w-[28rem] transform overflow-hidden rounded-2xl bg-background p-4 text-left align-middle shadow-[0px_9px_15px_2px_#00000024] transition-all">
									<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
												<Dialog.Title
													as="h3"
													className="text-lg font-semibold leading-6"
												>
													Editing Company
												</Dialog.Title>
												<div className="mt-4">
													<p className="inline-block pr-2 text-sm font-normal">
														Approved:
													</p>
													<button
														className="inline-block rounded-lg border border-border bg-box px-[0.8rem] py-1"
														onClick={handleClick}
													>
														{isApprovTrue ? "Yes" : "No"}
														{isApprovTrue ? (
															<TiTick
																style={{
																	display: "inline-block",
																}}
															/>
														) : (
															<TiTimes
																style={{
																	display: "inline-block",
																}}
															/>
														)}
													</button>
												</div>
												<div className="mt-4">
													<div className="mt-2">
														<button>
															X Languages:
															<select
																id="countries"
																className="text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 inline w-auto rounded-lg border border-border bg-box px-2 py-1.5 text-sm"
															>
																<option selected value="US">
																	English 1
																</option>
																<option value="CA">English 2</option>
																<option value="FR">English 3</option>
																<option value="DE">English 4</option>
															</select>
														</button>
													</div>
													<div className="mt-2">
														<button>
															X Studying:
															<button
																className="inline-block rounded-lg border border-border bg-box px-[0.8rem] py-1"
																onClick={handleStudyingClick}
															>
																{isStudyingTrue ? "Yes" : "No"}
																{isStudyingTrue ? (
																	<TiTick
																		style={{
																			display: "inline-block",
																		}}
																	/>
																) : (
																	<TiTimes
																		style={{
																			display: "inline-block",
																		}}
																	/>
																)}
															</button>
														</button>
													</div>
													<div className="mt-2">
														<button>
															X Locations:
															<select
																id="countries"
																className="text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 inline w-auto rounded-lg border border-border bg-box px-2 py-1.5 text-sm"
															>
																<option selected value="US">
																	United States
																</option>
																<option value="CA">Canada</option>
																<option value="FR">France</option>
																<option value="DE">Germany</option>
															</select>
														</button>
													</div>
												</div>
											</div>
										</div>
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
										<button
											type="button"
											className="mr-14 inline-block w-full justify-center rounded-lg border border-border bg-box p-2 text-sm font-semibold text-text shadow-sm hover:bg-background sm:ml-3 sm:w-auto"
											onClick={closeModal}
										>
											Add Permission +
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

// import { Fragment, useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { TiTick, TiTimes } from "react-icons/ti";

// export default function EditCompanyDataPopup(props) {
// 	const { show, onCancel } = props;

// 	const [open, setOpen] = useState(show);

// 	const cancelButtonRef = useRef(null);

// 	if (!open) {
// 		return null;
// 	}

// 	const handleClose = () => {
// 		setOpen(false);
// 		onCancel();
// 	};

// 	const [isApprovTrue, setIsApprovTrue] = useState(false);
// 	const [isStudyingTrue, setIsStudyingTrue] = useState(false);

// 	const handleClick = () => {
// 		setIsApprovTrue(!isApprovTrue);
// 	};
// 	const handleStudyingClick = () => {
// 		setIsStudyingTrue(!isStudyingTrue);
// 	};

// 	return (
// 		<Transition.Root show={open} as={Fragment}>
// 			<Dialog
// 				as="div"
// 				className="relative z-10"
// 				initialFocus={cancelButtonRef}
// 				onClose={handleClose} // Update the onClose event handler
// 				onClick={handleClose} // Add onClick event handler
// 			>
// 				<Transition.Child
// 					as={Fragment}
// 					enter="ease-out duration-300"
// 					enterFrom="opacity-0"
// 					enterTo="opacity-100"
// 					leave="ease-in duration-200"
// 					leaveFrom="opacity-100"
// 					leaveTo="opacity-0"
// 				>
// 					<div className="bg-gray-500 fixed inset-0 bg-opacity-75 transition-opacity" />
// 				</Transition.Child>

// 				<div className="fixed inset-0 z-10 overflow-y-auto">
// 					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
// 						<Transition.Child
// 							as={Fragment}
// 							enter="ease-out duration-300"
// 							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
// 							enterTo="opacity-100 translate-y-0 sm:scale-100"
// 							leave="ease-in duration-200"
// 							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
// 							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
// 						>
// 							<Dialog.Panel className="bg-white relative transform overflow-hidden rounded-lg text-left shadow-[0px_9px_15px_2px_#00000024] transition-all sm:my-8 sm:w-full sm:max-w-lg ">
// 								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
// 									<div className="sm:flex sm:items-start">
// 										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
// 											<Dialog.Title
// 												as="h3"
// 												className="text-lg font-semibold leading-6"
// 											>
// 												Editing Company
// 											</Dialog.Title>
// 											<div className="mt-4">
// 												<p className="inline-block pr-2 text-sm font-normal">
// 													Approved:
// 												</p>
// 												<button
// 													className="inline-block rounded-lg border border-border bg-box px-[0.8rem] py-1"
// 													onClick={handleClick}
// 												>
// 													{isApprovTrue ? "Yes" : "No"}
// 													{isApprovTrue ? (
// 														<TiTick
// 															style={{
// 																display: "inline-block",
// 															}}
// 														/>
// 													) : (
// 														<TiTimes
// 															style={{
// 																display: "inline-block",
// 															}}
// 														/>
// 													)}
// 												</button>
// 											</div>
// 											<div className="mt-4">
// 												<div className="mt-2">
// 													<button>
// 														X Languages:
// 														<select
// 															id="countries"
// 															className="text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 inline w-auto rounded-lg border border-border bg-box px-2 py-1.5 text-sm"
// 														>
// 															<option selected value="US">
// 																English 1
// 															</option>
// 															<option value="CA">English 2</option>
// 															<option value="FR">English 3</option>
// 															<option value="DE">English 4</option>
// 														</select>
// 													</button>
// 												</div>
// 												<div className="mt-2">
// 													<button>
// 														X Studying:
// 														<button
// 															className="inline-block rounded-lg border border-border bg-box px-[0.8rem] py-1"
// 															onClick={handleStudyingClick}
// 														>
// 															{isStudyingTrue ? "Yes" : "No"}
// 															{isStudyingTrue ? (
// 																<TiTick
// 																	style={{
// 																		display: "inline-block",
// 																	}}
// 																/>
// 															) : (
// 																<TiTimes
// 																	style={{
// 																		display: "inline-block",
// 																	}}
// 																/>
// 															)}
// 														</button>
// 													</button>
// 												</div>
// 												<div className="mt-2">
// 													<button>
// 														X Locations:
// 														<select
// 															id="countries"
// 															className="text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-3 inline w-auto rounded-lg border border-border bg-box px-2 py-1.5 text-sm"
// 														>
// 															<option selected value="US">
// 																United States
// 															</option>
// 															<option value="CA">Canada</option>
// 															<option value="FR">France</option>
// 															<option value="DE">Germany</option>
// 														</select>
// 													</button>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
// 									<button
// 										type="button"
// 										className="bg-red-600 text-white hover:bg-red-500 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
// 										onClick={() => setOpen(false)}
// 									>
// 										Deactivate
// 									</button>
// 									<button
// 										type="button"
// 										className="bg-white text-gray-900 ring-gray-300 hover:bg-gray-50 mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto"
// 										onClick={handleClose}
// 										ref={cancelButtonRef}
// 									>
// 										Cancel
// 									</button>
// 								</div>
// 							</Dialog.Panel>
// 						</Transition.Child>
// 					</div>
// 				</div>
// 			</Dialog>
// 		</Transition.Root>
// 	);
// }
