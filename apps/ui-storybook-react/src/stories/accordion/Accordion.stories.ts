import type { Meta, StoryObj } from "@storybook/react";
import { AccordionComponent } from "./Accordion";
import { HiOutlineInformationCircle, HiOutlineQuestionMarkCircle } from "react-icons/hi";

const meta: Meta<typeof AccordionComponent> = {
	title: "Components/Accordion",
	component: AccordionComponent
};

export default meta;

const panelsWithIcons = [
	{
		title: "What is Flowbite?",
		content:
			"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
		icon: HiOutlineInformationCircle
	},
	{
		title: "Is there a Figma file available?",
		content:
			"Flowbite has a Figma design equivalent for This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. components available in the library.",
		icon: HiOutlineQuestionMarkCircle
	},
	{
		title: "What is Flowbite?",
		content:
			"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
		icon: HiOutlineInformationCircle
	}
];

const panelsWithoutIcons = [
	{
		title: "What is Flowbite?",
		content:
			"Flowbite is an open-source library of This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. components built on top of Tailwind CSS."
	},
	{
		title: "Is there a Figma file available?",
		content:
			"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
	},
	{
		title: "What is Flowbite?",
		content:
			"Flowbite is an open-source library of This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow. components built on top of Tailwind CSS."
	}
];

export const AccordionWithIcons: StoryObj<typeof AccordionComponent> = {
	args: {
		panels: panelsWithIcons
	}
};

export const AccordionWithoutIcons: StoryObj<typeof AccordionComponent> = {
	args: {
		panels: panelsWithoutIcons
	}
};
