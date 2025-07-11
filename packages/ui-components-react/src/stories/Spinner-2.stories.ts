// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { SpinnerSizes } from "../spinner/spinnerSizes";
import { Spinner2 as Spinner } from "../spinner-2/spinner-2";

const meta = {
	title: "Components/Spinner2",
	component: Spinner,
	parameters: {
		layout: "centered"
	}
} satisfies Meta<typeof Spinner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
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

export const XLarge: Story = {
	args: {
		size: SpinnerSizes.ExtraLarge
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
