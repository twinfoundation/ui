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
		children: "Banner"
	}
};

export const Bottom: Story = {
	args: {
		children: "Banner",
		bottom: true
	}
};
