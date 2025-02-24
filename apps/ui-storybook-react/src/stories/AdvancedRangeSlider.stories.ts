// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedRangeSlider, TooltipPlacements, IconsSolid } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/AdvancedRangeSlider",
	component: AdvancedRangeSlider,
	argTypes: {}
} satisfies Meta<typeof AdvancedRangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		startValue: "50",
		min: 0,
		max: 100
	}
};

export const WithTooltip: Story = {
	args: {
		startValue: "50",
		min: 0,
		max: 100,
		showTooltip: true,
		tooltipPlacement: TooltipPlacements.Top
	}
};

export const WithCustomTooltip: Story = {
	args: {
		startValue: "50",
		min: 0,
		max: 100,
		showTooltip: true,
		tooltipPlacement: TooltipPlacements.Top,
		formatTooltip: (value: number) => `${value}%`
	}
};

export const DualHandle: Story = {
	args: {
		isDualHandle: true,
		startValue: "20",
		endValue: "80",
		min: 0,
		max: 100,
		showTooltip: true,
		tooltipPlacement: TooltipPlacements.Top,
		formatTooltip: (value: number) => `${value}%`
	}
};

export const DualHandleWithoutTooltip: Story = {
	args: {
		isDualHandle: true,
		startValue: "20",
		endValue: "80",
		min: 0,
		max: 100
	}
};

export const WithIcons: Story = {
	args: {
		startValue: "50",
		min: 0,
		max: 100,
		showTooltip: true,
		tooltipPlacement: TooltipPlacements.Top,
		showIcons: true,
		leftIcon: IconsSolid.VolumeDown,
		rightIcon: IconsSolid.VolumeUp,
		onLeftIconClick: () => console.log("Left icon clicked"),
		onRightIconClick: () => console.log("Right icon clicked")
	}
};

export const AudioControlExample: Story = {
	args: {
		startValue: "75",
		min: 0,
		max: 100,
		showTooltip: true,
		tooltipPlacement: TooltipPlacements.Top,
		formatTooltip: (value: number) => `${value}%`,
		showIcons: true,
		leftIcon: IconsSolid.VolumeDown,
		rightIcon: IconsSolid.VolumeUp
	}
};
