// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Accordion as FlowbiteAccordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { memo, useMemo, type JSX } from "react";
import type { AccordionProps } from "./accordionProps";

export const Accordion = memo(({ items, ...rest }: AccordionProps): JSX.Element => {
	const accordionPanels = useMemo(() => {
		if (!items?.length) {
			return null;
		}

		return items.map((item, index) => (
			<AccordionPanel key={`accordion-panel-${index}`}>
				<AccordionTitle>
					<div className="flex items-center">
						{item?.icon && (
							<span className="mr-2 inline-flex items-center">
								<item.icon className="h-5 w-5" />
							</span>
						)}
						{item?.title}
					</div>
				</AccordionTitle>
				<AccordionContent>{item?.content}</AccordionContent>
			</AccordionPanel>
		));
	}, [items]);

	return <FlowbiteAccordion {...rest}>{accordionPanels ?? <></>}</FlowbiteAccordion>;
});

Accordion.displayName = "Accordion";
