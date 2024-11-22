import type { Meta, StoryObj } from "@storybook/react";
import Indicators from "./Indicators";

const meta = {
  title: "Components/Indicators",
  component: Indicators,
  argTypes: {
    iconType: {
      options: ["number", "checkmark", "custom"],
      control: { type: "radio" },
      description: "Type of icon to display",
    },
    iconValue: {
      control: { type: "text" },
      description: "Value for number or custom icons",
    },
    withText: {
      control: { type: "boolean" },
      description: "Whether to display text",
    },
    text: {
      control: { type: "text" },
      description: "Text to display if `withText` is true",
    },
  },
} satisfies Meta<typeof Indicators>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberIconWithText: Story = {
  args: {
    iconType: "number",
    iconValue: 1,
    withText: true,
    text: "Step 1",
  },
};

export const CheckmarkIconWithoutText: Story = {
  args: {
    iconType: "checkmark",
    withText: false,
  },
};

export const CustomIconWithText: Story = {
  args: {
    iconType: "custom",
    iconValue: "★",
    withText: true,
    text: "Starred",
  },
};

export const NumberIconWithoutText: Story = {
  args: {
    iconType: "number",
    iconValue: 5,
    withText: false,
  },
};
