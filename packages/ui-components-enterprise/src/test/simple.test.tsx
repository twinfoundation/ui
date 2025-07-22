// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Simple test component to verify testing setup works
const SimpleComponent = ({ text }: { text: string }) => {
  return <div data-testid="simple-component">{text}</div>;
};

describe('Simple Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SimpleComponent text="Hello World" />);
    expect(getByTestId('simple-component')).toHaveTextContent('Hello World');
  });

  it('matches snapshot', () => {
    const { container } = render(<SimpleComponent text="Test" />);
    expect(container).toMatchSnapshot();
  });
}); 