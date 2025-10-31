import { type ReactNode, useState } from "react";

interface Tab {
	id: string;
	label: string;
	content: ReactNode;
}

interface TabsProps {
	tabs: Tab[];
	defaultTab?: string;
}

export const Tabs = ({ tabs, defaultTab }: TabsProps) => {
	const [active, setActive] = useState(defaultTab || tabs[0].id);

	return (
		<div className="w-full h-full flex flex-col">
			<div
				role="tablist"
				aria-label="Tabs"
				className="flex gap-6 border-b border-white/20 shrink-0"
			>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						id={`tab-${tab.id}`}
						role="tab"
						aria-selected={active === tab.id}
						type="button"
						onClick={() => setActive(tab.id)}
						className={
							active === tab.id
								? "font-bold border-b-2 border-green-700 py-2"
								: "text-gray-400 hover:text-white cursor-pointer py-2"
						}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="flex-1 overflow-y-auto relative">
				<div className="grid">
					{tabs.map((tab) => (
						<div
							key={tab.id}
							id={`panel-${tab.id}`}
							role="tabpanel"
							aria-hidden={active !== tab.id}
							className="[grid-area:1/1]"
							style={{
								visibility: active === tab.id ? "visible" : "hidden",
							}}
						>
							{tab.content}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
