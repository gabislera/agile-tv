export interface Genre {
	ID: string;
	Title: string;
}

export interface CastMember {
	ID: string;
	Name: string;
}

export interface ShowDetails {
	ID: number;
	Title: string;
	Year: number;
	Synopsis: string;
	Genres: Genre[];
	Cast: CastMember[];
	Images: {
		Background: string;
	};
}

export interface Episode {
	Duration: number;
	EpisodeNumber: number;
	ID: string;
	Image: string;
	SeasonNumber: number;
	Synopsis: string;
	Title: string;
}
