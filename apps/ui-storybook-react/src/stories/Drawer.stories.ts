// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Drawer, DrawerPositions, ButtonColors } from "@twin.org/ui-components-react";
import { MessageCaption, Brain } from "@twin.org/ui-components-react/icons/solid";
import { createElement } from "react";

const meta = {
	title: "Components/Drawer",
	component: Drawer,
	argTypes: {
		position: {
			options: Object.values(DrawerPositions),
			control: { type: "inline-radio" }
		},
		bodyScrolling: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		backdrop: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		edge: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		buttonColor: {
			options: Object.values(ButtonColors),
			control: { type: "select" }
		},
		showButton: {
			options: Object.values([true, false]),
			control: { type: "boolean" }
		},
		defaultOpen: {
			options: Object.values([true, false]),
			control: { type: "boolean" }
		}
	},
	args: {
		onClick: fn(),
		onClose: fn(),
		onOpenChange: fn(),
		items: [
			createElement(
				"p",
				{ className: "mb-6 text-sm text-gray-500 dark:text-gray-400" },
				"Supercharge your hiring by taking advantage of our ",
				createElement(
					"a",
					{ href: "#", className: "text-cyan-600 underline hover:no-underline dark:text-cyan-500" },
					"limited-time sale"
				),
				" for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board."
			),
			createElement(
				"div",
				{ className: "grid grid-cols-1 gap-4 md:grid-cols-2" },
				createElement(
					"a",
					{
						href: "#",
						className:
							"rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
					},
					"Learn more"
				),
				createElement(
					"a",
					{
						href: "#",
						className:
							"inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
					},
					"Get access",
					createElement(
						"svg",
						{
							className: "ms-2 h-3.5 w-3.5 rtl:rotate-180",
							"aria-hidden": true,
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 14 10"
						},
						createElement("path", {
							stroke: "currentColor",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "2",
							d: "M1 5h12m0 0L9 1m4 4L9 9"
						})
					)
				)
			)
		]
	}
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Drawer"
	}
};

export const PositionRight: Story = {
	args: {
		title: "Drawer",
		position: DrawerPositions.Right
	}
};

export const PositionTop: Story = {
	args: {
		title: "Drawer",
		position: DrawerPositions.Top
	}
};

export const PositionBottom: Story = {
	args: {
		title: "Drawer",
		position: DrawerPositions.Bottom
	}
};

export const BodyScrolling: Story = {
	args: {
		title: "Drawer",
		items: [
			"The body is scrollable when the drawer is open.",
			createElement(
				"p",
				{ className: "mb-6 text-sm text-gray-500 dark:text-gray-400" },
				"Supercharge your hiring by taking advantage of our ",
				createElement(
					"a",
					{ href: "#", className: "text-cyan-600 underline hover:no-underline dark:text-cyan-500" },
					"limited-time sale"
				),
				" for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board."
			),
			createElement(
				"div",
				{ className: "grid grid-cols-1 gap-4 md:grid-cols-2" },
				createElement(
					"a",
					{
						href: "#",
						className:
							"rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
					},
					"Learn more"
				),
				createElement(
					"a",
					{
						href: "#",
						className:
							"inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
					},
					"Get access",
					createElement(
						"svg",
						{
							className: "ms-2 h-3.5 w-3.5 rtl:rotate-180",
							"aria-hidden": true,
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 14 10"
						},
						createElement("path", {
							stroke: "currentColor",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: "2",
							d: "M1 5h12m0 0L9 1m4 4L9 9"
						})
					)
				)
			)
		],
		bodyScrolling: true
	}
};

export const WithoutBackdrop: Story = {
	args: {
		title: "Drawer",
		backdrop: false
	}
};

export const Edge: Story = {
	args: {
		title: "Drawer",
		position: DrawerPositions.Bottom,
		edge: true
	}
};

export const CustomButtonText: Story = {
	args: {
		title: "Custom Button Text Drawer",
		buttonText: "Open Menu"
	}
};

export const CustomButtonColor: Story = {
	args: {
		title: "Custom Button Color Drawer",
		buttonText: "Open Drawer",
		buttonColor: "secondary"
	}
};

export const WithButtonIcon: Story = {
	args: {
		title: "Drawer with Icon Button",
		buttonText: "Menu",
		buttonIcon: MessageCaption
	}
};

export const InitiallyOpen: Story = {
	args: {
		title: "Initially Open Drawer",
		defaultOpen: true
	}
};

export const CustomButtonProps: Story = {
	args: {
		title: "Custom Button Props Drawer",
		buttonText: "Settings",
		buttonProps: {
			size: "lg",
			outline: true
		}
	}
};

export const IconOnlyButton: Story = {
	args: {
		title: "Icon Only Button Drawer",
		buttonProps: {
			iconOnly: true,
			icon: Brain,
			size: "lg"
		}
	}
};

export const ProgrammaticControl: Story = {
	args: {
		title: "Programmatically Controlled Drawer",
		showButton: false,
		defaultOpen: true
	}
};
