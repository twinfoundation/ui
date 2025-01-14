// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Banner } from "@twin.org/ui-components-react";

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
	args: { onClick: fn() }
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children:
			"<p class='flex items-center text-sm font-normal text-gray-500 dark:text-gray-400'><span class='[&_p]:inline'>New brand identity has been launched for the&nbsp;<a href='https://flowbite.com' class='inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500'> brand </a></span></p>"
	}
};

export const Bottom: Story = {
	args: {
		children:
			"<p class='flex items-center text-sm font-normal text-gray-500 dark:text-gray-400'><span class='[&_p]:inline'>New brand identity has been launched for the&nbsp;<a href='https://flowbite.com' class='inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500'>brand </a></span></p>",
		bottom: true
	}
};
