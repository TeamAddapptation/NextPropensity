import React from "react";
import { getCampaignData } from "@/app/utilities/CampaignData";
import PlaysLayout from "./PlaysLayout";

async function page({ params }) {
	const campaignObj = await getCampaignData(params.campaignId);
	return (
		<div>
			<PlaysLayout plays={campaignObj.plays} campaignId={params.campaignId} />
		</div>
	);
}

export default page;
