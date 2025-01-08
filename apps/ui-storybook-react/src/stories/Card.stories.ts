// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Card } from "@twin.org/ui-components-react";
import { HiHome, HiInformationCircle, HiUserAdd } from "react-icons/hi";

const meta = {
	title: "Components/Card",
	component: Card,
	argTypes: {
		horizontal: {
			options: Object.values([true, false]),
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Card",
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
		children: "Card"
	}
};

export const WithButton: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		button: { label: "Home", href: "/", icon: HiHome }
	}
};

export const WithWarnButton: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		button: { label: "Warn", href: "/", icon: HiInformationCircle, color: "warning" }
	}
};

export const WithImage: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		image: {
			imgSrc:
				"https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75",
			imgAlt: "Story Image"
		}
	}
};

export const Horizontal: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		button: { label: "Home", href: "/", icon: HiHome },
		image: {
			imgSrc:
				"https://flowbite-react.com/_next/image?url=%2Fimages%2Fblog%2Fimage-1.jpg&w=1080&q=75",
			imgAlt: "Story Image"
		},
		horizontal: true
	}
};

export const Profile: Story = {
	args: {
		children: "Card",
		type: "profile",
		profile: {
			name: "Bonnie Green",
			position: "Visual Designer",
			image: {
				alt: "Profile Picture",
				src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=256&q=75",
				width: 100,
				height: 100
			},
			actions: [
				{ label: "Edit", href: "/" },
				{ label: "Export Data", href: "/", color: "blue" },
				{ label: "Delete", href: "/", color: "red" }
			],
			buttons: [
				{ label: "Add friend", href: "/", icon: HiUserAdd },
				{ label: "Message", href: "/", color: "plain" }
			]
		}
	}
};

export const ECommerce: Story = {
	args: {
		children: "Card",
		type: "e-commerce",
		image: {
			imgAlt: "Product Image",
			imgSrc: "https://flowbite-react.com/images/products/apple-watch.png"
		},
		eCommerce: {
			price: "$999",
			buttons: [
				{ label: "Add to Cart", href: "/" },
				{ label: "Buy Now", href: "/", color: "primary" }
			],
			stars: 4
		}
	}
};
