// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner, SpinnerSizes } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Spinner",
	component: Spinner,
	argTypes: {
		size: {
			options: Object.values(SpinnerSizes),
			control: { type: "inline-radio" }
		},
		color: {
			options: ["primary", "success", "warning", "error", "information"],
			control: { type: "inline-radio" }
		}
	},
	args: {
		color: "primary",
		size: SpinnerSizes.Medium
	}
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Different sizes
export const ExtraSmall: Story = {
	args: {
		size: SpinnerSizes.ExtraSmall
	}
};

export const Small: Story = {
	args: {
		size: SpinnerSizes.Small
	}
};

export const Medium: Story = {
	args: {
		size: SpinnerSizes.Medium
	}
};

export const Large: Story = {
	args: {
		size: SpinnerSizes.Large
	}
};

export const ExtraLarge: Story = {
	args: {
		size: SpinnerSizes.ExtraLarge
	}
};

// Different colors
export const Primary: Story = {
	args: {
		color: "primary"
	}
};

export const Success: Story = {
	args: {
		color: "success"
	}
};

export const Warning: Story = {
	args: {
		color: "warning"
	}
};

export const Error: Story = {
	args: {
		color: "error"
	}
};

export const Information: Story = {
	args: {
		color: "information"
	}
};
