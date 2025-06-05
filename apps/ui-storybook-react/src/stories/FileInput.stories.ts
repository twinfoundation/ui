// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput, FileInputSizes } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/FileInput",
	component: FileInput,
	argTypes: {
		disabled: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		required: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	}
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
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

export const TextHelper: Story = {
	args: {
		helperText: "A profile picture is useful to confirm your are logged into your account."
	}
};

export const TextHelperNode: Story = {
	args: {
		helperText: createElement(
			"a",
			{ href: "https://www.twin.org", className: "text-surface-button pl-5" },
			"IOTA data policies"
		)
	}
};

export const Small: Story = {
	args: {
		sizing: FileInputSizes.Small
	}
};

export const Medium: Story = {
	args: {
		sizing: FileInputSizes.Medium
	}
};

export const Large: Story = {
	args: {
		sizing: FileInputSizes.Large
	}
};
