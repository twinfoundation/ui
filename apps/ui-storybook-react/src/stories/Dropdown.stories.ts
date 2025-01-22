// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
	Dropdown,
	DropdownPositions,
	DropdownSizes,
	IconsSolid
} from "@twin.org/ui-components-react";
import { createElement } from "react";

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
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
		]
	}
};

export const OnClick: Story = {
	args: {
		title: "Dropdown",
		items: [
			{
				label: "Dashboard",
				onClick: () => {
					// eslint-disable-next-line no-console
					console.log("Dashboard clicked");
				}
			},
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
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
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
		]
	}
};

export const RightPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
		],
		placement: DropdownPositions.Right
	}
};

export const LeftPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
		],
		placement: DropdownPositions.Left
	}
};

export const TopPlacement: Story = {
	args: {
		title: "Dropdown",
		items: [
			{ label: "Dashboard" },
			{ label: "Settings" },
			{ label: "Earnings" },
			{ divider: true },
			{ label: "Sign out", icon: IconsSolid.CloseCircle }
		],
		placement: DropdownPositions.Top
	}
};
