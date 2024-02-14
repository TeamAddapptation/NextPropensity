"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const statuses = {
	true: "text-green-700 bg-green-50 ring-green-600/20",
	false: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};
const projects = [
	{
		id: 1,
		name: "GraphQL API",
		href: "#",
		status: "Complete",
		createdBy: "Leslie Alexander",
		dueDate: "March 17, 2023",
		dueDateTime: "2023-03-17T00:00Z",
	},
	{
		id: 2,
		name: "New benefits plan",
		href: "#",
		status: "In progress",
		createdBy: "Leslie Alexander",
		dueDate: "May 5, 2023",
		dueDateTime: "2023-05-05T00:00Z",
	},
	{
		id: 3,
		name: "Onboarding emails",
		href: "#",
		status: "In progress",
		createdBy: "Courtney Henry",
		dueDate: "May 25, 2023",
		dueDateTime: "2023-05-25T00:00Z",
	},
	{
		id: 4,
		name: "iOS app",
		href: "#",
		status: "In progress",
		createdBy: "Leonard Krasner",
		dueDate: "June 7, 2023",
		dueDateTime: "2023-06-07T00:00Z",
	},
	{
		id: 5,
		name: "Marketing site redesign",
		href: "#",
		status: "Archived",
		createdBy: "Courtney Henry",
		dueDate: "June 10, 2023",
		dueDateTime: "2023-06-10T00:00Z",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ConnectedBuyingCircles({ buyingCircles }) {
	return (
		<div>
			<div className='relative'>
				<div className='absolute inset-0 flex items-center' aria-hidden='true'>
					<div className='w-full border-t border-gray-300' />
				</div>
				<div className='relative flex justify-start'>
					<span className='bg-white pr-3 text-base font-semibold leading-6 text-gray-900'>Buying Circles</span>
				</div>
			</div>
			<ul role='list' className='divide-y divide-gray-100 px-4 py-2'>
				{buyingCircles.map((buyingCircle, index) => (
					<li key={index} className='flex items-center justify-between gap-x-6 py-2'>
						<div className='min-w-0'>
							<div className='flex items-start gap-x-3'>
								<p className='text-sm leading-6 text-gray-900'>{buyingCircle.Name}</p>
								<p className={classNames(statuses[buyingCircle.Enriched__c], "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset")}>{buyingCircle.Enriched__c ? "Enriched" : "Not Enriched"}</p>
							</div>
							<div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
								<p className='whitespace-nowrap'>Total Contacts {buyingCircle.Total__c.toLocaleString()}</p>
							</div>
						</div>
						<div className='flex flex-none items-center gap-x-4'>
							<Menu as='div' className='relative flex-none'>
								<Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
									<span className='sr-only'>Open options</span>
									<EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
								</Menu.Button>
								<Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
									<Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
										<Menu.Item>
											{({ active }) => (
												<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
													Edit<span className='sr-only'>, {buyingCircle.Name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
													Move<span className='sr-only'>, {buyingCircle.Name}</span>
												</a>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
													Delete<span className='sr-only'>, {buyingCircle.Name}</span>
												</a>
											)}
										</Menu.Item>
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
