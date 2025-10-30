import { Play } from "lucide-react";

interface AccordionProps {
	children: React.ReactNode;
	title: string;
	open?: boolean;
	name?: string;
}

export const Accordion = ({
	children,
	title,
	open = false,
	name,
}: AccordionProps) => {
	return (
		<div className="border-b border-white/20 py-2">
			<details
				className="group peer cursor-pointer select-none marker:content-['']"
				name={name}
			>
				<summary className="flex items-center justify-between ">
					<span>{title}</span>
					<span className="border border-white/60 rounded-full p-2 hover:bg-white/10 transition-colors">
						<Play className="w-4 h-4" />
					</span>
				</summary>
			</details>
			<div
				className={`grid transition-all duration-300 ${
					open
						? "grid-rows-[1fr] peer-open:grid-rows-[0fr]"
						: "grid-rows-[0fr] peer-open:grid-rows-[1fr]"
				}`}
			>
				<div className="overflow-hidden">{children}</div>
			</div>
		</div>
	);
};
