import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Accordion } from "./components/ui/accordion";
import { Loader } from "./components/ui/loader";
import { Tabs } from "./components/ui/tabs";
import { useEpisodes } from "./hooks/use-episodes";
import { useShowDetails } from "./hooks/use-show-details";
import type { Episode } from "./types";

export const App = () => {
	const { showDetails, isShowDetailsLoading, showDetailsError } =
		useShowDetails();
	const { episodes, isEpisodesLoading, episodesError } = useEpisodes();

	if (isShowDetailsLoading || isEpisodesLoading) {
		return <Loader />;
	}

	if (showDetailsError || episodesError) {
		console.error("Erro ao carregar dados:", showDetailsError || episodesError);
		alert("Erro ao carregar os dados. Tente novamente.");
		return null;
	}

	if (!showDetails || !episodes) {
		return <Loader />;
	}

	const validEpisodes = episodes.filter(
		(episode: Episode) => !!episode && episode.SeasonNumber != null,
	);

	const episodesBySeason = validEpisodes.reduce(
		(acc: Record<number, Episode[]>, episode: Episode) => {
			const season = episode.SeasonNumber;

			if (!acc[season]) {
				acc[season] = [];
			}

			acc[season].push(episode);

			return acc;
		},
		{},
	);

	const seasonNumbers = Object.keys(episodesBySeason)
		.map(Number)
		.sort((a, b) => a - b);

	return (
		<div className="min-h-screen flex flex-col">
			<div className="relative z-10 flex flex-col flex-1 overflow-hidden px-10 pt-6">
				<div
					className="absolute inset-0 -z-10 bg-cover bg-center"
					style={{ backgroundImage: `url(${showDetails.Images.Background})` }}
				/>
				<div className="absolute inset-0 -z-10 bg-gradient-left" />
				<div className="absolute inset-0 -z-10 bg-gradient-bottom mb-20" />

				<Header
					title={showDetails.Title}
					year={showDetails.Year}
					genres={showDetails.Genres}
				/>

				<section className="ml-auto w-[300px] overflow-y-auto max-h-[calc(100vh-var(--footer-height))] scrollbar-thin">
					<Tabs
						tabs={seasonNumbers.map((seasonNumber) => ({
							id: `season-${seasonNumber}`,
							label: `T ${seasonNumber}`,
							content: (
								<div className="space-y-2">
									{episodesBySeason[seasonNumber].map((episode: Episode) => (
										<Accordion
											key={episode.ID}
											title={`${episode.EpisodeNumber}. ${episode.Title}`}
											name={`season-${seasonNumber}-episodes`}
										>
											<div className="pr-10 space-y-2">
												{episode.Image && (
													<img
														src={episode.Image}
														alt={episode.Title}
														className="w-full mt-2 rounded"
													/>
												)}
												<p className="text-gray-300 text-xs tracking-wide">
													{episode.Synopsis || "Sem sinopse disponível"}
												</p>
											</div>
										</Accordion>
									))}
								</div>
							),
						}))}
					/>
				</section>
			</div>

			<Footer synopsis={showDetails.Synopsis} cast={showDetails.Cast} />
		</div>
	);
};
