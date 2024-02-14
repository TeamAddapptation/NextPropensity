import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function Play({ play }) {
	return (
		<>
			<div className='overflow-hidden bg-white shadow sm:rounded-lg'>
				<div className='flex px-4 py-6 sm:px-6 sm:items-center sm:justify-between'>
					<div className='flex flex-col'>
						<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{play.type}</p>
						<h3 className='text-base font-semibold leading-7 text-gray-900'>{play.name}</h3>
					</div>
					<div className='mt-3 flex sm:ml-4 sm:mt-0'>
						<button type='button' className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
							Share
						</button>
						<button type='button' className='ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Create
						</button>
					</div>
				</div>
				<div className='border-t border-gray-100'>
					<dl className='divide-y divide-gray-100'>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-900'>Start Date</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{play.planned_start ? play.planned_start : "-"}</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-900'>End Date</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{play.planned_end ? play.planned_end : "-"}</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-900'>Subject</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{play.subject ? play.subject : "-"}</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-900'>Body</dt>
							<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{play.body ? play.body : "-"}</dd>
						</div>
						<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium leading-6 text-gray-900'>Attachments</dt>
							<dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
								<ul role='list' className='divide-y divide-gray-100 rounded-md border border-gray-200'>
									<li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
										<div className='flex w-0 flex-1 items-center'>
											<PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
											<div className='ml-4 flex min-w-0 flex-1 gap-2'>
												<span className='truncate font-medium'>resume_back_end_developer.pdf</span>
												<span className='flex-shrink-0 text-gray-400'>2.4mb</span>
											</div>
										</div>
										<div className='ml-4 flex-shrink-0'>
											<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
												Download
											</a>
										</div>
									</li>
									<li className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'>
										<div className='flex w-0 flex-1 items-center'>
											<PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
											<div className='ml-4 flex min-w-0 flex-1 gap-2'>
												<span className='truncate font-medium'>coverletter_back_end_developer.pdf</span>
												<span className='flex-shrink-0 text-gray-400'>4.5mb</span>
											</div>
										</div>
										<div className='ml-4 flex-shrink-0'>
											<a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
												Download
											</a>
										</div>
									</li>
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</>
	);
}
