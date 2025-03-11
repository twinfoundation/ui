// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Alert, AlertColors } from "@twin.org/ui-components-react";
import {
	CheckCircle,
	InfoCircle,
	CloseCircle,
	ExclamationCircle,
	Eye
} from "@twin.org/ui-components-react/icons/solid";
import { type ReactNode, createElement } from "react";

const meta = {
	title: "Components/Alert",
	component: Alert,
	argTypes: {
		content: { control: { type: "text" } },
		color: {
			options: Object.values(AlertColors),
			control: { type: "inline-radio" }
		},
		withBorderAccent: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		additionalContent: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		icon: {
			options: [CheckCircle, InfoCircle, CloseCircle, ExclamationCircle],
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
		color: "info"
	}
};

export const Success: Story = {
	args: {
		children: "Alert",
		color: "success",
		icon: CheckCircle
	}
};

export const Warn: Story = {
	args: {
		children: "Alert",
		icon: InfoCircle,
		color: "warning"
	}
};

export const Error: Story = {
	args: {
		children: "Alert",
		icon: CloseCircle,
		color: "error"
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
		withBorderAccent: true
	}
};

export const AdditionalContent: Story = {
	args: {
		children: "Alert",
		icon: ExclamationCircle,
		color: "info",
		additionalContent: additionalContent()
	}
};

export const WithDismissable: Story = {
	args: {
		children: "Alert",
		icon: ExclamationCircle,
		color: "gray",
		onDismiss: handleDismiss
	}
};

/**
 * Render additional content for the alert.
 * @returns The additional content to render.
 */
function additionalContent(): ReactNode {
	return [
		createElement(
			"div",
			{ className: "mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800" },
			"More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
		),
		createElement(
			"div",
			{ className: "flex" },
			createElement(
				"button",
				{
					type: "button",
					className:
						"mr-2 inline-flex items-center rounded-lg bg-cyan-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-800 dark:hover:bg-cyan-900"
				},
				createElement(Eye, { className: "-ml-0.5 mr-2 h-4 w-4" }),
				"View more"
			),
			createElement(
				"button",
				{
					type: "button",
					className:
						"rounded-lg border border-cyan-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-cyan-700 hover:bg-cyan-800 hover:text-white focus:ring-4 focus:ring-cyan-300 dark:border-cyan-800 dark:text-cyan-800 dark:hover:text-white"
				},
				"Dismiss"
			)
		)
	];
}

/**
 * Handle the dismiss action.
 */
function handleDismiss(): void {
	// Custom dismiss logic here

	// eslint-disable-next-line no-console
	console.log("Dismissed");
}
