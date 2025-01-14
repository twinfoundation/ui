// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Carousel } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Carousel",
	component: Carousel,
	argTypes: {
		slide: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		slideInterval: {
			control: { type: "number" }
		},
		indicators: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		},
		pauseOnHover: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Carousel"
	}
};

export const Static: Story = {
	args: {
		children: "Carousel",
		slide: false
	}
};

export const FastSlide: Story = {
	args: {
		children: "Carousel",
		slideInterval: 500
	}
};

export const CustomControls: Story = {
	args: {
		children: "Carousel",
		leftControl: "Previous",
		rightControl: "Next"
	}
};

export const WithoutIndicators: Story = {
	args: {
		children: "Carousel",
		indicators: false
	}
};

export const PauseOnHover: Story = {
	args: {
		children: "Carousel",
		pauseOnHover: true
	}
};
