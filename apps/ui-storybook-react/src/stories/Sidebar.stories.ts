// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Sidebar",
	component: Sidebar,
	argTypes: {},
	args: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};
