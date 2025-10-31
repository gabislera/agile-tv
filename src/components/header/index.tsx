import { X } from "lucide-react";
import type { Genre } from "../../types";

interface HeaderProps {
	title: string;
	year: number;
	genres: Genre[];
}

export const Header = ({ title, year, genres }: HeaderProps) => {
	const genresText = genres.map((item) => item.Title).join(" / ");

	return (
		<header className="flex justify-between items-center">
			<div className="flex flex-col items-start">
				<h1 className="text-5xl md:text-6xl font-bold mb-2">{title}</h1>
				<p className="text-gray-300 text-sm tracking-wide">
					{genresText} / {year}
				</p>
			</div>
			<button
				type="button"
				className="text-white text-4xl cursor-pointer hover:text-gray-400 transition-colors"
			>
				<X className="w-8 h-8" />
			</button>
		</header>
	);
};
