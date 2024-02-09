"use client";

import { Fragment } from "react";
import { BriefcaseIcon, HomeIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, CurrencyDollarIcon, LinkIcon, MapPinIcon, PencilIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

const path = [
	{ name: "Campaigns", href: "#", current: false },
	{ name: "Plays", href: "#", current: true },
];

export default function CampaignHeader({ campaignData }) {
	return (
		<div className='lg:flex lg:items-center lg:justify-between mb-5 border-b pb-5'>
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
						{campaignData.Cohort_Number__c}
					</div>
				</div>
			</div>
			<div className='mt-5 flex lg:ml-4 lg:mt-0'>
				<span className='hidden sm:block'>
					<button type='button' className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
						<PencilIcon className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
						Edit
					</button>
				</span>

				<span className='ml-3 hidden sm:block'>
					<button type='button' className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
						<LinkIcon className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
						Delete
					</button>
				</span>
			</div>
		</div>
	);
}
