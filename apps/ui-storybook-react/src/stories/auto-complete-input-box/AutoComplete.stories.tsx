import type { Meta, StoryObj } from "@storybook/react";
import AutoComplete from "./AutoComplete";

const meta = {
  title: "Components/AutoComplete",
  component: AutoComplete,
  argTypes: {
    suggestions: {
      control: { type: "object"},
      description: "List of suggestions to display",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input box",
    },
    onClear: { action: "cleared", description: "Triggered when the clear icon is clicked" },
    onSearch: { action: "searched", description: "Triggered when a suggestion is selected" },
  },
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    suggestions: ["React", "Vue", "Angular", "Svelte", "Ember", "Next.js"],
    placeholder: "Search frameworks...",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    suggestions: ["Python", "JavaScript", "TypeScript", "Go", "Rust", "C++"],
    placeholder: "Search programming languages...",
  },
};

export const NoSuggestions: Story = {
  args: {
    suggestions: [],
    placeholder: "Search items...",
  },
};
