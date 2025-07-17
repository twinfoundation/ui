// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.

import type { ExtendedRefs, Placement } from "@floating-ui/react";
import {
	FloatingFocusManager,
	FloatingList,
	useListNavigation,
	useTypeahead
} from "@floating-ui/react";

// Custom type definition to replace Flowbite's FloatingProps
interface FloatingProps {
	placement?: Placement;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	trigger?: "click" | "hover";
}

import React, {
	type SetStateAction,
	type HTMLProps,
	type Dispatch,
	useState,
	useRef,
	useEffect,
	useCallback,
	useMemo,
	type ReactNode,
	type ComponentProps,
	type FC,
	memo,
	type JSX,
	type RefObject,
	cloneElement,
	type ReactElement
} from "react";
import * as styles from "./dropdown-2.css";
import { Button2 as Button } from "../button-2/button-2";
import { ButtonProps } from "../button-2/buttonProps";
import { ButtonColor } from "../button-2/buttonColors";
import type { IconsProps } from "../icons";
import { DropdownContext } from "./dropdownContext";
import { DropdownDivider } from "./dropdownDivider";
import { DropdownItem } from "./dropdownItem";
import { useBaseFLoating, useFloatingInteractions } from "../hooks/use-floating";

/**
 * Icon component for chevron down arrow.
 */
const ChevronDown: FC<ComponentProps<"svg">> = props => (
	<svg
		className="h-4 w-4 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
	</svg>
);

/**
 * Icon component for chevron up arrow.
 */
const ChevronUp: FC<ComponentProps<"svg">> = props => (
	<svg
		className="h-4 w-4 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
	</svg>
);

/**
 * Icon component for chevron left arrow.
 */
const ChevronLeft: FC<ComponentProps<"svg">> = props => (
	<svg
		className="h-4 w-4 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
	</svg>
);

/**
 * Icon component for chevron right arrow.
 */
const ChevronRight: FC<ComponentProps<"svg">> = props => (
	<svg
		className="h-4 w-4 transition-transform"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		{...props}
	>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
	</svg>
);

/**
 * Icon mapping for different placements.
 */
const icons: { [key: string]: FC<ComponentProps<"svg">> } = {
	top: ChevronUp,
	right: ChevronRight,
	bottom: ChevronDown,
	left: ChevronLeft
};

/**
 * Props for DropdownHeader component.
 */
export interface DropdownHeaderProps extends ComponentProps<"div"> {
	/**
	 * Header content.
	 */
	children?: ReactNode;
}

/**
 * Dropdown header component.
 */
export const DropdownHeader: FC<DropdownHeaderProps> = ({ children, className = "", ...props }) => (
	<>
		<div
			className={`border-b border-gray-200 px-3 py-2 text-sm font-medium text-gray-900 ${className}`}
			{...props}
		>
			{children}
		</div>
	</>
);

DropdownHeader.displayName = "DropdownHeader";

/**
 * Props for main Dropdown component.
 */
interface DropdownProps
	extends Pick<FloatingProps, "placement" | "trigger">,
		Omit<ButtonProps, "onClick" | "onToggle" | "size"> {
	/**
	 * Whether to show arrow icon.
	 */
	arrowIcon?: boolean;
	/**
	 * Whether clicking an item dismisses the dropdown.
	 */
	dismissOnClick?: boolean;

	/**
	 *
	 */
	floatingArrow?: boolean;

	/**
	 * Whether to display inline.
	 */
	inline?: boolean;

	/**
	 * Label text for the trigger.
	 */
	label?: ReactNode;

	/**
	 *
	 */
	enableTypeAhead?: boolean;

	/**
	 * Custom trigger element for the dropdown.
	 */
	renderTrigger?: () => ReactElement;

	/**
	 *
	 */
	"data-testid"?: string;
}

/**
 * Main dropdown component with advanced features.
 */
