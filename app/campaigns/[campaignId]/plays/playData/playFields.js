export const adFields = {
	facebook: {
		type: "Facebook Ad",
		play_name: "name",
		fields: [
			{ label: "Start Date", value: "planned_start", type: "date" },
			{ label: "End Date", value: "planned_end", type: "date" },
			{ label: "Primary Text", value: "subject" },
			{ label: "Headline", value: "body", type: "html" },
			{ label: "Click URL", value: "click_url" },
			{ label: "Call to Action", value: "call_to_action" },
		],
		editFields: [
			{ label: "Start Date", name: "Planned_Start_Date__c", type: "date" },
			{ label: "End Date", name: "Planned_End_Date__c", type: "date" },
			{ label: "Primary Text", name: "Subject__c", type: "text" },
			{ label: "Headline", name: "Body_Text_Only__c", type: "textarea" },
			{ label: "Click URL", name: "Click_URL__c", type: "url" },
			{ label: "Call to Action", name: "Call_To_Action__c", type: "select" },
		],
	},
	linkedin: {
		type: "LinkedIn Ad",
		play_name: "name",
		fields: [
			{ label: "Start Date", value: "planned_start" },
			{ label: "End Date", value: "planned_end" },
			{ label: "Headline", value: "body" },
			{ label: "Introductory Text", value: "subject" },
			{ label: "Click URL", value: "click_url" },
			{ label: "Call to Action", value: "call_to_action" },
		],
	},
};
