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
		const { children, ...rest } = this._props;

		return (
			<FlowbiteAccordion {...rest}>
				<FlowbiteAccordion.Panel key="1">
					<FlowbiteAccordion.Title>{children}</FlowbiteAccordion.Title>
					<FlowbiteAccordion.Content>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							Flowbite is an open-source library of interactive components built on top of Tailwind
							CSS including buttons, dropdowns, modals, navbar, and more.
						</p>
						<p className="text-gray-500 dark:text-gray-400">
							Check out this guide to learn how to&nbsp;
							<a
								href="https://flowbite.com/docs/getting-started/introduction/"
								className="text-cyan-600 hover:underline dark:text-cyan-500"
							>
								get started&nbsp;
							</a>
							and start developing websites even faster with components on top of Tailwind CSS.
						</p>
					</FlowbiteAccordion.Content>
				</FlowbiteAccordion.Panel>
				<FlowbiteAccordion.Panel>
					<FlowbiteAccordion.Title>Is there a Figma file available?</FlowbiteAccordion.Title>
					<FlowbiteAccordion.Content>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							Flowbite is first conceptualized and designed using the Figma software so everything
							you see in the library has a design equivalent in our Figma file.
						</p>
						<p className="text-gray-500 dark:text-gray-400">
							Check out the
							<a
								href="https://flowbite.com/figma/"
								className="text-cyan-600 hover:underline dark:text-cyan-500"
							>
								Figma design system
							</a>
							based on the utility classes from Tailwind CSS and components from Flowbite.
						</p>
					</FlowbiteAccordion.Content>
				</FlowbiteAccordion.Panel>
				<FlowbiteAccordion.Panel>
					<FlowbiteAccordion.Title>
						What are the differences between Flowbite and Tailwind UI?
					</FlowbiteAccordion.Title>
					<FlowbiteAccordion.Content>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							The main difference is that the core components from Flowbite are open source under
							the MIT license, whereas Tailwind UI is a paid product. Another difference is that
							Flowbite relies on smaller and standalone components, whereas Tailwind UI offers
							sections of pages.
						</p>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI
							as there is no technical reason stopping you from using the best of two worlds.
						</p>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							Learn more about these technologies:
						</p>
						<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
							<li>
								<a
									href="https://flowbite.com/pro/"
									className="text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Flowbite Pro
								</a>
							</li>
							<li>
								<a
									href="https://tailwindui.com/"
									rel="nofollow"
									className="text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Tailwind UI
								</a>
							</li>
						</ul>
					</FlowbiteAccordion.Content>
				</FlowbiteAccordion.Panel>
			</FlowbiteAccordion>
		);
	}
}
