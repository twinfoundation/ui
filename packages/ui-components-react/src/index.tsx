// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

// Re-export components with their related types, constants and utils
// This pattern keeps related exports together and improves discoverability

// Accordion
export { Accordion } from "./accordion/accordion";
export type { AccordionProps } from "./accordion/accordionProps";

// Alert
export { Alert } from "./alert/alert";
export { AlertColors } from "./alert/alertColors";
export type { AlertProps } from "./alert/alertProps";

// Alert2
export { Alert2 } from "./alert-2/alert-2";

// Avatar
export { Avatar } from "./avatar/avatar";
export type { AvatarProps } from "./avatar/avatarProps";

// Avatar2
export { Avatar2 } from "./avatar-2/avatar-2";

// Badge
export { Badge } from "./badge/badge";
export { BadgeColors } from "./badge/badgeColors";
export { BadgeSizes } from "./badge/badgeSizes";
export type { BadgeProps } from "./badge/badgeProps";

// Badge2
export { Badge2 } from "./badge-2/badge-2";

// Banner
export { Banner } from "./banner/banner";
export type { BannerProps } from "./banner/bannerProps";

// Breadcrumb
export { Breadcrumb } from "./breadcrumb/breadcrumb";
export type { BreadcrumbProps } from "./breadcrumb/breadcrumbProps";

// Button
export { Button } from "./button/button";
export { ButtonColors } from "./button/buttonColors";
export { ButtonSizes } from "./button/buttonSizes";
export type { ButtonProps } from "./button/buttonProps";
export type { ButtonSize } from "./button/buttonSizes";

// Button2
export { Button2 } from "./button-2/button-2";

// Card
export { Card } from "./card/card";
export { CardTypes } from "./card/cardTypes";
export type { CardProps } from "./card/cardProps";

// Card2
export { Card2 } from "./card-2/card-2";

// Carousel
export { Carousel } from "./carousel/carousel";
export type { CarouselProps } from "./carousel/carouselProps";

// Checkbox
export { Checkbox } from "./checkbox/checkbox";
export type { CheckboxProps } from "./checkbox/checkboxProps";

// Checkbox2
export { Checkbox2 } from "./checkbox-2/checkbox-2";

// Datepicker
export { Datepicker } from "./datepicker/datepicker";
export { DatepickerDays } from "./datepicker/datepickerDays";
export type { DatepickerProps } from "./datepicker/datepickerProps";

// Drawer
export { Drawer } from "./drawer/drawer";
export { DrawerPositions } from "./drawer/drawerPositions";
export type { DrawerProps } from "./drawer/drawerProps";

// Dropdown
export { Dropdown } from "./dropdown/dropdown";
export { DropdownPositions } from "./dropdown/dropdownPositions";
export { DropdownSizes } from "./dropdown/dropdownSizes";
export type { DropdownSize } from "./dropdown/dropdownSizes";
export type { DropdownProps } from "./dropdown/dropdownProps";

// Dropdown2
export { Dropdown2 } from "./dropdown-2/dropdown-2";

// FileInput
export { FileInput } from "./fileInput/fileInput";
export { FileInputSizes } from "./fileInput/fileInputSizes";
export type { FileInputSize } from "./fileInput/fileInputSizes";
export type { FileInputProps } from "./fileInput/fileInputProps";

// Footer
export { Footer } from "./footer/footer";
export type { FooterProps } from "./footer/footerProps";

// Form
export { Form } from "./form/form";
export type { FormProps } from "./form/formProps";

// Icons - Re-exported from icons for backward compatibility
// export * from "./icons";

// Label
export { Label } from "./label/label";
export type { LabelProps } from "./label/labelProps";

// ListGroup
export { ListGroup } from "./listGroup/listGroup";
export type { ListGroupProps, ListGroupItem } from "./listGroup/listGroupProps";

// Modal
export { Modal } from "./modal/modal";
export { ModalPositions } from "./modal/modalPositions";
export { ModalSizes } from "./modal/modalSizes";
export type { ModalSize } from "./modal/modalSizes";
export type { ModalProps } from "./modal/modalProps";

// Modal2
export { Modal2 } from "./modal-2/modal-2";

// Navbar
export { Navbar } from "./navbar/navbar";
export type { NavbarProps } from "./navbar/navbarProps";

