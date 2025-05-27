// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Badge, BadgeColors, BadgeSizes } from "@twin.org/ui-components-react";
import { ShoppingCart, Eye } from "@twin.org/ui-components-react/icons";

const meta = {
	title: "Components/Badge",
	component: Badge,
	argTypes: {
		color: {
			options: Object.values(BadgeColors),
			control: { type: "inline-radio" }
		},
		size: {
			options: Object.values(BadgeSizes),
			control: { type: "inline-radio" }
		},
		dismiss: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		onlyIcon: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		children: "Badge",
		color: "info"
	}
};

export const InfoSm: Story = {
	args: {
		children: "Badge",
		size: "sm",
		color: "info"
	}
};

export const InfoXs: Story = {
	args: {
		children: "Badge",
		size: "xs",
		color: "info"
	}
};

export const Dismissable: Story = {
	args: {
		children: "Badge",
		dismiss: true
	}
};

export const WithIcon: Story = {
	args: {
		children: "Badge",
		icon: Eye
	}
};

export const OnlyIcon: Story = {
	args: {
		children: "Badge",
		icon: ShoppingCart,
		onlyIcon: true
	}
};

export const Gray: Story = {
	args: {
		children: "Badge",
		color: "gray",
		dismiss: true
	}
};

export const Failure: Story = {
	args: {
		children: "Badge",
		color: "failure"
	}
};

export const Warning: Story = {
	args: {
		children: "Badge",
		color: "warning"
	}
};

export const Success: Story = {
	args: {
		children: "Badge",
		color: "success"
	}
};
