import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../accordion-2';

// Simple icon components for demo
const QuestionIcon: React.FC<{ width?: number; height?: number; className?: string }> = ({ 
  width = 20, 
  height = 20, 
  className 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
  </svg>
);

const EnvelopeIcon: React.FC<{ width?: number; height?: number; className?: string }> = ({ 
  width = 20, 
  height = 20, 
  className 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
  >
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const CalendarIcon: React.FC<{ width?: number; height?: number; className?: string }> = ({ 
  width = 20, 
  height = 20, 
  className 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion2',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    alwaysOpen: { control: 'boolean' },
    flush: { control: 'boolean' },
    collapseAll: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Accordion 1',
        content: (
          <div>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbar, and more.
            </p>
            <p style={{ color: '#6b7280' }}>
              Check out this guide to learn how to{' '}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                style={{ color: '#0891b2', textDecoration: 'underline' }}
              >
                get started
              </a>
              {' '}and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </div>
        ),
      },
      {
        title: 'Is there a Figma file available?',
        content: (
          <div>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
            <p style={{ color: '#6b7280' }}>
              Check out the{' '}
              <a
                href="https://flowbite.com/figma/"
                style={{ color: '#0891b2', textDecoration: 'underline' }}
              >
                Figma design system
              </a>
              {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        ),
      },
      {
        title: 'What are the differences between Flowbite and Tailwind UI?',
        content: (
          <div>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              Learn more about these technologies:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#6b7280' }}>
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  style={{ color: '#0891b2', textDecoration: 'underline' }}
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  style={{ color: '#0891b2', textDecoration: 'underline' }}
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
};

export const AlwaysOpen: Story = {
  args: {
    alwaysOpen: true,
    items: [
      {
        title: 'Always Open Panel 1',
        content: <p style={{ color: '#6b7280' }}>This panel can stay open while others are opened.</p>,
      },
      {
        title: 'Always Open Panel 2',
        content: <p style={{ color: '#6b7280' }}>Multiple panels can be open at the same time.</p>,
      },
    ],
  },
};

export const CollapseAll: Story = {
  args: {
    collapseAll: true,
    items: [
      {
        title: 'Collapsed Panel 1',
        content: <p style={{ color: '#6b7280' }}>This panel starts collapsed.</p>,
      },
      {
        title: 'Collapsed Panel 2',
        content: <p style={{ color: '#6b7280' }}>This panel also starts collapsed.</p>,
      },
    ],
  },
};

export const Flush: Story = {
  args: {
    flush: true,
    items: [
      {
        title: 'Flush Panel 1',
        content: <p style={{ color: '#6b7280' }}>This panel has no borders or background.</p>,
      },
      {
        title: 'Flush Panel 2',
        content: <p style={{ color: '#6b7280' }}>Clean, minimal appearance.</p>,
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        title: 'Accordion with Info Icon',
        content: (
          <p style={{ color: '#6b7280' }}>
            This accordion item uses the Envelope icon.
          </p>
        ),
        icon: EnvelopeIcon,
      },
      {
        title: 'Accordion with Question Icon',
        content: (
          <p style={{ color: '#6b7280' }}>
            This accordion item uses the Question icon.
          </p>
        ),
        icon: QuestionIcon,
      },
      {
        title: 'Accordion with Settings Icon',
        content: (
          <p style={{ color: '#6b7280' }}>
            This accordion item uses the Calendar icon.
          </p>
        ),
        icon: CalendarIcon,
      },
    ],
  },
}; 