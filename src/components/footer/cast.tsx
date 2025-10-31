import type { CastMember } from "../../types";

interface CastProps {
	cast: CastMember[];
}

export const Cast = ({ cast }: CastProps) => {
	return (
		<div className="flex items-center gap-2 pt-8">
			{cast.map((member) => (
				<div
					key={member.ID}
					className="flex items-center justify-center gap-2 min-w-[150px] h-[70px] bg-zinc-800 px-4"
				>
					<span>{member.Name}</span>
				</div>
			))}
		</div>
	);
};
