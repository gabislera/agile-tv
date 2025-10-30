import { tvInfo } from "../../constants";

export const Cast = () => {
	return (
		<div className="flex items-center gap-2 pt-8">
			{tvInfo.Cast.map((cast) => (
				<div
					key={cast.ID}
					className="flex items-center justify-center gap-2 min-w-[150px] h-[70px] bg-zinc-800 px-4"
				>
					<span>{cast.Name}</span>
				</div>
			))}
		</div>
	);
};
