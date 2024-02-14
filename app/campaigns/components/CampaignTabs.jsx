"use client";

import { useState } from "react";

import Link from "next/link";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function CampaignTabs({ campaignId }) {
	const [currentTab, setCurrentTab] = useState("Details");

	const tabs = [
		{ name: "Details", href: `/campaigns/${campaignId}`, current: currentTab === "Details" },
		{ name: "Plays", href: `/campaigns/${campaignId}/plays`, current: currentTab === "Plays" },
		{ name: "Analytics", href: `/campaigns/${campaignId}/analytics`, current: currentTab === "Analytics" },
	];

	const handleTabClick = (tabName) => {
		setCurrentTab(tabName);
		console.log("Tab: ", currentTab);
	};

	return (
		<div>
			<div className='sm:hidden'>
				<label htmlFor='tabs' className='sr-only'>
					Select a tab
				</label>
				<select id='tabs' name='tabs' className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500' value={currentTab} onChange={(e) => handleTabClick(e.target.value)}>
					{tabs.map((tab) => (
						<option key={tab.name} value={tab.name}>
							{tab.name}
						</option>
					))}
				</select>
			</div>
			<div className='hidden sm:block'>
				<nav className='flex space-x-4' aria-label='Tabs'>
					{tabs.map((tab) => (
						<Link key={tab.name} href={tab.href} className={classNames(tab.current ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:text-gray-700", "rounded-md px-3 py-2 text-sm font-medium")} aria-current={tab.current ? "page" : undefined} onClick={() => handleTabClick(tab.name)}>
							{tab.name}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
