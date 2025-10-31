import { Dot, Frown, Plus, Share } from "lucide-react";

const itemList = [
	{ id: 1, icon: Plus, label: "Mi Lista" },
	{ id: 2, icon: Frown, label: "Evaluar" },
	{ id: 3, icon: Dot, label: "Grabar" },
	{ id: 4, icon: Share, label: "Compartir" },
];

export const GeneralInformation = ({ synopsis }: { synopsis: string }) => {
	return (
		<div className="w-full flex flex-col md:flex-row md:items-start gap-4 md:gap-6 pt-4 md:pt-6 pb-2">
			<div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-0 md:justify-between w-full md:max-w-[350px] shrink-0">
				{itemList.map(({ id, icon: Icon, label }) => (
					<button
						key={id}
						type="button"
						aria-label={label}
						className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer min-w-[60px] sm:min-w-[70px] md:w-[80px]"
					>
						<span className="border border-white/60 rounded-full p-1.5 sm:p-2 hover:bg-white/10 transition-colors">
							<Icon className="w-4 h-4 sm:w-5 sm:h-5" />
						</span>
						<span className="text-[10px] sm:text-xs mt-1.5 sm:mt-2 text-center leading-tight">
							{label}
						</span>
					</button>
				))}
			</div>

			<div className="flex flex-col items-start flex-1 text-left text-gray-200 min-w-0">
				<h4 className="text-sm uppercase font-semibold tracking-wide mb-2 shrink-0">
					Sinopse
				</h4>
				<div className="text-sm leading-relaxed max-w-3xl w-full max-h-[120px] overflow-y-auto scrollbar-thin pr-2">
					{synopsis}
				</div>
			</div>
		</div>
	);
};
