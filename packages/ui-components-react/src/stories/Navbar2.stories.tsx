import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../navbar-2';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar2',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <Navbar.Brand href="#">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" style={{ height: 32 }} />
        <span>Brand</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  ),
};

export const Fluid: Story = {
  render: () => (
    <Navbar fluid>
      <Navbar.Brand href="#">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" style={{ height: 32 }} />
        <span>Brand</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Navbar rounded>
      <Navbar.Brand href="#">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" style={{ height: 32 }} />
        <span>Brand</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  ),
}; 