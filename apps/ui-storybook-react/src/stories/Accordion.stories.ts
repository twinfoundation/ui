// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Accordion } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		alwaysOpen: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		flush: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		collapseAll: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		onClick: fn(),
		items: [
			{
				title: "Accordion 1",
				content: createElement(
					"div",
					null,
					createElement(
						"p",
						{ className: "mb-2 text-gray-500 dark:text-gray-400" },
						"Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more."
					),
					createElement(
						"p",
						{ className: "text-gray-500 dark:text-gray-400" },
						"Check out this guide to learn how to",
						createElement(
							"a",
							{
								href: "https://flowbite.com/docs/getting-started/introduction/",
								className: "text-cyan-600 hover:underline dark:text-cyan-500"
							},
							" get started"
						),
						" and start developing websites even faster with components on top of Tailwind CSS."
					)
				)
			},
			{
				title: "Is there a Figma file available?",
				content: createElement(
					"div",
					null,
					createElement(
						"p",
						{ className: "mb-2 text-gray-500 dark:text-gray-400" },
						"Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
					),
					createElement(
						"p",
						{ className: "text-gray-500 dark:text-gray-400" },
						"Check out the ",
						createElement(
							"a",
							{
								href: "https://flowbite.com/figma/",
								className: "text-cyan-600 hover:underline dark:text-cyan-500"
							},
							" Figma design system "
						),
						" based on the utility classes from Tailwind CSS and components from Flowbite."
					)
				)
			},
			{
				title: "What are the differences between Flowbite and Tailwind UI?",
				content: createElement(
					"div",
					null,
					createElement(
						"p",
						{ className: "mb-2 text-gray-500 dark:text-gray-400" },
						"The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages."
					),
					createElement(
						"p",
						{ className: "mb-2 text-gray-500 dark:text-gray-400" },
						"However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds."
					),
					createElement(
						"p",
						{ className: "mb-2 text-gray-500 dark:text-gray-400" },
						"Learn more about these technologies:"
					),
					createElement(
						"ul",
						{ className: "list-disc pl-5 text-gray-500 dark:text-gray-400" },
						createElement(
							"li",
							null,
							createElement(
								"a",
								{
									href: "https://flowbite.com/pro/",
									className: "text-cyan-600 hover:underline dark:text-cyan-500"
								},
								"Flowbite Pro"
							)
						),
						createElement(
							"li",
							null,
							createElement(
								"a",
								{
									href: "https://tailwindui.com/",
									rel: "nofollow",
									className: "text-cyan-600 hover:underline dark:text-cyan-500"
								},
								"Tailwind UI"
							)
						)
					)
				)
			}
		]
	}
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: []
	}
};

export const AlwaysOpen: Story = {
	args: {
		children: [],
		alwaysOpen: true
	}
};

export const CollapseAll: Story = {
	args: {
		collapseAll: true,
		children: []
	}
};

export const Flush: Story = {
	args: {
		flush: true,
		children: []
	}
};
