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

// Avatar
export { Avatar } from "./avatar/avatar";
export type { AvatarProps } from "./avatar/avatarProps";

// Badge
export { Badge } from "./badge/badge";
export { BadgeColors } from "./badge/badgeColors";
export { BadgeSizes } from "./badge/badgeSizes";
export type { BadgeProps } from "./badge/badgeProps";

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

// Card
export { Card } from "./card/card";
export { CardTypes } from "./card/cardTypes";
export type { CardProps } from "./card/cardProps";

// Carousel
export { Carousel } from "./carousel/carousel";
export type { CarouselProps } from "./carousel/carouselProps";

// Checkbox
export { Checkbox } from "./checkbox/checkbox";
export type { CheckboxProps } from "./checkbox/checkboxProps";

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
export { DropdownSizes, DropdownSize } from "./dropdown/dropdownSizes";
export type { DropdownProps } from "./dropdown/dropdownProps";

// FileInput
export { FileInput } from "./fileInput/fileInput";
export { FileInputSizes, FileInputSize } from "./fileInput/fileInputSizes";
export type { FileInputProps } from "./fileInput/fileInputProps";

// Footer
export { Footer } from "./footer/footer";
export type { FooterProps } from "./footer/footerProps";

// Form
export { Form } from "./form/form";
export type { FormProps } from "./form/formProps";

// Label
export { Label } from "./label/label";
export type { LabelProps } from "./label/labelProps";

// ListGroup
export { ListGroup } from "./listGroup/listGroup";
export type { ListGroupProps, ListGroupItem } from "./listGroup/listGroupProps";

// Modal
export { Modal } from "./modal/modal";
export { ModalPositions } from "./modal/modalPositions";
export { ModalSizes, ModalSize } from "./modal/modalSizes";
export type { ModalProps } from "./modal/modalProps";

// Navbar
export { Navbar } from "./navbar/navbar";
export type { NavbarProps } from "./navbar/navbarProps";

// Pagination
export { Pagination } from "./pagination/pagination";
export { PaginationLayouts } from "./pagination/paginationLayouts";
export type { PaginationProps } from "./pagination/paginationProps";

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

// Table
export { Table } from "./table/table";
export type { TableProps } from "./table/tableProps";

// Tabs
export { Tabs } from "./tabs/tabs";
export { TabsVariants } from "./tabs/tabsVariants";
export type { TabsProps, TabItem } from "./tabs/tabsProps";

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
