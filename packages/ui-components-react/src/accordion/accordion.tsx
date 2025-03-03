// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Accordion as FlowbiteAccordion } from "flowbite-react";
import { memo, useMemo, type JSX } from "react";
import type { AccordionProps } from "./accordionProps";

export const Accordion = memo(({ items, ...rest }: AccordionProps): JSX.Element => {
	const accordionPanels = useMemo(() => {
		if (!items?.length) {
			return null;
		}

		return items.map((item, index) => (
			<FlowbiteAccordion.Panel key={`accordion-panel-${index}`}>
				<FlowbiteAccordion.Title>
					<div className="flex items-center">
						{item?.icon && (
							<span className="mr-2 inline-flex items-center">
								<item.icon className="h-5 w-5" />
							</span>
						)}
						{item?.title}
					</div>
				</FlowbiteAccordion.Title>
				<FlowbiteAccordion.Content>{item?.content}</FlowbiteAccordion.Content>
			</FlowbiteAccordion.Panel>
		));
	}, [items]);

	return <FlowbiteAccordion {...rest}>{accordionPanels ?? <></>}</FlowbiteAccordion>;
});

Accordion.displayName = "Accordion";
