// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Breadcrumb, IconsSolid } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
	argTypes: {
		className: {
			control: { type: "text" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Breadcrumb",
		items: [
			{ label: "Home", href: "/", icon: IconsSolid.Home },
			{ label: "Library", href: "/library" },
			{ label: "Data", href: "/library/data" }
		]
	}
};

export const CustomClass: Story = {
	args: {
		children: "Breadcrumb",
		className: "bg-gray-50 py-2 px-2 dark:bg-gray-800",
		items: [
			{ label: "Home", href: "/", icon: IconsSolid.Home },
			{ label: "Library", href: "/library" },
			{ label: "Data", href: "/library/data" }
		]
	}
};
