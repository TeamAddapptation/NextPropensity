import TextField from "@/app/components/form/TextField";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function FieldEdit({ play, fields }) {
	return (
		<form>
			<div className='space-y-12 px-4 py-6'>
				<div className='border-b border-gray-900/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-900'>Profile</h2>
					<p className='mt-1 text-sm leading-6 text-gray-600'>This information will be displayed publicly so be careful what you share.</p>

					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						{fields &&
							fields.map((formField, index) => {
								return <TextField key={index} />;
							})}
					</div>
				</div>
			</div>

			<div className='mt-6 flex items-center justify-end gap-x-6'>
				<button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
					Cancel
				</button>
				<button
					type='submit'
					className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
				>
					Save
				</button>
			</div>
		</form>
	);
}
