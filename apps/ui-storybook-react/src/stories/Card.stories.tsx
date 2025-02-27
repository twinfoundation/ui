// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Card, IconsSolid, BadgeColors } from "@twin.org/ui-components-react";

const meta = {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
	argTypes: {
		badgePosition: {
			control: "select",
			options: ["top-right", "top-left", "bottom-right", "bottom-left", "inline"],
			description: "Position of the badge"
		},
		iconPosition: {
			control: "select",
			options: ["top", "left", "top-absolute"],
			description: "Position of the icon"
		}
	}
} satisfies Meta<typeof Card>;

export default meta;

/**
 * Type for Card component stories.
 */
type Story = StoryObj<typeof meta>;

/**
 * Default Card component story
 */
export const Default: Story = {
	args: {
		children: "Card Component",
		content: "This is a basic card component with a title and content."
	}
};

export const WithTitle: Story = {
	args: {
		title: "Card with Title Prop",
		content: "This card uses the new title prop instead of children for the heading."
	}
};

export const WithRichContent: Story = {
	args: {
		title: "Card with Rich Content",
		content: (
			<div>
				<p className="mb-2">This card contains rich content with a list:</p>
				<ul className="list-disc space-y-1 pl-5">
					<li>First item</li>
					<li>Second item</li>
					<li className="font-bold">Third item with emphasis</li>
				</ul>
			</div>
		)
	}
};

export const WithIcon: Story = {
	args: {
		title: "Card with Icon",
		content: "This card displays an icon at the top.",
		icon: {
			component: IconsSolid.Star,
			size: "lg",
			className: "text-yellow-500"
		}
	}
};

export const WithIconLeft: Story = {
	args: {
		title: "Card with Left-aligned Icon",
		content: "This card displays an icon aligned to the left of the title.",
		icon: {
			component: IconsSolid.Star,
			size: "lg",
			className: "text-yellow-500"
		},
		iconPosition: "left"
	}
};

export const WithAbsoluteIcon: Story = {
	args: {
		title: "Card with Absolute Positioned Icon",
		content: "This card displays an icon with absolute positioning in the top left corner.",
		icon: {
			component: IconsSolid.Star,
			size: "lg",
			className: "text-yellow-500"
		},
		iconPosition: "top-absolute"
	}
};

export const WithBadge: Story = {
	args: {
		title: "Card with Badge",
		content: "This card has a badge in the top right corner.",
		badge: {
			children: "New",
			color: BadgeColors.Success
		}
	}
};

export const WithBadgePositions: Story = {
	args: {
		title: "Card with Custom Badge Position",
		content:
			"This card demonstrates different badge positions. Try changing the badgePosition prop.",
		badge: {
			children: "Featured",
			color: BadgeColors.Warning
		},
		badgePosition: "top-left"
	}
};

export const WithInlineBadge: Story = {
	args: {
		title: "Card with Inline Badge",
		content: "This card has a badge inline with the title.",
		badge: {
			children: "Hot",
			color: BadgeColors.Failure
		},
		badgePosition: "inline",
		icon: {
			component: IconsSolid.Fire,
			size: "md",
			className: "text-red-500"
		},
		iconPosition: "left"
	}
};

export const WithButton: Story = {
	args: {
		title: "Card with Button",
		content: "This card has an interactive button with an onClick handler.",
		buttons: [
			{
				label: "Learn More",
				icon: IconsSolid.ShoppingBag,
				color: "primary",

				onClick: () => {
					// eslint-disable-next-line no-console
					console.log("Button clicked!");
				}
			}
		]
	}
};

export const WithMultipleButtons: Story = {
	args: {
		title: "Card with Multiple Buttons",
		content: "This card has multiple buttons with different styles.",
		buttons: [
			{
				label: "Primary",
				icon: IconsSolid.ArrowRightAlt,
				color: "primary"
			},
			{
				label: "Secondary",
				icon: IconsSolid.CartPlus,
				color: "secondary"
			}
		]
	}
};

export const WithImage: Story = {
	args: {
		title: "Card with Image",
		content: "This card displays an image at the top.",
		image: {
			imgSrc: "https://flowbite.com/docs/images/blog/image-1.jpg",
			imgAlt: "Example image"
		}
	}
};

export const Horizontal: Story = {
	args: {
		title: "Horizontal Card",
		content: "This card is displayed horizontally with an image on the left.",
		horizontal: true,
		image: {
			imgSrc: "https://flowbite.com/docs/images/blog/image-4.jpg",
			imgAlt: "Example image"
		}
	}
};

export const FullFeatured: Story = {
	args: {
		title: "Complete Card Example",
		content: (
			<div>
				<p className="mb-2">This card demonstrates all available features:</p>
				<ul className="mb-3 list-disc space-y-1 pl-5">
					<li>Title prop</li>
					<li>Rich content with React nodes</li>
					<li>Icon with custom size and color</li>
					<li>Badge in the corner</li>
					<li>Interactive buttons with different styles</li>
				</ul>
			</div>
		),
		icon: {
			component: IconsSolid.SalePercent,
			size: "xl",
			className: "text-purple-500"
		},
		badge: {
			children: "Premium",
			color: BadgeColors.Info
		},
		buttons: [
			{
				label: "Primary Action",
				icon: IconsSolid.ArrowRightAlt,
				color: "primary",

				onClick: () => {
					// eslint-disable-next-line no-console
					console.log("Primary action clicked!");
				}
			},
			{
				label: "Secondary Action",
				icon: IconsSolid.CartPlus,
				color: "secondary"
			}
		]
	}
};

export const OptimizedLayout: Story = {
	args: {
		title: "Optimized Layout Example",
		content: "This card uses the improved layout options with left-aligned icon and inline badge.",
		icon: {
			component: IconsSolid.SalePercent,
			size: "md",
			className: "text-purple-500"
		},
		iconPosition: "left",
		badge: {
			children: "Premium",
			color: BadgeColors.Info
		},
		badgePosition: "inline",
		buttons: [
			{
				label: "Learn More",
				icon: IconsSolid.ArrowRightAlt,
				color: "primary",

				onClick: () => {
					// eslint-disable-next-line no-console
					console.log("Button clicked!");
				}
			}
		]
	}
};

export const CleanLayout: Story = {
	args: {
		title: "Clean Layout Example",
		content: "This card uses absolute positioning for the icon to create a cleaner layout.",
		icon: {
			component: IconsSolid.SalePercent,
			size: "md",
			className: "text-purple-500"
		},
		iconPosition: "top-absolute",
		badge: {
			children: "Premium",
			color: BadgeColors.Info
		},
		buttons: [
			{
				label: "Learn More",
				icon: IconsSolid.ArrowRightAlt,
				color: "primary",

				onClick: () => {
					// eslint-disable-next-line no-console
					console.log("Button clicked!");
				}
			}
		]
	}
};
