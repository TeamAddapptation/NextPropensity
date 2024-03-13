"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { formatDate } from "@/app/utilities/helpers";

const statuses = {
	Complete: "text-green-700 bg-green-50 ring-green-600/20",
	"In progress": "text-gray-600 bg-gray-50 ring-gray-500/10",
	Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const salesPlays = ["Call", "LinkedIn Connection", "LinkedIn Message", "Sales Email"];
const marketingPlays = ["Facebook Ad", "LinkedIn Ad", "Marketing Email", "Programmatic Display Ad"];
export default function PlaysPreview({ campaign }) {
	console.log(campaign.Propensity_ABM_Campaign_Plays__r);
	return (
		// campaign.Propensity_ABM_Campaign_Plays__r
		<div>
			<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
				<div className='flex justify-between items-center px-4 py-5 sm:px-6'>
					<h3 className='text-xl font-semibold leading-6 text-gray-900 m-0'>Plays</h3>
					<div className='flex gap-1'>
						<div>
							<select
								id='location'
								name='location'
								className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
								defaultValue='Canada'
							>
								<option>All</option>
								<option>Marketing</option>
								<option>Sales</option>
							</select>
						</div>
						<div>
							<select
								id='location'
								name='location'
								className='block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
								defaultValue='Canada'
							>
								<option>Facebook Ad</option>
								<option>LinkedIn Ad</option>
								<option>Marketing Email</option>
								<option>Programmatic Display Ad</option>
							</select>
						</div>
					</div>
				</div>
				<div className='px-4 py-5 sm:p-6'>
					{marketingPlays.map((type) => {
						return (
							<div key={type} className='mt-4'>
								<div className='relative'>
									<div className='absolute inset-0 flex items-center' aria-hidden='true'>
										<div className='w-full border-t border-gray-300' />
									</div>
									<div className='relative flex justify-start'>
										<span className='bg-white pr-3 text-base font-semibold leading-6 text-gray-900'>{type}</span>
									</div>
								</div>
								<div>
									<ul role='list' className='divide-y divide-gray-100'>
										{campaign.Propensity_ABM_Campaign_Plays__r.map((play, index) => {
											return play.Type__c == type ? (
												<li key={index} className='flex items-center justify-between gap-x-6 py-2'>
													<div className='min-w-0'>
														<div className='flex items-start gap-x-3'>
															<p className='text-sm font-regular leading-6 text-gray-900'>{play.Name}</p>
															{/* <p className='rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'>{play.Status__c}</p> */}
														</div>
														<div className='flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
															<p className='whitespace-nowrap'>
																{play.Planned_Start_Date__c ? formatDate(play.Planned_Start_Date__c) : "N/A"} - {play.Planned_End_Date__c ? formatDate(play.Planned_End_Date__c) : "N/A"}
															</p>
														</div>
													</div>
													<div className='flex flex-none items-center gap-x-4'>
														<Menu as='div' className='relative flex-none'>
															<Menu.Button className='-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900'>
																<span className='sr-only'>Open options</span>
																<EllipsisVerticalIcon className='h-5 w-5' aria-hidden='true' />
															</Menu.Button>
															<Transition
																as={Fragment}
																enter='transition ease-out duration-100'
																enterFrom='transform opacity-0 scale-95'
																enterTo='transform opacity-100 scale-100'
																leave='transition ease-in duration-75'
																leaveFrom='transform opacity-100 scale-100'
																leaveTo='transform opacity-0 scale-95'
															>
																<Menu.Items className='absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
																	<Menu.Item>
																		{({ active }) => (
																			<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																				Edit<span className='sr-only'>, {play.Id}</span>
																			</a>
																		)}
																	</Menu.Item>
																	<Menu.Item>
																		{({ active }) => (
																			<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																				Move<span className='sr-only'>, {play.Id}</span>
																			</a>
																		)}
																	</Menu.Item>
																	<Menu.Item>
																		{({ active }) => (
																			<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
																				Delete<span className='sr-only'>, {play.Id}</span>
																			</a>
																		)}
																	</Menu.Item>
																</Menu.Items>
															</Transition>
														</Menu>
													</div>
												</li>
											) : (
												""
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
