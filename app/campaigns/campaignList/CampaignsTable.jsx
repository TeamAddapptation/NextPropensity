"use client";
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Link from "next/link";
import TablePagination from "./Pagination";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

function CampaignsTable({ campaignData }) {
	console.log("Table: ", campaignData);

	const [sorting, setSorting] = useState([]);

	const data = useMemo(() => campaignData, [campaignData]);

	const columns = [
		{
			header: "ID",
			accessorKey: "id",
		},
		{
			header: "Name",
			accessorKey: "name",
			cell: (info) => <Link href={`/campaigns/${info.row.original.id}`}>{info.getValue()}</Link>,
		},
		{
			header: "Playbook",
			accessorKey: "playbook",
		},
		{
			header: "Status",
			accessorKey: "status",
		},
	];

	const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel(), getSortedRowModel: getSortedRowModel(), state: { sorting: sorting }, onSortingChange: setSorting });

	return (
		<div className='table-responsive'>
			<table className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'">
							{headerGroup.headers.map((header) => (
								<th key={header.id} onClick={header.column.getToggleSortingHandler()}>
									{flexRender(header.column.columnDef.header, header.getContext())}
									{{ asc: <ArrowUp />, desc: <ArrowDown /> }[header.column.getIsSorted() ?? null]}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className='text-gray-600 fw-bold'>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<TablePagination table={table} />
			<strong>
				{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
			</strong>
		</div>
	);
}

export default CampaignsTable;
