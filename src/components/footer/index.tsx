import type { CastMember } from "../../types";
import { Tabs } from "../ui/tabs";
import { Cast } from "./cast";
import { GeneralInformation } from "./general-information";

interface FooterProps {
	synopsis: string;
	cast: CastMember[];
}

export const Footer = ({ synopsis, cast }: FooterProps) => {
	const tabs = [
		{
			id: "general",
			label: "GENERAL",
			content: <GeneralInformation synopsis={synopsis} />,
		},
		{ id: "cast", label: "ELENCO", content: <Cast cast={cast} /> },
		{ id: "awards", label: "PRINCIPALES PREMIOS", content: <span></span> },
	];

	return (
		<footer className="z-10 py-4 sm:py-6 px-4 sm:px-6 md:px-10 bg-zinc-900 shrink-0 overflow-x-hidden">
			<div className="h-full flex flex-col min-h-[270px] md:min-h-[150px] max-w-full">
				<Tabs tabs={tabs} defaultTab="general" />
			</div>
		</footer>
	);
};
