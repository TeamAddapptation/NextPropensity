"use client";

import { CheckIcon, HandThumbUpIcon, UserIcon, ClockIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

const timeline = [
	{
		id: 1,
		content: "Cohort 5",
		target: "Edit",
		href: "#",
		start: "N/A",
		end: "N/A",
		audience: "Audience List",
		date: "Sep 20",
		datetime: "2020-09-20",
		icon: PencilSquareIcon,
		iconBackground: "bg-gray-400",
	},
	{
		id: 2,
		content: "Cohort 4",
		target: "In Progress",
		start: "Feb 9, 2024",
		end: "Feb 20, 2024",
		href: "#",
		audience: "Audience List",
		date: "Sep 22",
		datetime: "2020-09-22",
		icon: ClockIcon,
		iconBackground: "bg-yellow-500",
	},
	{
		id: 3,
		content: "Cohort 3",
		target: "Complete",
		start: "Dec 30, 2023",
		end: "Jan 20, 2024",
		href: "#",
		audience: "Audience List",
		datetime: "2020-10-04",
		icon: CheckIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 4,
		content: "Cohort 2",
		target: "Completed",
		start: "Nov 28, 2023",
		end: "Dec 20, 2023",
		href: "#",
		audience: "Audience List",
		datetime: "2020-10-04",
		icon: CheckIcon,
		iconBackground: "bg-green-500",
	},
	{
		id: 5,
		content: "Cohort 1",
		target: "Completed",
		start: "Nov 6, 2023",
		end: "Nov 19, 2023",
		href: "#",
		audience: "Audience List",
		datetime: "2020-10-04",
		icon: CheckIcon,
		iconBackground: "bg-green-500",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function CohortHistory({ campaign }) {
	console.log("Campaign: ", campaign);
	return (
		<div className='overflow-hidden bg-white sm:rounded-lg sm:shadow'>
			<div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
				<h3 className='text-xl font-semibold leading-6 text-gray-900'>Cohort History</h3>
			</div>
			<div className='flow-root'>
				<ul role='list' className='-mb-8 px-4 py-4'>
					{timeline.map((cohort, eventIdx) => (
						<li key={cohort.id}>
							<div className='relative pb-8'>
								{eventIdx !== timeline.length - 1 ? <span className='absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true' /> : null}
								<div className='relative flex space-x-3'>
									<div>
										<span className={classNames(cohort.iconBackground, "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white")}>
											<cohort.icon className='h-5 w-5 text-white' aria-hidden='true' />
										</span>
									</div>
									<div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
										<div>
											<p className='text-sm text-gray-500'>
												<a href={cohort.href} className='font-medium text-gray-900'>
													{cohort.target}
												</a>{" "}
												{cohort.content}
											</p>
											<p className='text-xs text-gray-400'>{cohort.audience}</p>
										</div>
										<div className='whitespace-nowrap text-right text-sm text-gray-500'>
											<time dateTime={cohort.start}>
												{cohort.start} - {cohort.end}
											</time>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