// Pagination
export { Pagination } from "./pagination-2";
export { PaginationLayouts } from "./pagination/paginationLayouts";
export type { Pagination2Props as PaginationProps } from "./pagination-2/paginationProps";

// Popover
export { Popover } from "./popover/popover";
export { PopoverPositions } from "./popover/popoverPositions";
export { PopoverTriggers } from "./popover/popoverTriggers";
export type { PopoverProps } from "./popover/popoverProps";
export type { PopoverPosition } from "./popover/popoverPositions";
export type { PopoverTrigger } from "./popover/popoverTriggers";

// Progress
export { Progress } from "./progress/progress";
export { ProgressPositions } from "./progress/progressPositions";
export { ProgressSizes } from "./progress/progressSizes";
export { ProgressColors } from "./progress/progressColors";
export type { ProgressProps } from "./progress/progressProps";
export type { ProgressPosition } from "./progress/progressPositions";
export type { ProgressSize } from "./progress/progressSizes";
export type { ProgressColor } from "./progress/progressColors";

// Progress2
export { Progress2 } from "./progress-2/progress-2";

// Radio
export { Radio } from "./radio/radio";
export type { RadioProps } from "./radio/radioProps";

// RangeSlider
export { RangeSlider } from "./rangeSlider/rangeSlider";
export { RangeSliderSizes } from "./rangeSlider/rangeSliderSizes";
export type { RangeSliderProps } from "./rangeSlider/rangeSliderProps";
export type { RangeSliderSize } from "./rangeSlider/rangeSliderSizes";

// Select
export { Select } from "./select/select";
export { SelectSizes } from "./select/selectSizes";
export type { SelectProps, SelectOption } from "./select/selectProps";

// Sidebar
export { Sidebar } from "./sidebar/sidebar";
export type {
	SidebarProps,
	SidebarItem,
	SidebarIconType,
	BadgeColor
} from "./sidebar/sidebarProps";

// Spinner
export { Spinner } from "./spinner/spinner";
export { SpinnerSizes } from "./spinner/spinnerSizes";
export type { SpinnerProps } from "./spinner/spinnerProps";

// Spinner2
export { Spinner2 } from "./spinner-2/spinner-2";

// Table
export { Table } from "./table/table";
export type { TableProps } from "./table/tableProps";

// Tabs
export { Tabs } from "./tabs/tabs";
export { TabsVariants } from "./tabs/tabsVariants";
export type { TabsProps, TabItem } from "./tabs/tabsProps";

// Tabs2
export { Tabs2 } from "./tabs-2/tabs-2";

// TextInput
export { TextInput } from "./textInput/textInput";
export { TextInputColors } from "./textInput/textInputColors";
export { TextInputSizes } from "./textInput/textInputSizes";
export type { TextInputProps } from "./textInput/textInputProps";
export type { TextInputColor } from "./textInput/textInputColors";
export type { TextInputSize } from "./textInput/textInputSizes";

// Textarea
export { Textarea } from "./textarea/textarea";
export type { TextareaProps } from "./textarea/textareaProps";

// Textarea2
export { Textarea2 } from "./textarea-2/textarea-2";

// Toast
export { Toast } from "./toast/toast";
export type { ToastProps } from "./toast/toastProps";

// ToggleSwitch
export { ToggleSwitch } from "./toggleSwitch/toggleSwitch";
export { ToggleSwitchColors } from "./toggleSwitch/toggleSwitchColors";
export { ToggleSwitchSizes } from "./toggleSwitch/toggleSwitchSizes";
export type { ToggleSwitchProps } from "./toggleSwitch/toggleSwitchProps";
export type { ToggleSwitchColor } from "./toggleSwitch/toggleSwitchColors";
export type { ToggleSwitchSize } from "./toggleSwitch/toggleSwitchSizes";

// Tooltip
export { Tooltip } from "./tooltip/tooltip";
export { TooltipPlacements } from "./tooltip/tooltipPlacements";
export { TooltipStyles } from "./tooltip/tooltipStyles";
export { TooltipTriggers } from "./tooltip/tooltipTriggers";
export { TooltipAnimations } from "./tooltip/tooltipAnimations";
export type { TooltipProps } from "./tooltip/tooltipProps";
export type { TooltipPlacement } from "./tooltip/tooltipPlacements";

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

// Input2
export { Input2 } from "./input-2/input-2";
