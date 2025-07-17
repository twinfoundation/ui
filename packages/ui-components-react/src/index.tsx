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

// Dropdown2
export { Dropdown2 } from "./dropdown-2/dropdown-2";

// Footer2
export { Footer as Footer2 } from "./footer-2/footer-2";

// Label2
export { Label as Label2 } from "./label-2/label-2";

// Navbar2
export { Navbar as Navbar2 } from "./navbar-2/navbar-2";

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
