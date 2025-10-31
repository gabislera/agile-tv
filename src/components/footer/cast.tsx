import type { CastMember } from "../../types";

interface CastProps {
	cast: CastMember[];
}

export const Cast = ({ cast }: CastProps) => {
	return (
		<div className="w-full overflow-x-auto scrollbar-thin pt-4 md:pt-6 pb-2">
			<div className="flex items-center gap-2">
				{cast.map((member) => (
					<div
						key={member.ID}
						className="flex items-center justify-center gap-2 min-w-[120px] sm:min-w-[150px] h-[60px] sm:h-[70px] bg-zinc-800 px-3 sm:px-4 text-sm sm:text-base shrink-0"
					>
						<span className="truncate">{member.Name}</span>
					</div>
				))}
			</div>
		</div>
	);
};
