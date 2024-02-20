"use client";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";
import { formatDate } from "@/app/utilities/helpers";

function PlaysTable({ plays, selectPlay, editMode }) {
	const [sorting, setSorting] = useState([]);
	const data = useMemo(() => plays, [plays]);

	function statusHandler(info) {
		const status = info.getValue();
		let style = {};

		switch (status) {
			case "Active":
				style = "bg-green-50 text-green-700 ring-green-600/20";
				break;
			case "Failed":
				style = "bg-red-50 text-red-700 ring-red-600/20";
				break;
			case "Paused":
				style = "bg-yellow-50 text-yellow-700 ring-yellow-600/20";
				break;
			case "Paused":
				style = "bg-orange-50 text-orange-700 ring-orange-600/20";
				break;
			case "Ended":
				style = "bg-gray-50 text-gray-700 ring-gray-600/20";
				break;
			default:
				style = "bg-gray-50 text-gray-700 ring-gray-600/20";
		}

		return <div className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${style}`}>{status}</div>;
	}

	const columns = [
		{
			header: "Play",
			accessorFn: (row) => ({ name: row.name, type: row.type }),
			cell: (info) => (
				<div>
					<div className='text-gray-500 text-xs'>{info.getValue().type}</div>
					<div className='font-medium text-gray-900'>{info.getValue().name}</div>
				</div>
			),
		},
		{
			header: "Dates",
			accessorFn: (row) => ({ start: row.planned_start, end: row.planned_end }),
			cell: (info) => (
				<div className='flex'>
					<div className='font-medium text-gray-500'>{info.getValue().start ? formatDate(info.getValue().start) : "N/A"}</div>
					<span className='px-2'> - </span>
					<div className='font-medium text-gray-500'>{info.getValue().end ? formatDate(info.getValue().end) : "N/A"}</div>
				</div>
			),
		},
		{
			header: "Status",
			accessorKey: "status",
			cell: (info) => statusHandler(info),
		},
		{
			header: "Actions",
			id: "actions",
			classes: "flex justify-center",
			size: 150,
			cell: ({ row }) => (
				<div className='flex justify-center gap-2'>
					{/* Example buttons */}
					<button
						type='button'
						onClick={() => selectPlay(row.original, true)}
						className='rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Edit
					</button>
					<button type='button' className='rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
						Delete
					</button>
				</div>
			),
		},
	];

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: { sorting: sorting },
		onSortingChange: setSorting,
	});

	return (
		<>
			<div>
				<div className='sm:flex sm:items-center'>
					<div className='sm:flex-auto'>
						<h1 className='font-semibold leading-6 text-gray-900'>Campaign Plays</h1>
					</div>
					<div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
						<button
							type='button'
							className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
						>
							Add Play
						</button>
					</div>
				</div>
				<div className='mt-4 flow-root'>
					<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
							<div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
								<table className='min-w-full divide-y divide-gray-300'>
									<thead className='bg-gray-50'>
										{table.getHeaderGroups().map((headerGroup) => (
											<tr key={headerGroup.id}>
												{headerGroup.headers.map((header) => (
													<th
														scope='col'
														className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ${header.column.columnDef.classes}`}
														key={header.id}
														onClick={header.column.getToggleSortingHandler()}
													>
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

export default PlaysTable;
