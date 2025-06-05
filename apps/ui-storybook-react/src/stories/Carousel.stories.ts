// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Carousel } from "@twin.org/ui-components-react";
import { createElement } from "react";

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
	args: {
		onClick: fn(),
		items: [
			createElement("div", null, "Content"),
			createElement("img", { src: "https://flowbite.com/docs/images/carousel/carousel-2.svg" }),
			createElement("img", { src: "https://flowbite.com/docs/images/carousel/carousel-3.svg" }),
			createElement("img", { src: "https://flowbite.com/docs/images/carousel/carousel-4.svg" }),
			createElement("img", { src: "https://flowbite.com/docs/images/carousel/carousel-5.svg" })
		]
	}
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Carousel"
	}
};

export const WithStyle: Story = {
	args: {
		children: "Carousel",
		className: "bg-blue-300 dark:bg-blue-800"
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

export const HandleChange: Story = {
	args: {
		children: "Carousel",
		onSlideChange: handleOnChange
	}
};

/**
 * Handle the onChange action.
 * @param index - The index of the current slide.
 */
function handleOnChange(index: number): void {
	// Custom onChange logic here

	// eslint-disable-next-line no-console
	console.log("Index changed to", index);
}
