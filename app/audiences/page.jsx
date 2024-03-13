async function getAudiences() {
	const res = await fetch("https://t-propensity-dashboard.addapptation.com/account_lists_data?api_key=6d5b9cb6-d85e-43c8-a892-b9c18dd77bac&all_lists=true");
	const data = await res.json();
	return data;
}

export default async function Audiuences() {
	const audiences = await getAudiences();
	return (
		<div>
			<h1>Audiences</h1>
			{audiences?.map((audience) => {
				return <p key={audience.id}>{audience.name}</p>;
			})}
		</div>
	);
}
