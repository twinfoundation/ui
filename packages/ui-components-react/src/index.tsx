// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

// Re-export components with their related types, constants and utils
// This pattern keeps related exports together and improves discoverability

// Accordion2
export { Accordion as Accordion2 } from "./accordion-2/accordion-2";

// Avatar2
export { Avatar2 } from "./avatar-2/avatar-2";

// Button2
export { Button2 } from "./button-2/button-2";
export { ButtonColors } from "./button-2/buttonColors";
export { ButtonSizes } from "./button-2/buttonSizes";
export type { ButtonProps } from "./button-2/buttonProps";

// Dropdown2
export { Dropdown2 } from "./dropdown-2/dropdown-2";

// Footer2
export { Footer as Footer2 } from "./footer-2/footer-2";

// Label2
export { Label as Label2 } from "./label-2/label-2";

// Navbar2
export { Navbar as Navbar2 } from "./navbar-2/navbar-2";
export type { NavbarProps, NavbarBrand, NavbarLink, ProfileInfo, ProfileLink, NavbarVariant } from "./navbar-2/navbar-2";

// Textarea2
export { Textarea2 } from "./textarea-2/textarea-2";

// Re-export types
export * from "./types/iconTypes";

// Constants
export { ANIMATION_OFF, DURATION_1000, DURATION_150, DURATION_300, DURATION_500 } from "./constants/animations";
export { BOTTOM, BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, CENTER, CENTER_LEFT, CENTER_RIGHT, TOP, TOP_CENTER, TOP_LEFT, TOP_RIGHT } from "./constants/positions";
export { CLICK, HOVER } from "./constants/triggers";
export { DEFAULT } from "./constants/variants";

// Icons
export * from "./icons";
