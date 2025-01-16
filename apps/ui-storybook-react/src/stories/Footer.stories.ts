// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Footer",
	component: Footer,
	argTypes: {
	},
	args: {}
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};