import axios from "axios";

export const showDetailsService = {
	async getShowDetails() {
		const response = await axios.get(
			`https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json`,
		);
		return response.data;
	},
};
