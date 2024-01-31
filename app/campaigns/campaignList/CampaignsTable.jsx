"use client";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
import Link from "next/link";

function CampaignsTable({ campaignData }) {
	console.log("Table: ", campaignData);

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

	const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

	return (
		<div className='table-responsive'>
			<table className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id} className="className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'">
							{headerGroup.headers.map((header) => (
								<th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
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
		</div>
	);
}

export default CampaignsTable;
