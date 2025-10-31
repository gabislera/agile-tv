import { Loader2 } from "lucide-react";

export const Loader = () => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="flex flex-col items-center gap-4">
				<Loader2 className="w-12 h-12 text-white animate-spin" />
				<p className="text-white text-lg">Carregando...</p>
			</div>
		</div>
	);
};
