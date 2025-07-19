// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import {
	Tooltip,
	TooltipAnimations,
	TooltipPlacements,
	TooltipStyles,
	TooltipTriggers
} from "@twin.org/ui-components-core";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	argTypes: {
		animation: {
			options: Object.values(TooltipAnimations),
			control: { type: "inline-radio" }
		},
		placement: {
			options: Object.values(TooltipPlacements),
			control: { type: "inline-radio" }
		},
		style: {
			options: Object.values(TooltipStyles),
			control: { type: "inline-radio" }
		},
		trigger: {
			options: Object.values(TooltipTriggers),
			control: { type: "inline-radio" }
		},
		arrow: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {
		children: "Activate Tooltip"
	}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "Tooltip content"
	}
};

export const CustomText: Story = {
	args: {
		children: "Custom Tooltip text",
		content: "Custom Tooltip content"
	}
};

export const LightStyle: Story = {
	args: {
		content: "Tooltip with the light style",
		style: TooltipStyles.Light
	}
};

export const RightPlacement: Story = {
	args: {
		content: "Tooltip content to the right",
		placement: TooltipPlacements.Right
	}
};

export const SlowAnimation: Story = {
	args: {
		content: "Tooltip content displayed slowly",
		animation: TooltipAnimations.Duration1000
	}
};

export const WithoutAnimation: Story = {
	args: {
		content: "Tooltip content without animation",
		animation: TooltipAnimations.False
	}
};

export const ClickTrigger: Story = {
	args: {
		content: "Tooltip content triggered by click",
		trigger: TooltipTriggers.Click
	}
};

export const WithoutArrow: Story = {
	args: {
		content: "Tooltip content without the arrow style",
		arrow: false
	}
};
