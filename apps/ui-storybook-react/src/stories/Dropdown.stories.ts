// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dropdown, DropdownPositions, DropdownSizes } from "@twin.org/ui-components-enterprise";
import { CaretDown, X } from "@twin.org/ui-components-enterprise/icons";
import { createElement } from "react";

// Common dropdown items to reduce repetition
const standardItems = [
	{ label: "Dashboard" },
	{ label: "Settings" },
	{ label: "Earnings" },
	{ divider: true },
	{ label: "Sign out" }
];

const meta = {
	title: "enterprise/Dropdown",
	component: Dropdown,
	argTypes: {
		placement: {
			options: Object.values(DropdownPositions),
			control: { type: "inline-radio" }
		},
		inline: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		size: {
			options: Object.values(DropdownSizes),
			control: { type: "inline-radio" }
		},
		disabled: {
			control: { type: "boolean" }
		}
	},
	args: {
		onClick: fn(),
		title: "Dropdown",
		items: standardItems
	}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {};

export const WithIcon: Story = {
	args: {
		icon: CaretDown
	}
};

export const OnlyWithDotsThreeVerticalIcon: Story = {
	args: {
		icon: CaretDown,
		iconOnly: true,
		title: "",
		color: "plain"
	}
};

// Layout variations
export const WithHeader: Story = {
	args: {
		icon: CaretDown,
		header: createElement(
			"div",
			null,
			createElement(
				"span",
				{ className: "block text-sm font-medium text-gray-500" },
				"Account settings"
			),
			createElement(
				"span",
				{ className: "block text-xs text-gray-400" },
				"Manage your account settings"
			)
		)
	}
};

export const Inline: Story = {
	args: {
		icon: CaretDown,
		inline: true
	}
};

// Size variations
export const Small: Story = {
	args: {
		icon: CaretDown,
		size: DropdownSizes.Small
	}
};

export const Large: Story = {
	args: {
		icon: CaretDown,
		size: DropdownSizes.Large
	}
};

// Item customization examples
export const WithItemIcon: Story = {
	args: {
		icon: CaretDown,
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: X }
		]
	}
};

export const WithInteractiveItems: Story = {
	args: {
		icon: CaretDown,
		items: [
			{
				label: "Dashboard",
				onClick: () => {
					// Handle Dashboard click action
				}
			},
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: X }
		]
	}
};

export const WithStyledItems: Story = {
	args: {
		icon: CaretDown,
		items: [
			{ label: "Dashboard", className: "text-red-500" },
			{ label: "Settings", className: "text-gray-800 bg-gray-100" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: X, className: "text-red-500" }
		]
	}
};

// Checkbox items
export const WithCheckboxItems: Story = {
	args: {
		title: "Options",
		items: [
			{
				label: "Unchecked and label",
				checkbox: true,
				checked: false
			},
			{
				label: "Checked and label",
				checkbox: true,
				checked: true,
				className: "text-primary"
			},
			{ divider: true },
			{
				label: "Default checkbox",
				checkbox: true,
				checked: false
			}
		]
	}
};
