"use client";
import { useEffect, useState } from "react";

import Checklist from "./components/Checklist";
import { facebook } from "./playData/checklistData";
import { adFields } from "./playData/playFields";
import FieldView from "./components/FieldView";
import FieldEdit from "./components/FieldEdit";
import FacebookAd from "./components/FacebookAd";
import BuyingCircles from "./components/BuyingCircles";

export default function Play({ play, selectPlay, campaignId }) {
	const [playFields, setPlayFields] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [formValues, setFormValues] = useState({});

	console.log("Play: ", play);

	useEffect(() => {
		// Handle setting play fields based on play type
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

		// Handle setting form values
		const values = {
			Name: play.name,
			Type__c: play.type,
			Subject__c: play.subject,
			Click_URL__c: play.click_url,
			Call_To_Action__c: play.call_to_action,
			Planned_Start_Date__c: play.planned_start,
			Planned_End_Date__c: play.planned_end,
			Body_Text_Only__c: play.body,
		};
		setFormValues(values);
	}, [play]);

	function handleChange(e) {
		setFormValues((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
		console.log(formValues);
	}

	return (
		<>
			<div className='flex mb-4 gap-10'>
				<div className='w-3/5 flex flex-col gap-5'>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						{editMode ? (
							<>
								{playFields && playFields.editFields ? (
									<FieldEdit setEditMode={setEditMode} handleChange={handleChange} fields={playFields.editFields} play={play} campaignId={campaignId} />
								) : (
									"Loading..."
								)}
							</>
						) : (
							<>{playFields && playFields.fields ? <FieldView setEditMode={setEditMode} fields={playFields.fields} play={play} /> : "Loading..."}</>
						)}
					</div>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<BuyingCircles buyingCircles={play.buying_circles} connected={play.play_buying_circles} playId={play.id} campaignId={campaignId} />
					</div>
				</div>
				<div className='w-2/5 flex flex-col gap-5'>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<div className='flex-col px-4 py-5 sm:px-6'>
							<div>
								<h3 className='text-xl font-semibold leading-6 text-gray-900'>Ad Preview</h3>
							</div>
						</div>
						<div className='border-t border-gray-100 px-4 py-5 sm:px-6 '>
							<div>
								<FacebookAd adValues={formValues} />
							</div>
						</div>
					</div>

					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<div className='flex-col px-4 py-5 sm:px-6'>
							<span className='inline-flex items-center gap-x-1.5 rounded-md bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 mb-2'>
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
