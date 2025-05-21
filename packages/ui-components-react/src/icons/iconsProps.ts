// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * Icons component props
 */
export interface IconsProps {
  /** The color of the icon */
  color?: string;
  /** Width of the icon */
  width?: number | string;
  /** Height of the icon (defaults to width if not provided) */
  height?: number | string;
  /** Additional class name */
  className?: string;
  /** Type of the icon variant */
  type?: 'bold' | 'regular' | 'light';
  /** Any additional SVG props */
  [key: string]: unknown;
}
