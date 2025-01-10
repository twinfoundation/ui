// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Accordion } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		alwaysOpen: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		flush: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		collapseAll: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Accordion"
	}
};

export const AlwaysOpen: Story = {
	args: {
		children: "Accordion",
		alwaysOpen: true
	}
};

export const CollapseAll: Story = {
	args: {
		children: "Accordion",
		collapseAll: true
	}
};

export const Flush: Story = {
	args: {
		children: "Accordion",
		flush: true
	}
};
