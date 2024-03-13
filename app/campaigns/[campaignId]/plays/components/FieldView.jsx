import { formatDate } from "@/app/utilities/helpers";

export default function FieldView({ play, fields, setEditMode }) {
	return (
		<>
			<div className='flex justify-between items-center px-4 py-5 sm:px-6'>
				<div>
					<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{play.type}</p>
					<h3 className='text-xl font-semibold leading-6 text-gray-900'>{play.name}</h3>
				</div>
				<button
					type='button'
					onClick={() => setEditMode(true)}
					className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
				>
					Edit
				</button>
			</div>
			<div className='border-t border-gray-100'>
				<dl className='divide-y divide-gray-100'>
					{fields &&
						fields.map((field, index) => {
							return (
								<div key={index} className='px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-1 sm:px-6'>
									<dt className='text-sm font-medium text-gray-900'>{field.label}</dt>
									<dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
										{field.type === "date" ? (
											play[field.value] ? (
												formatDate(play[field.value])
											) : (
												"-"
											)
										) : field.type === "html" ? (
											play[field.value] ? (
												<div className='whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: play[field.value] }} />
											) : (
												"-"
											)
										) : play[field.value] ? (
											play[field.value]
										) : (
											"-"
										)}
									</dd>
								</div>
							);
						})}
				</dl>
			</div>
		</>
	);
}
