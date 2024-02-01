import axios from "axios";

export default async function handler(req, res) {
	try {
		const response = await axios.get("https://t-propensity-dashboard.addapptation.com/account_lists_data", {
			params: {
				api_key: "6d5b9cb6-d85e-43c8-a892-b9c18dd77bac",
				campaign: true,
				campaign_id: "a2KJw000001mfujMAA",
			},
		});
		res.status(200).json(response.data);
		console.log(response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(error.response?.status || 500).json({ message: "Error fetching data" });
	}
}
