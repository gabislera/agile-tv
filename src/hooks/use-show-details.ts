import { useQuery } from "@tanstack/react-query";
import { showDetailsService } from "../services/show-details";
import type { ShowDetails } from "../types";

export const useShowDetails = () => {
	const { data, isLoading, error } = useQuery<ShowDetails>({
		queryKey: ["details"],
		queryFn: () => showDetailsService.getShowDetails(),
	});

	return {
		showDetails: data,
		isShowDetailsLoading: isLoading,
		showDetailsError: error,
	};
};
