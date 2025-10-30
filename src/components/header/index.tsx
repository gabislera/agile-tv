import { X } from "lucide-react";

export const Header = () => {
	return (
		<header className="flex justify-between items-center">
			<div className="flex flex-col items-start">
				<h1 className="text-5xl md:text-6xl font-bold mb-2">Penny Dreadful</h1>
				<p className="text-gray-300 text-sm tracking-wide">
					80% INDICADO / CIÊNCIA FICÇÃO / 2015 / EUA / 14
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
