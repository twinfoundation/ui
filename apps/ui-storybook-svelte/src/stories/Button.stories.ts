// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/svelte";
import { fn } from "@storybook/test";
import { Button } from "@twin.org/ui-components-svelte";

const meta = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		color: {
			options: ["primary", "secondary", "plain", "error", "warning", "success"],
			control: { type: "inline-radio" }
		},
		size: {
			options: ["xs", "sm", "lg", "xl"],
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySm: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "primary"
	}
};

export const PrimaryXs: Story = {
	args: {
		children: "Button",
		size: "xs",
		color: "primary"
	}
};

export const PrimaryLg: Story = {
	args: {
		children: "Button",
		size: "lg",
		color: "primary"
	}
};

export const PrimaryXl: Story = {
	args: {
		children: "Button",
		size: "xl",
		color: "primary"
	}
};

export const Secondary: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "secondary"
	}
};

export const Plain: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "plain"
	}
};

export const Error: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "error"
	}
};

export const Warning: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "warning"
	}
};

export const Success: Story = {
	args: {
		children: "Button",
		size: "sm",
		color: "success"
	}
};
