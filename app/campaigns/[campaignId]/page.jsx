import { getCampaignData } from "@/app/utilities/CampaignData";
import CohortHistory from "../components/CohortHistory";
import ConnectedAudience from "../components/ConnnectedAudience";
import ConnectedBuyingCircles from "../components/ConnectedBuyingCircles";
import Loading from "@/app/loading";

export default async function Campaign({ params }) {
	const campaignObj = await getCampaignData(params.campaignId);

	if (campaignObj && campaignObj.length == 0) return <Loading />;
	return (
		<div>
			<div className='flex mb-4 gap-5'>
				<div className='w-3/5 flex flex-col gap-5'></div>
				<div className='w-2/5 flex flex-col gap-5'>
					<div className='divide-y divide-gray-200 rounded-lg bg-white shadow'>
						<div className='px-4 py-5 sm:px-6'>
							<h3 className='text-xl font-semibold leading-6 text-gray-900'>Audience</h3>
						</div>
						<div className='px-4 py-5 sm:p-6'>
							<ConnectedAudience campaign={campaignObj.campaign[0]} />
							<ConnectedBuyingCircles buyingCircles={campaignObj.buying_circles} />
						</div>
					</div>
					<CohortHistory campaign={campaignObj} />
				</div>
			</div>
		</div>
	);
}
