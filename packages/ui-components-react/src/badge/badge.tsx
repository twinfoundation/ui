// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Badge as FlowbiteBadge } from "flowbite-react";
import { type ReactNode, useCallback, useMemo, memo } from "react";
import type { ColorClasses } from "./badgeColors";
import { BadgeColors } from "./badgeColors";
import type { BadgeProps } from "./badgeProps";

const colorClasses: ColorClasses = {
	gray: "border-current bg-neutral-200 text-primary dark:bg-gray-700 dark:text-gray-300",
	failure: "border-current bg-surface-error text-error dark:bg-red-200 dark:text-red-800",
	warning: "border-current bg-surface-warning dark:bg-system-warning-tints-50 text-warning",
	success:
		"border-current bg-surface-success text-success dark:bg-system-success-tints-200 dark:text-system-success-tints-800",
	info: "border-transparent bg-surface-information text-information"
} as const;

export const Badge = memo(
	({
		children,
		dismiss,
		onlyIcon,
		className,
		color = BadgeColors.Info,
		size = "xs",
		icon,
		...rest
	}: BadgeProps): ReactNode => {
		const badgeId = useMemo(() => `badge-${Math.random().toString(36).slice(2, 11)}`, []);

		const handleDismiss = useCallback(() => {
			const element = document.querySelector(`#${badgeId}`);
			if (element) {
				element.remove();
			}
		}, [badgeId]);

		const badgeClassName = useMemo(
			() =>
				`${colorClasses[color as keyof ColorClasses]} ${className ?? ""} ${onlyIcon ? "rounded-full" : "rounded-md"} ${
					onlyIcon
						? "flex aspect-square !h-8 items-center justify-center gap-0 [&>span:empty]:hidden [&>svg]:!h-5 [&>svg]:!w-5"
						: "px-4 py-1"
				}`,
			[color, className, onlyIcon]
		);

		return (
			<div className="flex flex-wrap gap-2">
				<FlowbiteBadge
					id={badgeId}
					className={badgeClassName}
					color={color as keyof ColorClasses}
					size={size}
					icon={typeof icon === "function" ? icon : undefined}
					{...rest}
				>
					{!onlyIcon && <span className={`font-medium ${icon ? "" : ""}`}>{children}</span>}
					{dismiss && (
						<button
							type="button"
							className={`ms-2 inline-flex items-center bg-transparent align-middle ${size}`}
							onClick={handleDismiss}
							aria-label="Remove"
						>
							<svg
								className="h-3 w-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 14"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
								/>
							</svg>
							<span className="sr-only">Remove badge</span>
						</button>
					)}
				</FlowbiteBadge>
			</div>
		);
	}
);

Badge.displayName = "Badge";
