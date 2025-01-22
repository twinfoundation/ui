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
		}
	},
	args: {}
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const CustomLabel: Story = {
	args: {
		children: "Loading content..."
	}
};

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

export const Success: Story = {
	args: {
		color: "success",
		size: SpinnerSizes.Large
	}
};

export const Info: Story = {
	args: {
		color: "info",
		size: SpinnerSizes.Large
	}
};

export const Warning: Story = {
	args: {
		color: "warning",
		size: SpinnerSizes.Large
	}
};

export const Failure: Story = {
	args: {
		color: "failure",
		size: SpinnerSizes.Large
	}
};
