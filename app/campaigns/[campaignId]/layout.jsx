import React from "react";
import CampaignHeader from "../components/CampaignHeader";
import { getCampaignData } from "@/app/utilities/CampaignData";

// async function getCampaign(id) {
// 	const res = await fetch(`https://t-propensity-dashboard.addapptation.com/account_lists_data?api_key=6d5b9cb6-d85e-43c8-a892-b9c18dd77bac&campaign=true&campaign_id=${id}`);
// 	const data = await res.json();
// 	return data;
// }

async function campaignLayout({ children, params }) {
	const campaignObj = await getCampaignData(params.campaignId);
	return (
		<>
			<CampaignHeader campaignId={params.campaignId} campaignData={campaignObj.campaign[0]} />
			<div>{children}</div>
		</>
	);
}

export default campaignLayout;
