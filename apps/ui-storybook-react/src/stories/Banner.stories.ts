// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Banner } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/Banner",
	component: Banner,
	argTypes: {
		content: { control: { type: "text" } },
		bottom: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		onClick: fn()
	}
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: createElement(
			"div",
			{ className: "flex items-center w-auto m-auto" },
			createElement(
				"p",
				{ className: "text-sm font-normal text-gray-500 dark:text-gray-400" },
				"New brand identity has been launched for the ",
				createElement(
					"a",
					{
						href: "https://flowbite.com",
						className:
							"font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
					},
					"brand"
				),
				"."
			)
		)
	}
};

export const Bottom: Story = {
	args: {
		children: createElement(
			"div",
			{ className: "flex items-center w-auto m-auto" },
			createElement(
				"p",
				{ className: "text-sm font-normal text-gray-500 dark:text-gray-400" },
				"New brand identity has been launched for the ",
				createElement(
					"a",
					{
						href: "https://flowbite.com",
						className:
							"font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
					},
					"brand"
				),
				"."
			)
		),
		bottom: true
	}
};
