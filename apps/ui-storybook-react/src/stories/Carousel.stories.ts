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
		children: "Carousel",
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const WithStyle: Story = {
	args: {
		children: "Carousel",
		className: "bg-gray-300 dark:bg-gray-800",
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const Static: Story = {
	args: {
		children: "Carousel",
		slide: false,
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const FastSlide: Story = {
	args: {
		children: "Carousel",
		slideInterval: 500,
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const CustomControls: Story = {
	args: {
		children: "Carousel",
		leftControl: "Previous",
		rightControl: "Next",
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const WithoutIndicators: Story = {
	args: {
		children: "Carousel",
		indicators: false,
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};

export const PauseOnHover: Story = {
	args: {
		children: "Carousel",
		pauseOnHover: true,
		content: [
			"<div>Content</div>",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-2.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-3.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-4.svg' />",
			"<img src='https://flowbite.com/docs/images/carousel/carousel-5.svg' />"
		]
	}
};
