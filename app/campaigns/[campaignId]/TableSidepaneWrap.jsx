"use client";
import { useState } from "react";
import EditSidepane from "./EditSidepane";
import PlaysTable from "./PlaysTable";

function TableSidepaneWrap({ plays }) {
	const [isEditPaneOpen, setIsEditPaneOpen] = useState(false);
	const [editData, setEditData] = useState(null);

	const handleEdit = (data) => {
		setEditData(data);
		setIsEditPaneOpen(true);
	};

	return (
		<>
			<PlaysTable plays={plays} onEdit={handleEdit} />
			{isEditPaneOpen && <EditSidepane open={isEditPaneOpen} setOpen={setIsEditPaneOpen} play={editData} />}
		</>
	);
}

export default TableSidepaneWrap;
