// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

/**
 * This file provides a simplified way to import icons directly
 * for better compatibility with existing projects.
 *
 * Usage:
 * import { Outline, Solid } from '@twin.org/ui-components-react/icons';
 * const MyComponent = () => <Outline.AcademicCap />;
 *
 * Or more efficiently:
 * import { Outline } from '@twin.org/ui-components-react/icons';
 * const { AcademicCap } = Outline;
 * const MyComponent = () => <AcademicCap />;
 */

// Re-export icons using the preferred export syntax
export * as Outline from "flowbite-react-icons/outline";
export * as Solid from "flowbite-react-icons/solid";
