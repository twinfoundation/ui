// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { RangeSlider, RangeSliderSizes } from "@twin.org/ui-components-core";

const meta = {
	title: "core/RangeSlider",
	component: RangeSlider,
	argTypes: {
		sizing: {
			options: Object.values(RangeSliderSizes),
			control: { type: "inline-radio" }
		},
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {}
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Small: Story = {
	args: {
		sizing: RangeSliderSizes.Small
	}
};

export const Large: Story = {
	args: {
		sizing: RangeSliderSizes.Large
	}
};

export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Required: Story = {
	args: {
		required: true
	}
};

export const RangeValues: Story = {
	args: {
		min: 1,
		max: 5
	}
};
