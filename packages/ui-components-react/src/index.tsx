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
export type { ListGroupProps } from "./listGroup/listGroupProps";

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
export type { SidebarProps } from "./sidebar/sidebarProps";

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

// Icons should be imported lazily by consumers
export * as IconsOutline from "./icons/iconsOutline";
export * as IconsSolid from "./icons/iconsSolid";

// Export individual components with proper paths
export * from "./card/cardTypes";
export * from "./datepicker/datepickerDays";
export * from "./drawer/drawerPositions";
export * from "./dropdown/dropdownPositions";
export * from "./dropdown/dropdownSizes";
export * from "./fileInput/fileInputSizes";
export * from "./modal/modalPositions";
export * from "./modal/modalSizes";
export * from "./pagination/paginationLayouts";
export * from "./popover/popoverPositions";
export * from "./popover/popoverTriggers";
export * from "./progress/progressPositions";
export * from "./progress/progressSizes";
export * from "./progress/progressColors";
export * from "./rangeSlider/rangeSliderSizes";
export * from "./select/selectSizes";
export * from "./spinner/spinnerSizes";
export * from "./tabs/tabsVariants";
export * from "./textInput/textInputColors";
export * from "./textInput/textInputSizes";
export * from "./toggleSwitch/toggleSwitchColors";
export * from "./toggleSwitch/toggleSwitchSizes";
export * from "./tooltip/tooltipAnimations";
export * from "./tooltip/tooltipPlacements";
export * from "./tooltip/tooltipStyles";
export * from "./tooltip/tooltipTriggers";

export { TailwindConfig } from "./config/tailwindConfig";
