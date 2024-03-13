"use client";

import { useState, useEffect } from "react";
import TextField from "@/app/components/form/TextField";
import SelectField from "@/app/components/form/SelectField";
import DateField from "@/app/components/form/DateField";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import TextAreaField from "@/app/components/form/TextAreaField";
import UrlField from "@/app/components/form/UrlField";
import { updatePlay } from "@/app/utilities/CampaignWriteData";

export default function FieldEdit({ play, fields, setEditMode, campaignId, handleChange }) {
	// const [formValues, setFormValues] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the form from submitting traditionally
		updatePlay(e.target, play.id);
		// Handle further logic as needed
	};

	// useEffect(() => {
	// 	const values = {
	// 		Name: play.name,
	// 		Type__c: play.type,
	// 		Subject__c: play.subject,
	// 		Click_URL__c: play.click_url,
	// 		Call_To_Action__c: play.call_to_action,
	// 		Planned_Start_Date__c: play.planned_start,
	// 		Planned_End_Date__c: play.planned_end,
	// 		Body_Text_Only__c: play.body,
	// 	};
	// 	setFormValues(values);
	// }, [play]);

	// function handleChange(e) {
	// 	setFormValues((prevState) => ({
	// 		...prevState,
	// 		[e.target.name]: e.target.value,
	// 	}));
	// }

	return (
		<>
			<div className='flex justify-between items-center px-4 py-5 sm:px-6'>
				<div>
					<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{play.type}</p>
					<h3 className='text-xl font-semibold leading-6 text-gray-900'>{play.name}</h3>
				</div>
				<div className='flex gap-2'>
					<button type='button' onClick={() => setEditMode(false)} className='text-sm font-semibold leading-6 text-indigo-400'>
						Cancel
					</button>
					<button
						type='submit'
						form='p__edit-play'
						className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
					>
						Save
					</button>
				</div>
			</div>
			<form id='p__edit-play' onSubmit={handleSubmit}>
				<div className='space-y-12 px-4 py-6'>
					<div className='border-b border-gray-900/10 pb-1'>
						<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<input type='hidden' name='submit_ad' value='update'></input>
							<input type='hidden' name='campaign_id' value={campaignId}></input>
							<input type='hidden' name='play_id' value={play.id}></input>
							{fields &&
								fields.map((formField, index) => {
									switch (formField.type) {
										case "date":
											return <DateField key={index} {...formField} play={play} onChange={handleChange} />;
										case "select":
											return <SelectField key={index} {...formField} play={play} onChange={handleChange} />;
										case "text":
											return <TextField key={index} {...formField} play={play} onChange={handleChange} />;
										case "textarea":
											return <TextAreaField key={index} {...formField} play={play} onChange={handleChange} />;
										case "url":
											return <UrlField key={index} {...formField} play={play} onChange={handleChange} />;
										default:
											return null;
									}
								})}
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
