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
				<Accordion.Panel className="surface-secondary-light" key={index}>
					<Accordion.Title className="text-primary">
						{panel.icon && <panel.icon className="mr-2 inline-block" />}
						{panel.title}
					</Accordion.Title>
					<Accordion.Content>
						<p className="text-tertiary">{panel.content}</p>
					</Accordion.Content>
				</Accordion.Panel>
			))}
		</Accordion>
	);
};
