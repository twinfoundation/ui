// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsVariants } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Tabs",
	component: Tabs,
	argTypes: {
		variant: {
			options: Object.values(TabsVariants),
			control: { type: "inline-radio" }
		}
	},
	args: {}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Underline: Story = {
	args: {
		variant: TabsVariants.Underline
	}
};

export const Pills: Story = {
	args: {
		variant: TabsVariants.Pills
	}
};

export const FullWidth: Story = {
	args: {
		variant: TabsVariants.FullWidth
	}
};
