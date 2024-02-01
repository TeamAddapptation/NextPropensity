"use client";
import Pagination from "react-bootstrap/Pagination";

function TablePagination({ table }) {
	return (
		<Pagination>
			<Pagination.First onClick={() => table.setPageIndex(0)} />
			<Pagination.Prev disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} />
			<Pagination.Next disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} />
			<Pagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} />
		</Pagination>
	);
}

export default TablePagination;
