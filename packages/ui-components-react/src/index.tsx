// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

// Re-export components with their related types, constants and utils
// This pattern keeps related exports together and improves discoverability

// Accordion
export { Accordion } from "./accordion/accordion";
export type { AccordionProps } from "./accordion/accordionProps";

// Avatar
export { Avatar } from "./avatar/avatar";
export type { AvatarProps } from "./avatar/avatarProps";

// Avatar2
export { Avatar2 } from "./avatar-2/avatar-2";

// Button
export { Button } from "./button/button";
export { ButtonColors } from "./button/buttonColors";
export { ButtonSizes } from "./button/buttonSizes";
export type { ButtonProps } from "./button/buttonProps";
export type { ButtonSize } from "./button/buttonSizes";

// Button2
export { Button2 } from "./button-2/button-2";

// Dropdown
export { Dropdown } from "./dropdown/dropdown";
export { DropdownPositions } from "./dropdown/dropdownPositions";
export { DropdownSizes } from "./dropdown/dropdownSizes";
export type { DropdownSize } from "./dropdown/dropdownSizes";
export type { DropdownProps } from "./dropdown/dropdownProps";

// Dropdown2
export { Dropdown2 } from "./dropdown-2/dropdown-2";

// Footer
export { Footer } from "./footer/footer";
export type { FooterProps } from "./footer/footerProps";

// Icons - Re-exported from icons for backward compatibility
// export * from "./icons";

// Label
export { Label } from "./label/label";
export type { LabelProps } from "./label/labelProps";

// Navbar
export { Navbar } from "./navbar/navbar";
export type { NavbarProps } from "./navbar/navbarProps";

// Textarea
export { Textarea } from "./textarea/textarea";
export type { TextareaProps } from "./textarea/textareaProps";

// Textarea2
export { Textarea2 } from "./textarea-2/textarea-2";

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