const DropdownComponent: FC<DropdownProps> = props => {
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [buttonWidth, setButtonWidth] = useState<number>();
	const elementsRef = useRef<(HTMLElement | null)[]>([]);
	const labelsRef = useRef<(string | null)[]>([]);

	const {
		children,
		className = "",
		arrowIcon = true,
		dismissOnClick = true,
		enableTypeAhead = true,
		renderTrigger,
		trigger = "click",
		inline = false,
		label,
		...buttonProps
	} = props;

	const { placement = props.inline ? "bottom-start" : "bottom" } = props;

	const dataTestId = props["data-testid"] ?? "flowbite-dropdown-target";

	const handleSelect = useCallback((index: number | null) => {
		setSelectedIndex(index);
		setOpen(false);
	}, []);

	const handleTypeaheadMatch = useCallback(
		(index: number | null) => {
			if (open) {
				setActiveIndex(index);
			} else {
				handleSelect(index);
			}
		},
		[open, handleSelect]
	);

	const { context, floatingStyles, refs } = useBaseFLoating<HTMLButtonElement>({
		open,
		setOpen,
		placement
	});

	const listNav = useListNavigation(context, {
		listRef: elementsRef,
		activeIndex,
		selectedIndex,
		onNavigate: setActiveIndex
	});

	const typeahead = useTypeahead(context, {
		listRef: labelsRef,
		activeIndex,
		selectedIndex,
		onMatch: handleTypeaheadMatch,
		enabled: enableTypeAhead
	});

	const { getReferenceProps, getFloatingProps, getItemProps } = useFloatingInteractions({
		context,
		role: "menu",
		trigger,
		interactions: [listNav, typeahead]
	});

	const Icon = useMemo(() => {
		const [p] = placement.split("-");
		return icons[p] ?? ChevronDown;
	}, [placement]);

	return (
		<DropdownContext.Provider
			value={{
				activeIndex,
				dismissOnClick,
				getItemProps,
				handleSelect
			}}
		>
			<Trigger
				{...buttonProps}
				refs={refs}
				inline={inline}
				data-testid={dataTestId}
				className={[styles.target, className].filter(Boolean).join(" ")}
				setButtonWidth={setButtonWidth}
				getReferenceProps={getReferenceProps}
				renderTrigger={renderTrigger}
			>
				{label}
				{arrowIcon && <Icon className={styles.arrowIcon} />}
			</Trigger>
			{open && (
				<FloatingFocusManager context={context} modal={false}>
					<div
						ref={refs.setFloating}
						style={{ ...floatingStyles, minWidth: buttonWidth }}
						data-testid="flowbite-dropdown"
						aria-expanded={open}
						{...getFloatingProps({
							className: [
								styles.floatingBase,
								styles.floatingAnimation,
								styles.duration100,
								!open && styles.floatingHidden,
								styles.floatingStyleAuto,
								className
							]
								.filter(Boolean)
								.join(" ")
						})}
					>
						<FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
							<ul className={styles.content} tabIndex={-1}>
								{children}
							</ul>
						</FloatingList>
					</div>
				</FloatingFocusManager>
			)}
		</DropdownContext.Provider>
	);
};

DropdownComponent.displayName = "Dropdown";

/**
 * Enhanced dropdown component with keyboard navigation, focus management, and accessibility features.
 */
export const Dropdown = Object.assign(DropdownComponent, {
	Item: DropdownItem,
	Header: DropdownHeader,
	Divider: DropdownDivider
});

/**
 *
 */
export interface TriggerProps extends Omit<ButtonProps, "theme"> {
	/**
	 *
	 */
	refs: ExtendedRefs<HTMLElement>;
	/**
	 *
	 */
	inline?: boolean;
	/**
	 *
	 */
	setButtonWidth?: Dispatch<SetStateAction<number | undefined>>;
	/**
	 *
	 */
	getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => { [key: string]: unknown };
	/**
	 *
	 */
	renderTrigger?: () => ReactElement;
}

