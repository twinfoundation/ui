// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert, AlertColors } from "@twin.org/ui-components-react";
import { HiInformationCircle, HiCheckCircle } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

const meta = {
	title: "Components/Alert",
	component: Alert,
	argTypes: {
		content: { control: { type: "text" } },
		color: {
			options: Object.values(AlertColors),
			control: { type: "inline-radio" }
		},
		borderAccent: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
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
		color: "success",
		content: "This is an success alert",
		icon: HiCheckCircle
	}
};

export const Warn: Story = {
	args: {
		children: "Alert",
		icon: HiInformationCircle,
		color: "warning",
		content: "This is an warn alert"
	}
};

export const Error: Story = {
	args: {
		children: "Alert",
		icon: IoIosCloseCircle,
		color: "error",
		content: "This is an error alert",
		action: "url.com"
	}
};

export const Gray: Story = {
	args: {
		children: "Alert",
		color: "gray",
		content: "This is a gray alert"
	}
};

export const GrayBordered: Story = {
	args: {
		children: "Alert",
		color: "gray",
		content: "This is a gray alert with border accent",
		borderAccent: true
	}
};

export const Action: Story = {
	args: {
		children: "Alert",
		icon: HiInformationCircle,
		color: "warning",
		content: "This is an alert with an action",
		action: "url.com"
	}
};
