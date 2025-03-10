// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

// Export all components individually to enable tree-shaking
export { Accordion } from "./accordion/accordion";
export type { AccordionProps } from "./accordion/accordionProps";

export { Alert } from "./alert/alert";
export { AlertColors } from "./alert/alertColors";
export type { AlertProps } from "./alert/alertProps";

export { Avatar } from "./avatar/avatar";
export type { AvatarProps } from "./avatar/avatarProps";

export { Badge } from "./badge/badge";
export { BadgeColors } from "./badge/badgeColors";
export { BadgeSizes } from "./badge/badgeSizes";
export type { BadgeProps } from "./badge/badgeProps";

export { Banner } from "./banner/banner";
export type { BannerProps } from "./banner/bannerProps";

export { Breadcrumb } from "./breadcrumb/breadcrumb";
export type { BreadcrumbProps } from "./breadcrumb/breadcrumbProps";

export { Button } from "./button/button";
export type { ButtonProps } from "./button/buttonProps";
export { ButtonColors } from "./button/buttonColors";
export { ButtonSizes } from "./button/buttonSizes";
export type { ButtonSize } from "./button/buttonSizes";

export { Card } from "./card/card";
export type { CardProps } from "./card/cardProps";

export { Carousel } from "./carousel/carousel";
export type { CarouselProps } from "./carousel/carouselProps";

export { Checkbox } from "./checkbox/checkbox";
export type { CheckboxProps } from "./checkbox/checkboxProps";

export { Datepicker } from "./datepicker/datepicker";
export type { DatepickerProps } from "./datepicker/datepickerProps";

export { Drawer } from "./drawer/drawer";
export type { DrawerProps } from "./drawer/drawerProps";

export { Dropdown } from "./dropdown/dropdown";
export type { DropdownProps } from "./dropdown/dropdownProps";

export { FileInput } from "./fileInput/fileInput";
export type { FileInputProps } from "./fileInput/fileInputProps";

export { Footer } from "./footer/footer";
export type { FooterProps } from "./footer/footerProps";

export { Form } from "./form/form";
export type { FormProps } from "./form/formProps";

export { Label } from "./label/label";
export type { LabelProps } from "./label/labelProps";

export { ListGroup } from "./listGroup/listGroup";
export type { ListGroupProps, ListGroupItem } from "./listGroup/listGroupProps";

export { Modal } from "./modal/modal";
export type { ModalProps } from "./modal/modalProps";

export { Navbar } from "./navbar/navbar";
export type { NavbarProps } from "./navbar/navbarProps";

export { Pagination } from "./pagination/pagination";
export type { PaginationProps } from "./pagination/paginationProps";

export { Popover } from "./popover/popover";
export type { PopoverProps } from "./popover/popoverProps";

export { Progress } from "./progress/progress";
export type { ProgressProps } from "./progress/progressProps";

export { Radio } from "./radio/radio";
export type { RadioProps } from "./radio/radioProps";

export { RangeSlider } from "./rangeSlider/rangeSlider";
export type { RangeSliderProps } from "./rangeSlider/rangeSliderProps";

export { Select } from "./select/select";
export type { SelectProps } from "./select/selectProps";

export { Sidebar } from "./sidebar/sidebar";
export type {
	SidebarProps,
	SidebarItem,
	SidebarIconType,
	BadgeColor
} from "./sidebar/sidebarProps";

export { Spinner } from "./spinner/spinner";
export type { SpinnerProps } from "./spinner/spinnerProps";

export { Table } from "./table/table";
export type { TableProps } from "./table/tableProps";

export { Tabs } from "./tabs/tabs";
export type { TabsProps } from "./tabs/tabsProps";

export { TextInput } from "./textInput/textInput";
export type { TextInputProps } from "./textInput/textInputProps";

export { Textarea } from "./textarea/textarea";
export type { TextareaProps } from "./textarea/textareaProps";

export { Toast } from "./toast/toast";
export type { ToastProps } from "./toast/toastProps";

export { ToggleSwitch } from "./toggleSwitch/toggleSwitch";
export type { ToggleSwitchProps } from "./toggleSwitch/toggleSwitchProps";

export { Tooltip } from "./tooltip/tooltip";
export type { TooltipProps } from "./tooltip/tooltipProps";

// Export centralized constants
// Positions
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

// Colors
export {
	INFO,
	ERROR,
	WARNING,
	SUCCESS,
	GRAY,
	PRIMARY,
	SECONDARY,
	PLAIN,
	DARK,
	FAILURE,
	ORANGE,
	GREEN,
	PURPLE,
	YELLOW,
	PINK,
	INDIGO
} from "./constants/colors";

// Sizes
export { EXTRA_SMALL, SMALL, MEDIUM, LARGE, EXTRA_LARGE } from "./constants/sizes";

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

// Export individual components with proper paths
export { CardTypes } from "./card/cardTypes";
export { DatepickerDays } from "./datepicker/datepickerDays";
export { DrawerPositions } from "./drawer/drawerPositions";
export { DropdownPositions } from "./dropdown/dropdownPositions";
export { DropdownSizes, DropdownSize } from "./dropdown/dropdownSizes";
export { FileInputSizes, FileInputSize } from "./fileInput/fileInputSizes";
export { ModalPositions } from "./modal/modalPositions";
export { ModalSizes, ModalSize } from "./modal/modalSizes";
export { PaginationLayouts } from "./pagination/paginationLayouts";
export { PopoverPositions, PopoverPosition } from "./popover/popoverPositions";
export { PopoverTriggers, PopoverTrigger } from "./popover/popoverTriggers";
export { ProgressPositions, ProgressPosition } from "./progress/progressPositions";
export { ProgressSizes, ProgressSize } from "./progress/progressSizes";
export { ProgressColors, ProgressColor } from "./progress/progressColors";
export { RangeSliderSizes, RangeSliderSize } from "./rangeSlider/rangeSliderSizes";
export { SelectSizes } from "./select/selectSizes";
export { SpinnerSizes } from "./spinner/spinnerSizes";
export { TabsVariants } from "./tabs/tabsVariants";
export { TextInputColors, TextInputColor } from "./textInput/textInputColors";
export { TextInputSizes, TextInputSize } from "./textInput/textInputSizes";
export { ToggleSwitchColors, ToggleSwitchColor } from "./toggleSwitch/toggleSwitchColors";
export { ToggleSwitchSizes, ToggleSwitchSize } from "./toggleSwitch/toggleSwitchSizes";
export { TooltipPlacements, TooltipPlacement } from "./tooltip/tooltipPlacements";
export { TooltipStyles } from "./tooltip/tooltipStyles";
export { TooltipTriggers } from "./tooltip/tooltipTriggers";
export { TooltipAnimations } from "./tooltip/tooltipAnimations";

export { TailwindConfig } from "./config/tailwindConfig";
