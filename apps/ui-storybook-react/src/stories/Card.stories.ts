// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Card } from "@twin.org/ui-components-react";
import { HiHome, HiInformationCircle, HiShoppingCart, HiUserAdd } from "react-icons/hi";

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
		buttons: [{ label: "Home", href: "/", icon: HiHome }]
	}
};

export const WithWarnButton: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		buttons: [{ label: "Warn", href: "/", icon: HiInformationCircle, color: "warning" }]
	}
};

export const WithMultipleButtons: Story = {
	args: {
		children: "Card",
		content:
			"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
		buttons: [
			{ label: "Home", href: "/", icon: HiHome },
			{ label: "Dark", href: "/", icon: HiInformationCircle, color: "dark" }
		]
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
		buttons: [{ label: "Home", href: "/", icon: HiHome }],
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
			]
		},
		buttons: [
			{ label: "Add", href: "/", icon: HiUserAdd },
			{ label: "Message", href: "/", color: "plain" }
		]
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
			stars: 4
		},
		buttons: [
			{ label: "Add to Cart", href: "/" },
			{ label: "Buy Now", href: "/", color: "primary" }
		]
	}
};

export const CTA: Story = {
	args: {
		children: "Card",
		type: "cta",
		content:
			"Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.",
		buttons: [
			{
				label: "Mac App Store",
				description: "Download on",
				href: "/",
				color: "info",
				svg: "<svg class='h-5 w-5' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='apple' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'> <path fill='currentColor' d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' /></svg>"
			},
			{
				label: "Add to Cart",
				description: "Buy now",
				href: "/",
				color: "dark",
				icon: HiShoppingCart
			}
		]
	}
};

export const List: Story = {
	args: {
		children: "Card",
		type: "list",
		list: {
			items: [
				{
					label: "Neil Sims",
					description: "email@windster.com",
					info: "$320",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=64&q=75",
						alt: "Neil image",
						height: 32,
						width: 32
					}
				},
				{
					label: "Bonnie Green",
					description: "email@windster.com",
					info: "$3467",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-2.jpg&w=64&q=75",
						alt: "Bonnie imag",
						height: 32,
						width: 32
					}
				},
				{
					label: "Michael Gough",
					description: "email@windster.com",
					info: "$67",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-3.jpg&w=64&q=75",
						alt: "Michael image",
						height: 32,
						width: 32
					}
				},
				{
					label: "Lana Byrd",
					description: "email@windster.com",
					info: "$367",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-4.jpg&w=64&q=75",
						alt: "Lana image",
						height: 32,
						width: 32
					}
				},
				{
					label: "Thomas Lean",
					description: "email@windster.com",
					info: "$2367",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=64&q=75",
						alt: "Thomas image",
						height: 32,
						width: 32
					}
				}
			],
			actions: [
				{ label: "View all", href: "/" },
				{ label: "Export Data", href: "/", color: "gray" }
			]
		}
	}
};

export const Pricing: Story = {
	args: {
		children: "Card",
		type: "pricing",
		list: {
			items: [
				{
					label: "Thomas Lean",
					description: "email@windster.com",
					info: "$2367",
					image: {
						src: "https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-5.jpg&w=64&q=75",
						alt: "Thomas image",
						height: 32,
						width: 32
					}
				}
			],
			actions: [
				{ label: "View all", href: "/" },
				{ label: "Export Data", href: "/", color: "gray" }
			]
		}
	}
};
