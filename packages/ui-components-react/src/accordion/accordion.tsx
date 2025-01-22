// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Accordion as FlowbiteAccordion } from "flowbite-react";
import React, { type ReactNode } from "react";
import { AccordionPropTypes, type AccordionProps } from "./accordionProps";

/**
 * Accordion component.
 */
export class Accordion extends React.Component<AccordionProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = AccordionPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: AccordionProps;

	/**
	 * Create a new instance of Accordion.
	 * @param props The props of the component.
	 */
	constructor(props: AccordionProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { items, ...rest } = this._props;

		return (
			<FlowbiteAccordion {...rest}>
				{items && items?.length > 0 ? (
					items.map((item, index) => (
						<FlowbiteAccordion.Panel key={index}>
							<FlowbiteAccordion.Title>{item?.title}</FlowbiteAccordion.Title>
							<FlowbiteAccordion.Content>{item?.content}</FlowbiteAccordion.Content>
						</FlowbiteAccordion.Panel>
					))
				) : (
					<></>
				)}
			</FlowbiteAccordion>
		);
	}
}
