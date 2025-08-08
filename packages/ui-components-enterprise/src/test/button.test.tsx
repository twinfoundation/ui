// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../button/button';

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<Button>Custom Button Text</Button>);
    const button = screen.getByRole('button', { name: /custom button text/i });
    expect(button).toBeInTheDocument();
  });

  it('applies primary color by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByRole('button');
    // Check if the button has the primary color classes
    expect(button).toHaveClass('bg-surface-button');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    render(<Button data-testid="custom-button" aria-label="Custom label">Button</Button>);
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Button color="error">Error Button</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('bg-error');

    rerender(<Button color="success">Success Button</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-success');

    rerender(<Button color="warning">Warning Button</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('bg-warning');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="xs" iconOnly>Small Button</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('!h-7');

    rerender(<Button size="lg" iconOnly>Large Button</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveClass('!h-14');
  });

  it('renders as icon only', () => {
    render(<Button iconOnly>Icon Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<Button>Snapshot Test</Button>);
    expect(container).toMatchSnapshot();
  });
}); 