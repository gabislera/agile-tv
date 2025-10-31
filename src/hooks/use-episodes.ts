import { useQuery } from "@tanstack/react-query";
import { episodesService } from "../services/episodes";
import type { Episode } from "../types";

export const useEpisodes = () => {
	const { data, isLoading, error } = useQuery<Episode[]>({
		queryKey: ["episodes"],
		queryFn: () => episodesService.getEpisodes(),
	});

	return {
		episodes: data,
		isEpisodesLoading: isLoading,
		episodesError: error,
	};
};
