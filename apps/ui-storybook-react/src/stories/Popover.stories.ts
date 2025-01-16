// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverPositions, PopoverTriggers } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Popover",
	component: Popover,
	argTypes: {
		placement: {
			options: Object.values(PopoverPositions),
			control: { type: "inline-radio" }
		},
		trigger: {
			options: Object.values(PopoverTriggers),
			control: { type: "inline-radio" }
		},
		arrow: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
	},
	args: {}
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const RightPlacement: Story = {
	args: {
        placement: PopoverPositions.Right
    }
};

export const PopOnHover: Story = {
	args: {
        trigger: PopoverTriggers.Hover
    }
};

export const WithoutArrow: Story = {
	args: {
        arrow: false
    }
};