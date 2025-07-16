// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown2 } from "../dropdown-2/dropdown-2";
import { CaretDown, DotsThreeVertical, X } from "../icons";

// Common dropdown items to reduce repetition
const standardItems = [
	{ label: "Dashboard" },
	{ label: "Settings" },
	{ label: "Earnings" },
	{ divider: true },
	{ label: "Sign out" }
];

const meta = {
	title: "Components/Dropdown2",
	component: Dropdown2,
	args: {
		items: standardItems
	}
} satisfies Meta<typeof Dropdown2>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Dropdown"
	}
};

export const WithIcon: Story = {
	args: {
		title: "Dropdown",
		icon: CaretDown
	}
};

export const OnlyWithDotsThreeVerticalIcon: Story = {
	args: {
		icon: DotsThreeVertical,
		iconOnly: true,
		title: "",
		color: "plain"
	}
};

// Layout variations
export const WithHeader: Story = {
	args: {
		icon: CaretDown,
		header: (
			<div>
				<span className="block text-sm font-medium text-gray-500">Account settings</span>
				<span className="block text-xs text-gray-400">Manage your account settings</span>
			</div>
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
		size: "sm"
	}
};

export const Large: Story = {
	args: {
		icon: CaretDown,
		size: "lg"
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
				checked: true
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
