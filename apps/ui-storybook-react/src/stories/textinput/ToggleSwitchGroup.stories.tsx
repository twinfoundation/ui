import { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitchGroup } from "./ToggleSwitchGroup";

const meta: Meta<typeof ToggleSwitchGroup> = {
	title: "Components/ToggleSwitchGroup",
	component: ToggleSwitchGroup,
	argTypes: {
		toggles: {
			control: "object",
			description: "Array of toggle switch configurations"
		}
	}
};

export default meta;
type Story = StoryObj<typeof ToggleSwitchGroup>;

export const Default: Story = {
	args: {
		toggles: [
			{ label: "Toggle me", initialChecked: false },
			{ label: "Toggle me (checked)", initialChecked: true },
			{ label: "Toggle me (disabled)", initialChecked: false, disabled: true },
			{ label: "Toggle me (checked & disabled)", initialChecked: true, disabled: true },
			{ label: "Simple toggle without label", initialChecked: true }
		]
	}
};

export const DisabledToggles: Story = {
	args: {
		toggles: [
			{ label: "Disabled Toggle 1", initialChecked: true, disabled: true },
			{ label: "Disabled Toggle 2", initialChecked: false, disabled: true }
		]
	}
};

export const DynamicLabels: Story = {
	args: {
		toggles: [
			{ label: "Night Mode", initialChecked: false },
			{ label: "Notifications", initialChecked: true },
			{ label: "Location Services", initialChecked: false },
			{ label: "Auto Sync", initialChecked: true }
		]
	}
};
