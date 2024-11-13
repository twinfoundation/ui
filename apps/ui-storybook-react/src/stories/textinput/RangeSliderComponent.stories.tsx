import type { Meta, StoryObj } from "@storybook/react";
import { RangeSliderComponent } from "./RangeSliderComponent";

const meta: Meta<typeof RangeSliderComponent> = {
  title: "Components/RangeSlider",
  component: RangeSliderComponent,
  argTypes: {
    label: {
      control: "text",
      description: "Label for the range slider",
      defaultValue: "Range Slider",
    },
    disabled: {
      control: "boolean",
      description: "Whether the range slider is disabled",
      defaultValue: false,
    },
    sizing: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the range slider",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangeSliderComponent>;

export const Default: Story = {
  args: {
    id: "default-range",
    label: "Default",
    disabled: false,
    sizing: "md",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-range",
    label: "Disabled",
    disabled: true,
    sizing: "md",
  },
};

export const Small: Story = {
  args: {
    id: "sm-range",
    label: "Small",
    disabled: false,
    sizing: "sm",
  },
};

export const Medium: Story = {
  args: {
    id: "md-range",
    label: "Medium",
    disabled: false,
    sizing: "md",
  },
};

export const Large: Story = {
  args: {
    id: "lg-range",
    label: "Large",
    disabled: false,
    sizing: "lg",
  },
};
