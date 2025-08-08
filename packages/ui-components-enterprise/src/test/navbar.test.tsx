// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../navbar/navbar';

describe('Navbar', () => {
  it('renders basic navbar correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <span>Brand</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with fluid prop correctly', () => {
    const { container } = render(
      <Navbar fluid>
        <Navbar.Brand href="/">
          <span>Fluid Brand</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with rounded prop correctly', () => {
    const { container } = render(
      <Navbar rounded>
        <Navbar.Brand href="/">
          <span>Rounded Brand</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with both fluid and rounded props correctly', () => {
    const { container } = render(
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span>Fluid Rounded Brand</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with brand and links correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <span>Brand</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with toggle button correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <span>Brand</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with custom className correctly', () => {
    const { container } = render(
      <Navbar className="custom-navbar">
        <Navbar.Brand href="/">
          <span>Custom Brand</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with active link correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <span>Brand</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Active Link
          </Navbar.Link>
          <Navbar.Link href="/inactive">Inactive Link</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with complex brand content correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
          <span className="ml-2 text-xl font-bold">Company Name</span>
        </Navbar.Brand>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });

  it('renders navbar with multiple links correctly', () => {
    const { container } = render(
      <Navbar>
        <Navbar.Brand href="/">
          <span>Brand</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/products">Products</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
    expect(container).toMatchSnapshot();
  });
}); 