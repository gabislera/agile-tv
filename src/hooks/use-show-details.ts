import { useQuery } from "@tanstack/react-query";
import { showDetailsService } from "../services/show-details";

export const useShowDetails = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["details"],
		queryFn: () => showDetailsService.getShowDetails(),
	});

	return {
		showDetails: data,
		isShowDetailsLoading: isLoading,
	};
};
