// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Progress, ProgressPositions, ProgressSizes } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Progress",
	component: Progress,
	argTypes: {
		progressLabelPosition: {
			options: Object.values(ProgressPositions),
			control: { type: "inline-radio" }
		},
		textLabelPosition: {
			options: Object.values(ProgressPositions),
			control: { type: "inline-radio" }
		},
		size: {
			options: Object.values(ProgressSizes),
			control: { type: "inline-radio" }
		},
		labelProgress: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		labelText: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: {}
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const WithProgress: Story = {
	args: {
		labelProgress: true
	}
};

export const WithLabel: Story = {
	args: {
		labelProgress: true,
		labelText: true,
		textLabel: "Progress"
	}
};

export const OutsidePlacement: Story = {
	args: {
		labelProgress: true,
		labelText: true,
		textLabel: "Progress",
		progressLabelPosition: ProgressPositions.Outside,
		textLabelPosition: ProgressPositions.Outside
	}
};

export const Small: Story = {
	args: {
		labelProgress: true,
		size: ProgressSizes.Small
	}
};

export const Large: Story = {
	args: {
		labelProgress: true,
		size: ProgressSizes.Large
	}
};

export const ExtraLarge: Story = {
	args: {
		labelProgress: true,
		size: ProgressSizes.ExtraLarge
	}
};

export const ColorGreen: Story = {
	args: {
		labelProgress: true,
		color: "green"
	}
};
