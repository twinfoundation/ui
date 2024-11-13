import type { Meta, StoryObj } from "@storybook/react";
import { BannerComponent } from "./banner";

const meta: Meta<typeof BannerComponent> = {
  title: "Components/Banner",
  component: BannerComponent,
  argTypes: {
    onSubscribe: { action: "subscribed" },
    onClose: { action: "closed" },
  },
};

export default meta;

export const CenterTextOnly: StoryObj<typeof BannerComponent> = {
  args: {
    text: "New brand identity has been launched for the ",
    textlink: "Flowbite Library",
    showButton: false,
    showInput: false,
    position: "top",
  },
};
export const CenterTextOnlyBottom: StoryObj<typeof BannerComponent> = {
  args: {
    text: "New brand identity has been launched for the ",
    textlink: "Flowbite Library",
    showButton: false,
    showInput: false,
    position: "bottom",
  },
};

export const SideBySide: StoryObj<typeof BannerComponent> = {
  args: {
    text: "Stay connected with us!",
    showButton: false,
    showInput: true,
    position: "top",
  },
};

export const WithButton: StoryObj<typeof BannerComponent> = {
  args: {
    text: "Subscribe to our newsletter",
    showButton: true,
    showInput: false,
  },
};

export const WithInputBox: StoryObj<typeof BannerComponent> = {
  args: {
    text: "Sign up for our newsletter",
    showButton: true,
    showInput: true,
  },
};
