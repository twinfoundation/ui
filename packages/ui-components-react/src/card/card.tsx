// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Card as FlowbiteCard } from "flowbite-react";
import { useMemo, memo, type JSX } from "react";
import type { CardProps } from "./cardProps";
import { Badge } from "../badge/badge";
import { Button } from "../button/button";

const iconSizes = {
	sm: "h-4 w-4",
	md: "h-5 w-5",
	lg: "h-6 w-6",
	xl: "h-7 w-7"
} as const;

/**
 * Card component.
 */
export const Card = memo(
	({
		children,
		title,
		content,
		href,
		horizontal,
		buttons,
		image,
		icon,
		badge,
		badgePosition = "top-right",
		iconPosition = "top"
	}: CardProps): JSX.Element => {
		const renderButtons = useMemo(() => {
			if (!buttons?.length) {
				return null;
			}

			return (
				<div className="flex flex-wrap gap-2">
					{buttons.map((button, index) => {
						const { label, ...buttonProps } = button;

						return (
							<Button
								key={`${label}-${index}`}
								buttonText={label}
								showButtonText={true}
								{...buttonProps}
							/>
						);
					})}
				</div>
			);
		}, [buttons]);

		const renderIcon = useMemo(() => {
			if (!icon?.component) {
				return null;
			}

			const IconComponent = icon.component;
			const iconSize = icon.size ? iconSizes[icon.size] : iconSizes.md;

			return <IconComponent className={`${iconSize} ${icon.className ?? ""}`} />;
		}, [icon]);

		const renderBadge = useMemo(() => {
			if (!badge) {
				return null;
			}

			const positionClasses = {
				"top-right": "absolute right-2 top-2",
				"top-left": "absolute left-2 top-2",
				"bottom-right": "absolute right-2 bottom-2",
				"bottom-left": "absolute left-2 bottom-2",
				inline: "ml-2"
			};

			// Only apply positioning class if not inline
			const badgeClasses =
				badgePosition === "inline"
					? positionClasses.inline
					: positionClasses[badgePosition] || positionClasses["top-right"];

			return (
				<div className={badgeClasses}>
					<Badge {...badge} />
				</div>
			);
		}, [badge, badgePosition]);

		// Render title with optional icon and badge
		const renderTitleContent = useMemo(() => {
			if (!title && !children) {
				return null;
			}

			const titleContent = title ?? children;

			return (
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{titleContent}
					{badgePosition === "inline" && renderBadge}
				</h5>
			);
		}, [title, children, badgePosition, renderBadge]);

		// Render the title section, potentially with icon
		const renderTitleSection = useMemo(() => {
			if (iconPosition === "left" && renderIcon) {
				return (
					<div className="mb-2 flex items-center gap-2">
						{renderIcon}
						{renderTitleContent}
					</div>
				);
			}

			return renderTitleContent;
		}, [renderTitleContent, renderIcon, iconPosition]);

		// Render the icon with absolute positioning if needed
		const renderPositionedIcon = useMemo(() => {
			if (!renderIcon) {
				return null;
			}

			if (iconPosition === "top") {
				// Using relative positioning for top to maintain document flow
				return <div className="mb-2">{renderIcon}</div>;
			} else if (iconPosition === "top-absolute") {
				// Absolute positioning for top icon
				return <div className="absolute left-2 top-2">{renderIcon}</div>;
			}

			return null;
		}, [renderIcon, iconPosition]);

		return (
			<FlowbiteCard
				href={href}
				className="relative max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc}
				imgAlt={image?.imgAlt}
			>
				{badgePosition !== "inline" && renderBadge}
				{(iconPosition === "top" || iconPosition === "top-absolute") && renderPositionedIcon}
				{renderTitleSection}
				{content && <div className="font-normal text-gray-700 dark:text-gray-400">{content}</div>}
				{renderButtons}
			</FlowbiteCard>
		);
	}
);

Card.displayName = "Card";
