import React from "react";
import { Accordion } from "flowbite-react";
import { IconType } from "react-icons";

interface AccordionPanel {
	title: string;
	content: string;
	icon?: IconType;
}

interface AccordionComponentProps {
	panels: AccordionPanel[];
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({ panels }) => {
	return (
		<Accordion>
			{panels.map((panel, index) => (
				<Accordion.Panel key={index}>
					<Accordion.Title>
						{panel.icon && <panel.icon className="mr-2 inline-block" />}
						{panel.title}
					</Accordion.Title>
					<Accordion.Content>
						<p className="text-gray-500 dark:text-gray-400">{panel.content}</p>
					</Accordion.Content>
					<hr className="my-2 border-gray-200 dark:border-gray-700" />
				</Accordion.Panel>
			))}
		</Accordion>
	);
};
