// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Example components that work correctly for snapshot testing
const Card = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => {
  return (
    <div className={`card ${className}`} data-testid="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
};

const Badge = ({ text, variant = 'default' }: { text: string; variant?: 'default' | 'success' | 'error' }) => {
  return (
    <span className={`badge badge-${variant}`} data-testid="badge">
      {text}
    </span>
  );
};

describe('Snapshot Testing Examples', () => {
  describe('Card Component', () => {
    it('renders basic card correctly', () => {
      const { container } = render(
        <Card title="Sample Card">
          <p>This is card content</p>
        </Card>
      );
      expect(container).toMatchSnapshot();
    });

    it('renders card with custom className correctly', () => {
      const { container } = render(
        <Card title="Custom Card" className="custom-card">
          <Badge text="New" variant="success" />
        </Card>
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe('Badge Component', () => {
    it('renders default badge correctly', () => {
      const { container } = render(<Badge text="Default Badge" />);
      expect(container).toMatchSnapshot();
    });

    it('renders success badge correctly', () => {
      const { container } = render(<Badge text="Success" variant="success" />);
      expect(container).toMatchSnapshot();
    });

    it('renders error badge correctly', () => {
      const { container } = render(<Badge text="Error" variant="error" />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Complex Component Combinations', () => {
    it('renders complex layout correctly', () => {
      const { container } = render(
        <div className="dashboard">
          <Card title="User Stats">
            <div className="stats">
              <Badge text="Active" variant="success" />
              <Badge text="Pending" variant="default" />
              <Badge text="Failed" variant="error" />
            </div>
          </Card>
        </div>
      );
      expect(container).toMatchSnapshot();
    });
  });
}); 