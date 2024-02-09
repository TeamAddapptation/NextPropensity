import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const statuses = {
	active: "text-green-700 bg-green-50 ring-green-600/20",
	inactive: "text-gray-600 bg-gray-50 ring-gray-500/10",
	paused: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
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

export default function PlaysList({ plays, onEdit }) {
	return (
		<>
			<div className='border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between'>
				<h2 className='text-base font-semibold leading-6 text-gray-900'>Campaign Plays</h2>
				<div className='mt-3 sm:ml-4 sm:mt-0'>
					<button type='button' className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						New Play
					</button>
				</div>
			</div>
			<div class='flex'>
				<div class='w-3/5'>
					<ul role='list' className='divide-y divide-gray-100'>
						{plays.map((play, index) => (
							<li key={index} className='flex items-center justify-between gap-x-6 py-5'>
								<div className='min-w-0'>
									<div className='flex items-start gap-x-3'>
										<p className='text-sm font-semibold leading-6 text-gray-900'>{play.name}</p>
										<p className={classNames(statuses[play.status], "rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset")}>{play.status}</p>
									</div>
									<div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
										<p className='truncate'>{play.type}</p>

										<svg viewBox='0 0 2 2' className='h-0.5 w-0.5 fill-current'>
											<circle cx={1} cy={1} r={1} />
										</svg>
										<p className='whitespace-nowrap'>
											<time dateTime={play.planned_start}>{play.planned_start}</time> - <time dateTime={play.planned_end}>{play.planned_end}</time>
										</p>
									</div>
								</div>
								<div className='flex flex-none items-center gap-x-4'>
									<button type='button' onClick={() => onEdit(play)} className='hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block'>
										View<span className='sr-only'>, {play.name}</span>
									</button>
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
															Duplicate<span className='sr-only'>, {play.name}</span>
														</a>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<a href='#' className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
															Delete<span className='sr-only'>, {play.name}</span>
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
				<div class='w-2/5'>w-2/5</div>
			</div>
		</>
	);
}
