// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

// Re-export enterprise components with their related types, constants and utils
// This pattern keeps related exports together and improves discoverability

// Button
export { Button } from "./button/button";
export { ButtonColors } from "./button/buttonColors";
export { ButtonSizes } from "./button/buttonSizes";
export type { ButtonProps } from "./button/buttonProps";
export type { ButtonSize } from "./button/buttonSizes";

// Dropdown
export { Dropdown } from "./dropdown/dropdown";
export { DropdownPositions } from "./dropdown/dropdownPositions";
export { DropdownSizes } from "./dropdown/dropdownSizes";
export type { DropdownSize } from "./dropdown/dropdownSizes";
export type { DropdownProps } from "./dropdown/dropdownProps";

// Footer
export { Footer } from "./footer/footer";
export type { FooterProps } from "./footer/footerProps";

// Label
export { Label } from "./label/label";
export type { LabelProps } from "./label/labelProps";

// Navbar
export { Navbar } from "./navbar/navbar";
export type { NavbarProps } from "./navbar/navbarProps";

// Constants
export {
	TOP,
	BOTTOM,
	LEFT,
	RIGHT,
	CENTER,
	CENTER_LEFT,
	CENTER_RIGHT,
	TOP_CENTER,
	TOP_LEFT,
	TOP_RIGHT,
	BOTTOM_CENTER,
	BOTTOM_LEFT,
	BOTTOM_RIGHT,
	INSIDE,
	OUTSIDE
} from "./constants/positions";

// Layouts
export { NAVIGATION, PAGINATION, TABLE } from "./constants/layouts";

// Variants
export { DEFAULT, PILLS, UNDERLINE } from "./constants/variants";

// Animations
export {
	DURATION_150,
	DURATION_300,
	DURATION_500,
	DURATION_1000,
	ANIMATION_OFF
} from "./constants/animations";

// Triggers
export { HOVER, CLICK } from "./constants/triggers";

// Configuration
export { TailwindConfig } from "./config/tailwindConfig";
