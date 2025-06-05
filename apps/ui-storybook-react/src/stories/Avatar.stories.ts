// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Avatar } from "@twin.org/ui-components-react";
import { createElement } from "react";

const meta = {
	title: "Components/Avatar",
	component: Avatar,
	argTypes: {
		img: { control: { type: "text" } },
		alt: { control: { type: "text" } },
		bordered: { control: { type: "boolean" } },
		size: {
			options: ["xs", "sm", "md", "lg", "xl"],
			control: { type: "inline-radio" }
		},
		rounded: { control: { type: "boolean" } },
		status: {
			options: ["online", "offline", "away", "busy"],
			control: { type: "inline-radio" }
		},
		statusPosition: {
			options: ["top-left", "top-right", "bottom-left", "bottom-right"],
			control: { type: "inline-radio" }
		}
	},
	args: { onClick: fn() }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Avatar
export const Default: Story = {
	args: {
		img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
		alt: "User profile picture",
		rounded: true,
		size: "md"
	}
};

// Custom Image Element
export const CustomImageElement: Story = {
	args: {
		alt: "User settings",
		img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
		size: "lg",
		bordered: true,
		status: "online",
		statusPosition: "bottom-right"
	}
};

// Grouped Avatars
export const Grouped: Story = {
	render: () =>
		createElement("div", { className: "flex -space-x-4" }, [
			createElement(Avatar, {
				key: "avatar1",
				img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
				rounded: true,
				size: "md",
				bordered: true,
				stacked: true
			}),
			createElement(Avatar, {
				key: "avatar2",
				img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
				rounded: true,
				size: "md",
				bordered: true,
				stacked: true
			}),
			createElement(Avatar, {
				key: "avatar3",
				img: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
				rounded: true,
				size: "md",
				bordered: true,
				stacked: true
			}),
			createElement(Avatar, {
				key: "avatar4",
				img: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
				rounded: true,
				size: "md",
				bordered: true,
				stacked: true
			})
		])
};
