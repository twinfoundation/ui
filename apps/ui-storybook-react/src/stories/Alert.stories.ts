// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert, AlertColors, AlertIcons } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Alert",
	component: Alert,
	argTypes: {
		title: { control: { type: "text" } },
		color: {
			options: Object.values(AlertColors),
			control: { type: "inline-radio" }
		},
		icon: { 
			options: Object.values(AlertIcons)
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Alert",
		color: "primary"
	}
};

export const Success: Story = {
	args: {
		children: "Alert",
		icon: AlertIcons.Check,
		color: "success",
		content: "This is an success alert"
	}
};

export const Warn: Story = {
	args: {
		children: "Alert",
		icon: AlertIcons.Information,
		color: "warning",
		content: "This is an warn alert"
	}
};

export const Error: Story = {
	args: {
		children: "Alert",
		icon: AlertIcons.Error,
		color: "error",
		content: "This is an error alert"
	}
};

export const Action: Story = {
	args: {
		children: "Alert",
		icon: AlertIcons.Information,
		color: "warning",
		content: "This is an alert with an action",
		action: "url.com"
	}
};


