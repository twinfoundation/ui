import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../footer-2';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer2',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: (
      <>
        <Footer.Brand
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
          href="https://flowbite.com"
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
        <Footer.Icon href="https://github.com" icon={FaGithub} ariaLabel="GitHub" />
        <Footer.Icon href="https://twitter.com" icon={FaTwitter} ariaLabel="Twitter" />
        <Footer.Divider />
        <Footer.Copyright by="Flowbite™" year={2024} href="https://flowbite.com" />
      </>
    ),
  },
};

export const ColumnLinks: Story = {
  args: {
    body: (
      <>
        <Footer.Brand
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
          href="https://flowbite.com"
        />
        <Footer.LinkGroup col>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
        <Footer.Divider />
        <Footer.Copyright by="Flowbite™" year={2024} />
      </>
    ),
  },
}; 