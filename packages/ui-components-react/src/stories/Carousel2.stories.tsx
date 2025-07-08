import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from '../carousel-2';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel2',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
  <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />,
];

export const Default: Story = {
  args: {
    items: images,
    indicators: true,
    slide: true,
    slideInterval: 2000,
  },
};

export const NoIndicators: Story = {
  args: {
    items: images,
    indicators: false,
  },
};

export const Manual: Story = {
  args: {
    items: images,
    slide: false,
  },
}; 