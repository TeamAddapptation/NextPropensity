import { formatDate } from "@/app/utilities/helpers";

export default function FieldView({ play, fields }) {
	console.log("play", play);
	return (
		<div className='border-t border-gray-100'>
			<dl className='divide-y divide-gray-100'>
				{fields &&
					fields.map((field, index) => {
						return (
							<div key={index} className='px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6'>
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
											<div dangerouslySetInnerHTML={{ __html: play[field.value] }} />
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
	);
}
