"use client";
import { useState } from "react";
import PlaysTable from "./PlaysTable";
import Play from "./Play";

export default function PlaysLayout({ plays }) {
	const [selectedPlay, setSelectedPlay] = useState(null);
	const [edit, setEdit] = useState(false);

	function selectPlay(play, isEditMode) {
		setSelectedPlay(play);
		setEdit(isEditMode);
	}

	return <div>{edit ? <Play play={selectedPlay} selectPlay={selectPlay} /> : <PlaysTable selectPlay={selectPlay} plays={plays} />}</div>;
}
