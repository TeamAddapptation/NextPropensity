export const facebookSetup = [
	{ name: "Play Name", record: "name" },
	{ name: "Click URL", record: "click_url" },
	{ name: "Call to Action", record: "call_to_action" },
	{ name: "Primary Text", record: "subject" },
];
export const facebookAudience = {
	count: 100,
};

export const facebook = {
	adType: "facebook",
	setup: [
		{ name: "Play Name", record: "name" },
		{ name: "Click URL", record: "click_url" },
		{ name: "Call to Action", record: "call_to_action" },
		{ name: "Primary Text", record: "subject" },
	],
	audience: {
		greaterThan: 100,
	},
	Approvals: {
		enriched: true,
	},
};
