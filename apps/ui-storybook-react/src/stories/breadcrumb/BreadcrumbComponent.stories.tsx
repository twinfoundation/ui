import type { Meta, StoryObj } from "@storybook/react";
import { BreadcrumbComponent } from "./BreadcrumbComponent";
import { HiHome } from "react-icons/hi";

const meta: Meta<typeof BreadcrumbComponent> = {
	title: "Components/Breadcrumb",
	component: BreadcrumbComponent,
	argTypes: {
		className: {
			control: { type: "text" },
			description: "CSS classes for the breadcrumb container"
		},
		ariaLabel: {
			control: { type: "text" },
			description: "Aria label for accessibility"
		},
		items: {
			control: { type: "object" },
			description: "List of breadcrumb items with href, label, and optional icon"
		}
	}
} satisfies Meta<typeof BreadcrumbComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySm: Story = {
	args: {
		className: "bg-gray-50 px-5 py-3 dark:bg-gray-800",
		ariaLabel: "Solid background breadcrumb example",
		items: [
			{ href: "#", label: "Home", icon: HiHome },
			{ href: "#", label: "Ecommerce" },
			{ href: "#", label: "Products" }
		]
	}
};

export const WithoutBackground: Story = {
	args: {
		className: "",
		ariaLabel: "Breadcrumb example without background",
		items: [
			{ href: "#", label: "Home", icon: HiHome },
			{ href: "#", label: "Ecommerce" },
			{ href: "#", label: "Products" }
		]
	}
};
