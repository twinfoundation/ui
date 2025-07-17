// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as Accordion2 } from "../accordion-2/accordion-2";

const meta = {
  title: "Components/Accordion2",
  component: Accordion2,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ 
        width: '100%', 
        maxWidth: '100%', 
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Accordion 1',
        content: (
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              This is an open-source library of interactive components built with modern web technologies.
            </p>
            <p style={{ color: '#6b7280' }}>
              Check out this guide to learn how to{' '}
              <a
                href="#"
                style={{ color: '#0891b2', textDecoration: 'underline' }}
              >
                get started
              </a>
              {' '}and start developing websites even faster with components.
            </p>
          </div>
        ),
      },
      {
        title: 'Is there a design file available?',
        content: (
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              This component library is first conceptualized and designed using modern design software so everything you see in the library has a design equivalent.
            </p>
            <p style={{ color: '#6b7280' }}>
              Check out the{' '}
              <a
                href="#"
                style={{ color: '#0891b2', textDecoration: 'underline' }}
              >
                design system
              </a>
              {' '}based on modern design principles and components.
            </p>
          </div>
        ),
      },
      {
        title: 'What are the differences between this and other UI libraries?',
        content: (
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              The main difference is that this component library is open source under the MIT license, whereas some other libraries are paid products. Another difference is that this library relies on smaller and standalone components.
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              However, we actually recommend using multiple libraries as there is no technical reason stopping you from using the best of different worlds.
            </p>
            <p style={{ marginBottom: '0.5rem', color: '#6b7280' }}>
              Learn more about these technologies:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', color: '#6b7280' }}>
              <li>
                <a
                  href="#"
                  style={{ color: '#0891b2', textDecoration: 'underline' }}
                >
                  Component Library Pro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="nofollow"
                  style={{ color: '#0891b2', textDecoration: 'underline' }}
                >
                  UI Library
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
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>This panel can stay open while others are opened.</p>,
      },
      {
        title: 'Always Open Panel 2',
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>Multiple panels can be open at the same time.</p>,
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
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>This panel starts collapsed.</p>,
      },
      {
        title: 'Collapsed Panel 2',
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>This panel also starts collapsed.</p>,
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
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>This panel has no borders or background.</p>,
      },
      {
        title: 'Flush Panel 2',
        content: <p style={{ color: '#6b7280', marginTop: '1rem', width: '100%' }}>Clean, minimal appearance.</p>,
      },
    ],
  },
}; 