// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Dropdown, DropdownPositions, DropdownSizes, Icons } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Dropdown",
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
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ label: "Sign out" }
		]
	}
};

export const WithDivider: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out" }
		]
	}
};

export const WithHeader: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out" }
		],
		header:
			"<span class='block text-sm'>Bonnie Green</span><span class='block truncate text-sm font-medium'>bonnie@flowbite.com</span>"
	}
};

export const Inline: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out" }
		],
		inline: true
	}
};

export const Small: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out" }
		],
		size: DropdownSizes.Small
	}
};

export const Large: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out" }
		],
		size: DropdownSizes.Large
	}
};

export const WithIcon: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		]
	}
};

export const OnClick: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard", onClick: () => alert("Dashboard clicked") },
			{ label: "Settings", onClick: () => alert("Settings clicked") },
			{ label: "Earnings", onClick: () => alert("Earnings clicked") },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		]
	}
};

export const CustomItem: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard", className: "text-red-500" },
			{ label: "Settings", className: "text-gray-800 bg-gray-100" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		]
	}
};

export const RightPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard", onClick: () => alert("Dashboard clicked") },
			{ label: "Settings", onClick: () => alert("Settings clicked") },
			{ label: "Earnings", onClick: () => alert("Earnings clicked") },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		],
		placement: DropdownPositions.Right
	}
};

export const LeftPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard", onClick: () => alert("Dashboard clicked") },
			{ label: "Settings", onClick: () => alert("Settings clicked") },
			{ label: "Earnings", onClick: () => alert("Earnings clicked") },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		],
		placement: DropdownPositions.Left
	}
};

export const TopPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard", onClick: () => alert("Dashboard clicked") },
			{ label: "Settings", onClick: () => alert("Settings clicked") },
			{ label: "Earnings", onClick: () => alert("Earnings clicked") },
			{ divider: true },
			{ label: "Sign out", icon: Icons.CloseCircle }
		],
		placement: DropdownPositions.Top
	}
};
