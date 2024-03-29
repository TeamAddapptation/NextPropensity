import { getCampaignData } from "./CampaignData";

async function playBuyingCircleHandler(buyingCircle, campaignId, playId) {
	try {
		const response = await fetch(`https://t-propensity-dashboard.addapptation.com/data_write?api_key=6d5b9cb6-d85e-43c8-a892-b9c18dd77bac&buying_circle_connect=true&connect=true`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ campaign_id: campaignId, play_id: playId, bc_id: buyingCircle.Id }),
		});

		if (!response.ok) {
			console.error(`Error: ${response.status} ${response.statusText}`);
			throw new Error(`Network response was not ok: ${response.status}`);
			return false;
		}

		const data = await response.json();
		const campaign = await getCampaignData();
		console.log("Form submitted successfully:", data);
		return true;
	} catch (error) {
		console.error("Error submitting form:", error);
		return false;
	}
}
async function disconnectBuyingCircleHandler(playBuyingCircleId) {
	try {
		const response = await fetch(`https://t-propensity-dashboard.addapptation.com/data_write?api_key=6d5b9cb6-d85e-43c8-a892-b9c18dd77bac&buying_circle_connect=true&disconnect=true`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ play_bc_id: playBuyingCircleId }),
		});

		if (!response.ok) {
			console.error(`Error: ${response.status} ${response.statusText}`);
			throw new Error(`Network response was not ok: ${response.status}`);
			return false;
		}

		const data = await response.json();
		const campaign = await getCampaignData();
		console.log("Form submitted successfully:", data);
		return true;
	} catch (error) {
		console.error("Error submitting form:", error);
		return false;
	}
}

export { playBuyingCircleHandler, disconnectBuyingCircleHandler };
