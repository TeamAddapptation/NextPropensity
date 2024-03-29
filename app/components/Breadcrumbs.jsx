import { HomeIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Breadcrumbs({ pages }) {
	return (
		<nav className='flex' aria-label='Breadcrumb'>
			<ol role='list' className='flex items-center space-x-4'>
				<li>
					<div>
						<a href='#' className='text-gray-400 hover:text-gray-500'>
							<HomeIcon className='h-5 w-5 flex-shrink-0' aria-hidden='true' />
							<span className='sr-only'>Home</span>
						</a>
					</div>
				</li>
				{pages.map((page) => (
					<li key={page.name}>
						<div className='flex items-center'>
							<ChevronRightIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
							<a href={page.href} className={`ml-2 text-sm font-medium hover:text-gray-700 ${page.current ? "text-gray-400" : "text-gray-500"}`} aria-current={page.current ? "page" : undefined}>
								{page.name}
							</a>
						</div>
					</li>
				))}
			</ol>
		</nav>
	);
}
