import { PiDotsThreeCircleLight } from "react-icons/pi";

const Table = () => {
	return (
		<div>
			<div className="bg-gray-100 h-screen p-5">
				<div className=" mx-6 overflow-auto rounded-lg">
					<table className="w-full">
						<thead>
							<tr>
								<th className="w-32">
									<input
										type="text"
										className=" mb-3 w-32 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="Name"
										required
									/>
								</th>
								<th className="w-0">
									<input
										type="text"
										className=" mb-3 w-28 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="Gender"
										required
									/>
								</th>
								<th className="w-0">
									<input
										type="text"
										className=" mb-3 w-28 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="Age"
										required
									/>
								</th>

								<th className="w-0">
									<input
										type="text"
										className=" mb-3 w-28 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="pdH"
										required
									/>
								</th>

								<th className="w-0">
									<input
										type="text"
										className="mb-3 w-48 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="Field"
										required
									/>
								</th>
								<th className="w-0">
									<input
										type="text"
										className="mb-3 w-32 rounded-full border border-border bg-box p-2 text-center  text-sm font-semibold tracking-wide outline-none placeholder:text-textAlt"
										placeholder="Employ"
										required
									/>
								</th>
								<th className="w-0">
									<div className="mb-3"> </div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white">
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<a
										href="#"
										className="text-blue-500 font-bold hover:underline"
									>
										John
									</a>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Male
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<span className="text-green-800 bg-green-200 rounded-lg bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider">
										25
									</span>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									pdH
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Computer since
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Non-employ
								</td>
								<td>
									<PiDotsThreeCircleLight className="h-[23px] w-[23px] cursor-pointer" />
								</td>
							</tr>
							<tr className="bg-white">
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<a
										href="#"
										className="text-blue-500 font-bold hover:underline"
									>
										John
									</a>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Male
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<span className="text-green-800 bg-green-200 rounded-lg bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider">
										25
									</span>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									pdH
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Computer since
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Non-employ
								</td>
								<td>
									<PiDotsThreeCircleLight className="h-[23px] w-[23px] cursor-pointer" />
								</td>
							</tr>
							<tr className="bg-white">
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<a
										href="#"
										className="text-blue-500 font-bold hover:underline"
									>
										John
									</a>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Male
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									<span className="text-green-800 bg-green-200 rounded-lg bg-opacity-50 p-1.5 text-xs font-medium uppercase tracking-wider">
										25
									</span>
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									pdH
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Computer since
								</td>
								<td className="text-gray-700 whitespace-nowrap p-3 text-center text-sm">
									Non-employ
								</td>
								<td>
									<PiDotsThreeCircleLight className="h-[23px] w-[23px] cursor-pointer" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Table;
