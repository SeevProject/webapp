import { useContext, useEffect, useMemo } from 'react';
import { PiDotsThreeCircleLight } from 'react-icons/pi';
import {
	flexRender,
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
} from '@tanstack/react-table';
import { column } from './Header';
import { getAllUserInfo } from '../../data/queries';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

const Table = () => {
	const { user, setUser } = useContext(AuthContext);
	const [userS, setUserS] = useState([]);
	const [path, setPath] = useState('');
	// get user info from server
	const userInfoQuery = useQuery({
		queryKey: ['getAllUser'],
		queryFn: getAllUserInfo,
		onSuccess: (data) => {
			const newObj = data.data.map((a) => ({
				name: a.username,
				gender: 'Male',
				age: 28,
				phD: 'phD',
				field: 'a.data.education',
				employ: 'Yes',
				id: a._id,
			}));
			setUserS(newObj);
		},
		onError: (err) => {
			console.log('dont return data');
		},
		retry: 1,
	});

	useEffect(() => {
		if (user.data.type === 'admin') {
			setPath('admin/users');
		} else {
			setPath('companie');
		}
	}, [user]);

	const data = useMemo(() => userS, [userS]);
	const columns = useMemo(() => column, []);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(), // Pagination to got to another page for table and only show 10 or any number records
	});

	const { getHeaderGroups, getRowModel } = table;

	if ((userS.length === 0 || userInfoQuery.isError) && !user)
		return <div>Loading table...</div>;

	return (
		<div>
			<div className="bg-gray-100 text-gray-600 px-4 antialiased">
				<div className="flex h-full flex-col justify-center">
					<div className="bg-white mx-auto w-full max-w-7xl rounded-sm  shadow-lg">
						<div className="p-3">
							<div className="overflow-x-auto">
								<table className="w-full table-auto">
									<thead className="text-gray-400 bg-gray-50 text-xs font-semibold uppercase">
										{getHeaderGroups().map((headerGroup) => (
											<tr key={headerGroup.id}>
												{headerGroup.headers.map((header) => (
													<th
														className="pb-4"
														key={header.id}
														onClick={header.column.getToggleSortingHandler()}
													>
														{flexRender(
															header.column.columnDef.header,
															header.getContext(),
														)}
													</th>
												))}
											</tr>
										))}
									</thead>
									<tbody className="mb-2 text-sm">
										{getRowModel().rows.map((row) => {
											const { id } = row.original;
											return (
												<NavLink to={`/${path}/${id}`} key={row.id}>
													<tr key={row.id}>
														{row.getVisibleCells().map((cell) => {
															() => console.log(row.getValue(cell.column.id));

															return (
																<td
																	key={cell.id}
																	className="w-36 whitespace-nowrap p-2 pb-6 text-center"
																>
																	{flexRender(
																		cell.column.columnDef.cell,
																		cell.getContext(),
																	)}
																</td>
															);
														})}
													</tr>
												</NavLink>
											);
										})}
									</tbody>
								</table>
								{/* buttons for pagination to got to next page and previous page and also last page and first page   */}
								<div>
									<button
										className="mr-4 bg-box"
										onClick={() => table.setPageIndex(0)}
									>
										First Page
									</button>
									<button
										className="mr-4 bg-box"
										disabled={!table.getCanPreviousPage()}
										onClick={() => table.previousPage()}
									>
										Previous Page
									</button>
									<button
										className="mr-4 bg-box"
										disabled={!table.getCanNextPage()}
										onClick={() => table.nextPage()}
									>
										Next Page
									</button>
									<button
										className="mr-4 bg-box"
										onClick={() => table.setPageIndex(table.getPageCount() - 1)}
									>
										Last Page
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
