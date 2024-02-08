"use client";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Link from "next/link";
import TablePagination from "./Pagination";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

function CampaignsTable({ campaignData }) {
	const [sorting, setSorting] = useState([]);

	const data = useMemo(() => campaignData, [campaignData]);

	const columns = [
		{
			header: "Name",
			accessorKey: "name",
			cell: (info) => (
				<Link className='text-blue-600 visited:text-purple-600' href={`/campaigns/${info.row.original.id}`}>
					{info.getValue()}
				</Link>
			),
		},
		{
			header: "Playbook",
			accessorKey: "playbook",
		},
		{
			header: "Status",
			accessorKey: "status",
			classes: "flex justify-center items-center",
			side: 20,
			cell: (info) => (info.getValue() == "Inactive" ? <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20'>Inactive</span> : <span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>Active</span>),
		},
	];

	const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(), state: { sorting: sorting }, onSortingChange: setSorting });

	console.log(table.getHeaderGroups());

	return (
		<>
			<div className='px-4 sm:px-6 lg:px-8'>
				<div className='sm:flex sm:items-center'>
					<div className='sm:flex-auto'>
						<h1 className='text-base font-semibold leading-6 text-gray-900'>Users</h1>
						<p className='mt-2 text-sm text-gray-700'>A list of all the users in your account including their name, title, email and role.</p>
					</div>
					<div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
						<button type='button' className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							New Campaign
						</button>
					</div>
				</div>
				<div className='mt-8 flow-root'>
					<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
							<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-300'>
									<thead className='bg-gray-50'>
										{table.getHeaderGroups().map((headerGroup) => (
											<tr key={headerGroup.id}>
												{headerGroup.headers.map((header) => (
													<th scope='col' className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ${header.column.columnDef.classes}`} key={header.id} onClick={header.column.getToggleSortingHandler()}>
														{flexRender(header.column.columnDef.header, header.getContext())}
														{{ asc: <ArrowUp />, desc: <ArrowDown /> }[header.column.getIsSorted() ?? null]}
													</th>
												))}
											</tr>
										))}
									</thead>
									<tbody className='divide-y divide-gray-200 bg-white'>
										{table.getRowModel().rows.map((row) => (
											<tr key={row.id}>
												{row.getVisibleCells().map((cell) => (
													<td key={cell.id} className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
														{flexRender(cell.column.columnDef.cell, cell.getContext())}
													</td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CampaignsTable;
