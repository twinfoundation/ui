import { Meta, StoryObj } from "@storybook/react";
import { ListComponent } from "./ListComponent";
import { HiSearch, HiX } from "react-icons/hi";

const meta: Meta<typeof ListComponent> = {
	title: "Components/List",
	component: ListComponent,
	argTypes: {
		items: { control: "object", description: "List items with avatars, names, and optional icons" }
	}
};

export default meta;
type Story = StoryObj<typeof ListComponent>;

export const WithIcons: Story = {
	args: {
		items: [
			{ name: "Profile", icon: <HiSearch /> },
			{ name: "Settings", icon: <HiX /> },
			{ name: "Messages", icon: <HiSearch /> },
			{ name: "Download", icon: <HiX /> }
		]
	}
};

export const WithoutIcons: Story = {
	args: {
		items: [{ name: "Profile" }, { name: "Settings" }, { name: "Messages" }, { name: "Download" }]
	}
};
