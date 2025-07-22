// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock the license guard functions to prevent license errors during testing
vi.mock('../utils/packageLicenseGuard', () => ({
  checkComponentLicense: vi.fn(),
  checkPackageLicense: vi.fn(),
  PackageLicenseStatus: {
    LICENSED: 'licensed',
    UNLICENSED: 'unlicensed',
    INVALID: 'invalid'
  }
}));

// Mock ResizeObserver for components that use it
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver for components that use it
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})); 