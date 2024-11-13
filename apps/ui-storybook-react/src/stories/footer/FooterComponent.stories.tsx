import { Meta, StoryObj } from "@storybook/react";
import { FooterComponent } from "./FooterComponent";

const meta: Meta<typeof FooterComponent> = {
	title: "Components/Footer",
	component: FooterComponent,
	argTypes: {
		brandName: { control: "text", description: "Name of the brand" },
		brandUrl: { control: "text", description: "URL of the brand homepage" },
		brandLogo: { control: "text", description: "URL of the brand logo image" },
		sections: { control: "object", description: "Footer sections with links" },
		copyrightBy: { control: "text", description: "Text for copyright owner" },
		copyrightYear: { control: "number", description: "Year for copyright" }
	}
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Default: Story = {
	args: {
		brandName: "",
		brandUrl: "https://flowbite.com",
		brandLogo: "./images/LogoTwin.png",
		sections: [
			{
				title: "About",
				links: [
					{ label: "Flowbite", url: "#" },
					{ label: "Tailwind CSS", url: "#" }
				]
			},
			{
				title: "Follow us",
				links: [
					{ label: "Github", url: "#" },
					{ label: "Discord", url: "#" }
				]
			},
			{
				title: "Legal",
				links: [
					{ label: "Privacy Policy", url: "#" },
					{ label: "Terms & Conditions", url: "#" }
				]
			}
		],
		copyrightBy: "Flowbite™",
		copyrightYear: 2022
	}
};

export const CustomFooter: Story = {
	args: {
		brandName: "MyBrand",
		brandUrl: "https://mybrand.com",
		brandLogo: "https://mybrand.com/logo.svg",
		sections: [
			{
				title: "Company",
				links: [
					{ label: "About Us", url: "#" },
					{ label: "Careers", url: "#" }
				]
			},
			{
				title: "Support",
				links: [
					{ label: "Help Center", url: "#" },
					{ label: "Contact Us", url: "#" }
				]
			},
			{
				title: "Social",
				links: [
					{ label: "LinkedIn", url: "#" },
					{ label: "Twitter", url: "#" }
				]
			}
		],
		copyrightBy: "MyBrand™",
		copyrightYear: 2023
	}
};
