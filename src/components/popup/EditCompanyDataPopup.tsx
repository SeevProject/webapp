import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TiTick, TiTimes } from "react-icons/ti";

export default function EditCompanyDataPopup(props) {
	const { show, onCancel } = props;

	const [open, setOpen] = useState(show);

	const cancelButtonRef = useRef(null);

	if (!open) {
		return null;
	}

	const handleCancel = () => {
		setOpen(false);
		onCancel();
	};

	const [isTrue, setIsTrue] = useState(false);

	const handleClick = () => {
		setIsTrue(!isTrue);
	};

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={() => setOpen(false)} // Fix the onClose event handler
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="bg-gray-500 fixed inset-0 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="bg-white relative transform overflow-hidden rounded-lg text-left shadow-[0px_9px_15px_2px_#00000024] transition-all sm:my-8 sm:w-full sm:max-w-lg ">
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
													className="inline-block rounded-lg border border-border bg-box px-2 py-1"
													onClick={handleClick}
												>
													{isTrue ? "Yes" : "No"}
													{isTrue ? (
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
														<button className="inline-block rounded-lg border border-border bg-box px-2 py-1">
															English lvl2
														</button>
														<button className="ml-1 inline-block rounded-lg border border-border bg-box px-2 py-1">
															+
														</button>
													</button>
												</div>
												<div className="mt-2">
													<button>
														X Languages:
														<button className="inline-block rounded-lg border border-border bg-box px-2 py-1">
															English lvl2
														</button>
														<button className="ml-1 inline-block rounded-lg border border-border bg-box px-2 py-1">
															+
														</button>
													</button>
												</div>
												<div className="mt-2">
													<button>
														X Languages:
														<button className="inline-block rounded-lg border border-border bg-box px-2 py-1">
															English lvl2
														</button>
														<button className="ml-1 inline-block rounded-lg border border-border bg-box px-2 py-1">
															+
														</button>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="bg-red-600 text-white hover:bg-red-500 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
										onClick={() => setOpen(false)}
									>
										Deactivate
									</button>
									<button
										type="button"
										className="bg-white text-gray-900 ring-gray-300 hover:bg-gray-50 mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto"
										onClick={handleCancel}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
