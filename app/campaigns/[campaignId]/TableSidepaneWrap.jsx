"use client";
import { useState } from "react";
import EditSidepane from "./EditSidepane";
import PlaysTable from "./PlaysTable";
import PlaysList from "./PlaysList";
import Play from "./Play";

function TableSidepaneWrap({ plays }) {
	const [isEditPaneOpen, setIsEditPaneOpen] = useState(false);
	const [isPlayView, setPlayView] = useState(false);
	const [playData, setPlayData] = useState(null);

	const handleEdit = (play) => {
		setPlayData(play);
		setPlayView(true);
	};

	return (
		<>
			{isPlayView ? <Play play={playData} /> : <PlaysList plays={plays} onEdit={handleEdit} />}

			{/* {isEditPaneOpen && <EditSidepane open={isEditPaneOpen} setOpen={setIsEditPaneOpen} play={editData} />} */}
		</>
	);
}

export default TableSidepaneWrap;
