// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, Icons } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/Toast",
	component: Toast,
	argTypes: {},
	args: {
		className: "max-w-lg"
	}
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: createElement(
			"div",
			{ className: "flex items-center max-w-sm" },
			createElement(
				"div",
				{
					className:
						"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200"
				},
				createElement(Icons.Fire, { className: "h-5 w-5" })
			),
			createElement("div", { className: "ml-3 text-sm font-normal" }, "Set yourself free."),
			createElement(
				"a",
				{
					className:
						"text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300",
					href: "#"
				},
				"Turn new navigation off"
			)
		)
	}
};

export const CustomStyle: Story = {
	args: {
		className: "max-w-xl bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",
		children: createElement(
			"div",
			{ className: "flex items-center max-w-sm" },
			createElement(
				"div",
				{
					className:
						"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200"
				},
				createElement(Icons.Fire, { className: "h-5 w-5" })
			),
			createElement("div", { className: "ml-3 text-sm font-normal" }, "Set yourself free."),
			createElement(
				"a",
				{
					className:
						"text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300",
					href: "#"
				},
				"Turn new navigation off"
			)
		)
	}
};
