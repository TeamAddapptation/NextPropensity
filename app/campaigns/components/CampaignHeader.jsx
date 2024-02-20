"use client";

import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import CampaignTabs from "./CampaignTabs";
import { usePathname } from "next/navigation";

const path = [
	{ name: "Campaigns", href: "#", current: false },
	{ name: "Plays", href: "#", current: true },
];

export default function CampaignHeader({ campaignData, campaignId }) {
	const urlPath = usePathname();

	return (
		<div className='lg:flex lg:justify-between border-b mb-5 pb-5  px-5 py-5'>
			<div className='min-w-0 flex-1'>
				<Breadcrumbs pages={path} />
				<h2 className='mt-2 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>{campaignData.Name}</h2>
				<div className='mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6'>
					<div className='mt-2 flex items-center text-sm text-gray-500 gap-1'>
						<h5 className='text-sm font-semibold leading-6 text-gray-900'>Playbook</h5>
						{campaignData.Playbook__r.Name}
					</div>
					<div className='mt-2 flex items-center text-sm text-gray-500 gap-1'>
						<h5 className='text-sm font-semibold leading-6 text-gray-900'>Audience</h5>
						{campaignData.Audience__r.Assessment_Name__c}
					</div>
					<div className='mt-2 flex items-center text-sm text-gray-500 gap-1'>
						<h5 className='text-sm font-semibold leading-6 text-gray-900'>Cohort</h5>
						{campaignData.Cohort_Number__c} / 4
					</div>
				</div>
			</div>
			<div className='mt-5 flex flex-col justify-between items-end lg:ml-4 lg:mt-0'>
				<div className='flex'>
					<span className='hidden sm:block'>
						<button type='button' className='inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
							Edit
						</button>
					</span>

					<span className='ml-3 hidden sm:block'>
						<button type='button' className='inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
							Delete
						</button>
					</span>
				</div>
				<CampaignTabs campaignId={campaignId} />
			</div>
		</div>
	);
}