const Trigger = ({
	refs,
	children,
	inline,
	disabled,
	setButtonWidth,
	getReferenceProps,
	renderTrigger,
	...buttonProps
}: TriggerProps): JSX.Element => {
	const ref = refs.reference as RefObject<HTMLElement>;
	const a11yProps = getReferenceProps();

	useEffect(() => {
		if (ref.current) {
			setButtonWidth?.(ref.current.clientWidth);
		}
	}, [ref, setButtonWidth]);

	if (renderTrigger) {
		const triggerElement = renderTrigger();
		return cloneElement(triggerElement, {
			ref: refs.setReference,
			disabled,
			...a11yProps,
			// @ts-expect-error FIXME please
			...triggerElement.props
		});
	}

	return inline ? (
		<button
			type="button"
			ref={refs.setReference}
			className={styles.inlineWrapper}
			disabled={disabled}
			{...a11yProps}
		>
			{children}
		</button>
	) : (
		<Button
			{...buttonProps}
			disabled={disabled}
			type="button"
			ref={refs.setReference}
			{...a11yProps}
		>
			{children}
		</Button>
	);
};

/**
 * Interface defining the structure of each item in the dropdown menu.
 */
export interface DropdownItem {
	/**
	 * The text to display for the dropdown item.
	 */
	label?: string;

	/**
	 * Additional CSS classes to apply to the item.
	 */
	className?: string;

	/**
	 * Callback function to execute when the item is clicked.
	 */
	onClick?: () => void;

	/**
	 * Icon component to display alongside the label.
	 */
	icon?: React.FC<IconsProps>;

	/**
	 * Whether this item should render as a divider.
	 */
	divider?: boolean;

	/**
	 * Whether this item should render as a checkbox.
	 */
	checkbox?: boolean;

	/**
	 * The checked state of the checkbox (only applicable if checkbox is true).
	 */
	checked?: boolean;

	/**
	 * Whether this item is disabled.
	 */
	disabled?: boolean;
}

/**
 * Props for the Dropdown component.
 */
export interface Dropdown2Props extends Omit<ButtonProps, "color" | "label"> {
	/**
	 * The position of the dropdown.
	 */
	placement?: "top" | "bottom" | "left" | "right";

	/**
	 * The size of the dropdown button.
	 */
	size?: "sm" | "md" | "lg";

	/**
	 * The title text for the dropdown button.
	 */
	title?: string;

	/**
	 * Optional header content for the dropdown.
	 */
	header?: ReactNode;

	/**
	 * Whether the dropdown should be displayed inline.
	 */
	inline?: boolean;

	/**
	 * The color of the dropdown button.
	 */
	color?: ButtonColor;

	/**
	 * Array of items to display in the dropdown menu.
	 */
	items?: DropdownItem[];

	/**
	 * Icon component to display in the dropdown button.
	 * If not provided, no icon will be shown.
	 */
	icon?: React.FC<IconsProps>;

	/**
	 * Whether this item should only display an icon.
	 */
	iconOnly?: boolean;
}

/**
 * Dropdown component.
 */
export const Dropdown2 = memo(
	({
		title,
		header,
		size = "md",
		placement = "bottom",
		items = [],
		color = "primary",
		iconOnly = false,
		icon,
		...rest
	}: Dropdown2Props): JSX.Element => (
		<Dropdown
			label={title}
			dismissOnClick={false}
			placement={placement}
			{...rest}
			renderTrigger={() => (
				<Button
					size={size}
					color={color}
					buttonText={title}
					rightIcon={icon}
					showRightIcon={!iconOnly && Boolean(icon)}
					iconOnly={iconOnly}
					icon={icon}
					aria-label={`${title} dropdown menu`}
				/>
			)}
		>
			{header && <DropdownHeader>{header}</DropdownHeader>}
			{items.length > 0
				? items.map((item, index) => {
						if (item?.divider) {
							return <DropdownDivider key={`divider-${index}`} />;
						}
						return (
							<DropdownItem
								key={`item-${index}`}
								className={item?.className}
								onClick={item?.onClick}
								icon={item?.icon}
								disabled={item?.disabled ?? false}
							>
								{item?.checkbox ? (
									<div className="flex items-center gap-2">
										<input
											type="checkbox"
											checked={item.checked ?? false}
											disabled={item.disabled ?? false}
											onChange={e => {
												e.preventDefault();
												e.stopPropagation();
												item.onClick?.();
											}}
											className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300 disabled:opacity-50"
											aria-label={item.label ?? ""}
										/>
										{item?.label}
									</div>
								) : (
									item?.label
								)}
							</DropdownItem>
						);
					})
				: null}
		</Dropdown>
	)
);

Dropdown2.displayName = "Dropdown";
