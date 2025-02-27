// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, Popover, PopoverPositions, PopoverTriggers } from "@twin.org/ui-components-react";
import React from "react";

const meta = {
	title: "Components/Popover",
	component: Popover,
	argTypes: {
		placement: {
			options: Object.values(PopoverPositions),
			control: { type: "inline-radio" },
			description: "Position of the popover relative to the trigger element"
		},
		trigger: {
			options: Object.values(PopoverTriggers),
			control: { type: "inline-radio" },
			description: "Action that triggers the popover"
		},
		arrow: {
			control: "boolean",
			description: "Show or hide the arrow pointer"
		},
		content: {
			control: "text",
			description: "Content to display in the popover"
		},
		className: {
			control: "text",
			description: "Additional CSS classes for styling"
		},
		ariaLabel: {
			control: "text",
			description: "Accessible label for the popover"
		},
		ariaDescription: {
			control: "text",
			description: "Accessible description for the popover"
		}
	},
	args: {
		children: "Trigger Popover"
	}
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "This is a default popover",
		ariaLabel: "Default popover",
		ariaDescription: "Shows basic popover functionality",
		placement: PopoverPositions.Top,
		trigger: PopoverTriggers.Click
	}
};

export const CustomPosition: Story = {
	args: {
		content: "This popover appears on the right",
		placement: PopoverPositions.Right,
		trigger: PopoverTriggers.Click,
		ariaLabel: "Right-positioned popover",
		ariaDescription: "A popover that appears to the right of the trigger"
	}
};

export const HoverTrigger: Story = {
	args: {
		content: "This popover appears on hover",
		trigger: PopoverTriggers.Hover,
		placement: PopoverPositions.Top,
		ariaLabel: "Hover popover",
		ariaDescription: "A popover that appears when you hover over the trigger"
	}
};

export const NoArrow: Story = {
	args: {
		content: "This popover has no arrow pointer",
		arrow: false,
		ariaLabel: "No arrow popover",
		ariaDescription: "A popover without an arrow pointer",
		placement: PopoverPositions.Top,
		trigger: PopoverTriggers.Click
	}
};

export const CustomStyles: Story = {
	args: {
		content: "This popover has custom styling",
		placement: PopoverPositions.Top,
		trigger: PopoverTriggers.Click,
		className: "custom-popover bg-surface-primary text-white p-4 rounded-lg",
		ariaLabel: "Styled popover",
		ariaDescription: "A popover with custom styling applied"
	}
};

export const CustomTrigger: Story = {
	args: {
		content: "This popover has a custom trigger element",
		customTrigger: React.createElement("div", {
			className: "cursor-pointer p-2 bg-surface-primary text-white rounded-md",
			children: "Custom Trigger Element"
		}),
		placement: PopoverPositions.Top,
		trigger: PopoverTriggers.Click,
		ariaLabel: "Custom trigger popover",
		ariaDescription: "A popover with a custom trigger element"
	}
};

export const AccessiblePopover: Story = {
	args: {
		content: "This popover demonstrates accessibility features",
		ariaLabel: "Accessible demo popover",
		ariaDescription: "This popover showcases proper ARIA labeling and description",
		placement: PopoverPositions.Bottom,
		trigger: PopoverTriggers.Click,
		className: "accessible-popover"
	}
};

export const ProfileCard: Story = {
	args: {
		content: React.createElement("div", {
			key: "profile-card",
			className: "w-[300px]",
			children: [
				React.createElement("div", {
					key: "header",
					className: "flex items-center justify-between p-4",
					children: [
						React.createElement("div", {
							key: "profile",
							className: "flex items-center",
							children: [
								React.createElement(Avatar, {
									key: "avatar",
									img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
									alt: "John Smith",
									size: "lg"
								}),
								React.createElement("div", {
									key: "info",
									className: "ml-3",
									children: [
										React.createElement("p", {
											key: "name",
											className: "text-lg font-semibold text-gray-900 dark:text-white",
											children: "John Smith"
										}),
										React.createElement("p", {
											key: "username",
											className: "text-sm text-gray-500 dark:text-gray-400",
											children: "@john.smith"
										})
									]
								})
							]
						}),
						React.createElement("button", {
							key: "follow-button",
							className:
								"px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700",
							children: "Follow"
						})
					]
				}),
				React.createElement("div", {
					key: "content",
					className: "px-3 pb-3",
					children: [
						React.createElement("div", {
							key: "bio",
							className: "text-[15px] text-gray-600 dark:text-gray-400 leading-snug mb-2",
							children: [
								React.createElement("span", {
									key: "bio-text-1",
									children: "Open-source contributor. Building "
								}),
								React.createElement("a", {
									key: "bio-link",
									href: "https://flowbite.com",
									className: "text-blue-600 hover:underline",
									children: "flowbite.com"
								}),
								React.createElement("span", {
									key: "bio-text-2",
									children: "."
								})
							]
						}),
						React.createElement("div", {
							key: "stats",
							className: "flex gap-3 text-[15px] text-gray-600 dark:text-gray-400",
							children: [
								React.createElement("span", {
									key: "following",
									children: [
										React.createElement("span", {
											key: "following-count",
											className: "font-medium text-gray-900 dark:text-white",
											children: "799"
										}),
										" Following"
									]
								}),
								React.createElement("span", {
									key: "followers",
									children: [
										React.createElement("span", {
											key: "followers-count",
											className: "font-medium text-gray-900 dark:text-white",
											children: "3,768"
										}),
										" Followers"
									]
								})
							]
						})
					]
				})
			]
		}),
		placement: PopoverPositions.Right,
		trigger: PopoverTriggers.Click,
		arrow: true,
		className: "p-0 border border-gray-200 rounded-lg shadow-lg dark:border-gray-600",
		customTrigger: React.createElement("div", {
			className: "inline-block",
			children: React.createElement(Avatar, {
				img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
				alt: "John Smith",
				size: "md"
			})
		}),
		ariaLabel: "Profile card",
		ariaDescription: "View profile information for John Smith"
	}
};
