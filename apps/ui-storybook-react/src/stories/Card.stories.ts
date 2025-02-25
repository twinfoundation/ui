// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Card, IconsSolid } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Card",
	component: Card,
	argTypes: {
		horizontal: {
			options: [true, false],
			control: { type: "inline-radio" }
		}
	},
	args: {},
	tags: ["autodocs"]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Card Title",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
	}
};

export const WithoutHeader: Story = {
	args: {
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
	}
};

export const WithoutContent: Story = {
	args: {
		children: "Card Title"
	}
};

export const WithButton: Story = {
	args: {
		children: "Card with Button",
		content: "This card has a single button with an icon.",
		buttons: [
			{
				label: "Learn More",
				svg: IconsSolid.ShoppingBag,
				color: "primary"
			}
		]
	}
};

export const WithMultipleButtons: Story = {
	args: {
		children: "Card with Multiple Buttons",
		content: "This card has multiple buttons with different icons.",
		buttons: [
			{
				label: "Home",
				svg: IconsSolid.Home,
				color: "secondary"
			},
			{
				label: "Info",
				svg: IconsSolid.InfoCircle,
				color: "primary"
			}
		]
	}
};

export const WithImage: Story = {
	args: {
		children: "Card with Image",
		content: "This card includes an image along with text content.",
		image: {
			imgSrc:
				"https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75",
			imgAlt: "Example Image"
		}
	}
};

export const Horizontal: Story = {
	args: {
		children: "Horizontal Card",
		content: "This card is displayed in a horizontal layout with an image and button.",
		buttons: [
			{
				label: "Learn More",
				svg: IconsSolid.ArrowRightAlt,
				color: "primary"
			}
		],
		image: {
			imgSrc:
				"https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75",
			imgAlt: "Example Image"
		},
		horizontal: true
	}
};

export const ClickableCard: Story = {
	args: {
		children: "Clickable Card",
		content: "This entire card is clickable and acts as a link.",
		href: "https://example.com",
		image: {
			imgSrc:
				"https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75",
			imgAlt: "Example Image"
		}
	}
};

export const ButtonColors: Story = {
	args: {
		children: "Card with Different Button Colors",
		content: "This card showcases all available button colors.",
		buttons: [
			{
				label: "Primary Button",
				svg: IconsSolid.ArrowRightAlt,
				color: "primary"
			},
			{
				label: "Secondary Button",
				svg: IconsSolid.CartPlus,
				color: "secondary"
			}
		]
	}
};
