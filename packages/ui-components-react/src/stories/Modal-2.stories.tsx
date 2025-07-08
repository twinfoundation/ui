import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal2 } from "../modal-2/modal-2";

const meta = {
  title: "Components/Modal2",
  component: Modal2,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal2>;
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal2 {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    title: "Modal2 Title",
    children: "This is the Modal2 body.",
    footer: <button onClick={() => alert('Confirmed!')}>Confirm</button>,
    size: "medium"
  } as any
};

export const Large: Story = {
  render: Template,
  args: {
    title: "Large Modal2",
    children: "This is a large modal.",
    size: "large"
  } as any
};

export const WithFooter: Story = {
  render: Template,
  args: {
    title: "Modal2 with Footer",
    children: "This modal has a custom footer.",
    footer: <><button onClick={() => alert('Cancel')}>Cancel</button> <button onClick={() => alert('OK')}>OK</button></>,
    size: "medium"
  } as any
}; 