import CampaignsTable from "./CampaignsTable";

async function getCampaigns() {
	const res = await fetch("https://t-propensity-dashboard.addapptation.com/account_lists_data?api_key=6d5b9cb6-d85e-43c8-a892-b9c18dd77bac&campaigns=true");
	const data = await res.json();
	return data;
}

export default async function Audiuences() {
	const campaigns = await getCampaigns();
	return (
		<div>
			<h1>Audiences</h1>
			<CampaignsTable campaignData={campaigns} />
		</div>
	);
}