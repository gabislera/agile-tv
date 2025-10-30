import { Dot, Frown, Plus, Share } from "lucide-react";

const itemList = [
	{ id: 1, icon: Plus, label: "Mi Lista" },
	{ id: 2, icon: Frown, label: "Evaluar" },
	{ id: 3, icon: Dot, label: "Grabar" },
	{ id: 4, icon: Share, label: "Compartir" },
];

export const GeneralInformation = () => {
	return (
		<div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 pt-8">
			<div className="flex items-center justify-start gap-8 w-full md:max-w-[400px]">
				{itemList.map(({ id, icon: Icon, label }) => (
					<button
						key={id}
						type="button"
						className="flex flex-col items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer w-[80px]"
					>
						<span className="border border-white/60 rounded-full p-2 hover:bg-white/10 transition-colors">
							<Icon className="w-5 h-5" />
						</span>
						<span className="text-xs mt-2 text-center leading-tight">
							{label}
						</span>
					</button>
				))}
			</div>

			<div className="flex flex-col items-start flex-1 text-left text-gray-200">
				<h4 className="text-sm uppercase font-semibold tracking-wide mb-2">
					Sinopse
				</h4>
				<p className="text-sm leading-relaxed max-w-3xl">
					Durante uma missão a Marte da nave tripulada Ares III, uma forte
					tormenta se desata, e o astronauta Mark Watney é dado como morto por
					seus companheiros. No entanto, ele sobrevive, mas está sozinho e com
					poucos recursos...
				</p>
			</div>
		</div>
	);
};
