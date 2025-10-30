import { Tabs } from "../ui/tabs";
import { Cast } from "./cast";
import { GeneralInformation } from "./general-information";

const tabs = [
	{ id: "general", label: "GENERAL", content: <GeneralInformation /> },
	{ id: "cast", label: "ELENCO", content: <Cast /> },
	{ id: "awards", label: "PRINCIPALES PREMIOS", content: <span></span> },
];

export const Footer = () => {
	return (
		<footer className="absolute bottom-0 left-0 right-0 z-10 py-6 px-10 bg-zinc-900">
			<div className="min-h-(--footer-height) h-full">
				<Tabs tabs={tabs} defaultTab="general" />
			</div>
		</footer>
	);
};
