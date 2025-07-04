import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/button";

/**
 * Meta configuration for Button stories
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button text content",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button story
 */
export const Default: Story = {
  args: {
    children: "Click me",
  },
};

/**
 * Button with custom text
 */
export const CustomText: Story = {
  args: {
    children: "Custom Button Text",
  },
};

/**
 * Disabled button
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * Button with long text
 */
export const LongText: Story = {
  args: {
    children: "This is a button with very long text content that might wrap to multiple lines",
  },
};

/**
 * Button with no children (uses default text)
 */
export const NoChildren: Story = {
  args: {},
};

/**
 * Interactive button with click handler
 */
export const Interactive: Story = {
  args: {
    children: "Click to see action",
  },
  parameters: {
    docs: {
      description: {
        story: "This button has a click handler that logs to the Actions panel in Storybook.",
      },
    },
  },
};

/**
 * All Color Variants Grid
 */
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '600px' }}>
      <Button color="primary" size="md">Primary</Button>
      <Button color="secondary" size="md">Secondary</Button>
      <Button color="error" size="md">Error</Button>
      <Button color="warning" size="md">Warning</Button>
      <Button color="success" size="md">Success</Button>
      <Button color="info" size="md">Info</Button>
      <Button color="plain" size="md">Plain</Button>
      <Button color="ghost" size="md">Ghost</Button>
      <Button color="dark" size="md">Dark</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available color variants displayed in a grid layout.",
      },
    },
  },
};

/**
 * All Size Variants Grid
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Button color="primary" size="xs">Extra Small (XS)</Button>
      <Button color="primary" size="sm">Small (SM)</Button>
      <Button color="primary" size="md">Medium (MD)</Button>
      <Button color="primary" size="lg">Large (LG)</Button>
      <Button color="primary" size="xl">Extra Large (XL)</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available size variants displayed vertically for comparison.",
      },
    },
  },
};

/**
 * Interactive States Grid
 */
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '400px' }}>
      <Button color="primary" size="md">Normal</Button>
      <Button color="primary" size="md" disabled>Disabled</Button>
      <Button color="ghost" size="md">Ghost</Button>
      <Button color="ghost" size="md" outline>Ghost Outline</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different interactive states including normal, disabled, ghost, and ghost outline.",
      },
    },
  },
};

/**
 * Color variant stories
 */
export const Primary: Story = {
  args: { children: "Primary", color: "primary" },
};
export const Secondary: Story = {
  args: { children: "Secondary", color: "secondary" },
};
export const Error: Story = {
  args: { children: "Error", color: "error" },
};
export const Warning: Story = {
  args: { children: "Warning", color: "warning" },
};
export const Success: Story = {
  args: { children: "Success", color: "success" },
};
export const Info: Story = {
  args: { children: "Info", color: "info" },
};
export const Plain: Story = {
  args: { children: "Plain", color: "plain" },
};
export const Ghost: Story = {
  args: { children: "Ghost", color: "ghost" },
};
export const Dark: Story = {
  args: { children: "Dark", color: "dark" },
};

/**
 * Outline variant (ghost only)
 */
export const GhostOutline: Story = {
  args: { children: "Ghost Outline", color: "ghost", outline: true },
};

/**
 * Icon only variant
 */
export const IconOnly: Story = {
  args: {
    color: "primary",
    iconOnly: true,
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </svg>
    ),
  },
};

/**
 * Ghost + Icon only
 */
export const GhostIconOnly: Story = {
  args: {
    color: "ghost",
    iconOnly: true,
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" fill="currentColor" />
      </svg>
    ),
  },
};

/**
 * Error + Icon only
 */
export const ErrorIconOnly: Story = {
  args: {
    color: "error",
    iconOnly: true,
    icon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,2 22,22 2,22" fill="currentColor" />
      </svg>
    ),
  },
};
