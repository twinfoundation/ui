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

// Import and re-export as namespaces to avoid naming collisions
import * as OutlineIcons from "flowbite-react-icons/outline";
import * as SolidIcons from "flowbite-react-icons/solid";

export const Outline = OutlineIcons;
export const Solid = SolidIcons;
