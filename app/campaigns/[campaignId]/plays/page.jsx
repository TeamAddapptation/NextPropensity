import React from "react";
import { getCampaignData } from "@/app/utilities/CampaignData";
import PlaysTable from "./playsTable";

async function page({ params }) {
	const campaignObj = await getCampaignData(params.campaignId);
	return (
		<div>
			<PlaysTable plays={campaignObj.plays} />
		</div>
	);
}

export default page;
