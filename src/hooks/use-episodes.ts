import { useQuery } from "@tanstack/react-query";
import { episodesService } from "../services/episodes";

export const useEpisodes = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["episodes"],
		queryFn: () => episodesService.getEpisodes(),
	});

	return { episodes: data, isEpisodesLoading: isLoading };
};
