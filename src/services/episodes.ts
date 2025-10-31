import axios from "axios";

export const episodesService = {
	async getEpisodes() {
		const response = await axios.get(
			`https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json`,
		);
		return response.data;
	},
};
