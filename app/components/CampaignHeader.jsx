"use client";
import Link from "next/link";

function CampaignHeader({ campaign }) {
	console.log("Campaign: ", campaign);
	return (
		<div className='card mb-5 mb-xl-10'>
			<div className='card-body pt-9 pb-0'>
				<Link href='/campaigns/campaignList'>Campaigns</Link>
				<h6 className='text-black-50 mb-0'>{campaign.Status__c}</h6>
				<h3 className='text-gray-900 text-hover-primary fs-2 fw-bold me-1'>{campaign.Name}</h3>
			</div>
		</div>
	);
}

export default CampaignHeader;
