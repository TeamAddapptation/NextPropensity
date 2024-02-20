"use client";
import { useEffect, useState } from "react";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import Checklist from "./components/Checklist";
import { facebook } from "./playData/checklistData";
import { adFields } from "./playData/playFields";
import FieldView from "./components/FieldView";
import FieldEdit from "./components/FieldEdit";

export default function Play({ play, selectPlay }) {
	const [playFields, setPlayFields] = useState(null);
	const [editMode, setEditMode] = useState(false);
	useEffect(() => {
		switch (play.type) {
			case "Facebook Ad":
				setPlayFields(adFields.facebook);
				break;
			case "LinkedIn Ad":
				setPlayFields(adFields.linkedin);
				break;
			case "Marketing Email":
				setPlayFields(adFields.marketingEmail);
				break;
			default:
				setPlayFields(null);
		}
	}, [play, playFields]);

	console.log(playFields);

	return (
		<>
			<div className='flex mb-4 gap-5'>
				<div className='w-2/5 flex flex-col gap-5'>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<div className='flex justify-between items-center px-4 py-5 sm:px-6'>
							<div>
								<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{play.type}</p>
								<h3 className='text-xl font-semibold leading-6 text-gray-900'>{play.name}</h3>
							</div>
							<button
								type='button'
								onClick={() => setEditMode(true)}
								className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
							>
								Edit
							</button>
						</div>
						{editMode ? (
							playFields && playFields.editFields ? (
								<FieldEdit fields={playFields.editFields} play={play} />
							) : (
								"Loading..."
							)
						) : playFields && playFields.fields ? (
							<FieldView fields={playFields.fields} play={play} />
						) : (
							"Loading..."
						)}
					</div>
				</div>
				<div className='w-2/5 flex flex-col gap-5'></div>
				<div className='w-1/5 flex flex-col gap-5'>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<div className='flex-col px-4 py-5 sm:px-6'>
							<span className='inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 mb-1'>
								<svg className='h-1.5 w-1.5 fill-red-500' viewBox='0 0 6 6' aria-hidden='true'>
									<circle cx={3} cy={3} r={3} />
								</svg>
								Missing Assests
							</span>
							<div>
								<h3 className='text-xl font-semibold leading-6 text-gray-900'>Pre-Launch Checklist</h3>
							</div>
						</div>
						<div className='border-t border-gray-100 px-4 py-5 sm:px-6'>
							<div>
								<div className='flex-col pb-5'>
									<h3 className='text-m font-semibold leading-6 text-gray-900'>Setup</h3>
								</div>
								<Checklist play={play} adChecks={facebook} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
