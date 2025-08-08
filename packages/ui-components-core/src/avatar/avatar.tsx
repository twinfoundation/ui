// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Avatar as FlowbiteAvatar } from "flowbite-react";
import { forwardRef, memo, useMemo, type JSX } from "react";
import type { AvatarProps } from "./avatarProps";

/**
 * Avatar component for displaying user profile images.
 * Extends Flowbite's Avatar component with custom styling and theme support.
 */
export const Avatar = memo(
	forwardRef<HTMLDivElement, AvatarProps>(
		(
			{
				children,
				img,
				alt,
				bordered = false,
				size = "md",
				rounded = true,
				status,
				statusPosition = "bottom-right",
				className,
				...rest
			}: AvatarProps,
			ref
		): JSX.Element => {
			const sanitizedAlt = useMemo(() => alt?.replace(/[<>]/g, ""), [alt]);
			const sanitizedImg = useMemo(() => {
				if (!img) {
					return;
				}
				try {
					const url = new URL(img);
					return url.toString();
				} catch {
					// If URL is invalid, return undefined to let the component handle it
				}
			}, [img]);

			const composedClassName = useMemo(
				() => [className, "avatar-component"].filter(Boolean).join(" "),
				[className]
			);

			return (
				<FlowbiteAvatar
					ref={ref}
					img={sanitizedImg}
					alt={sanitizedAlt}
					bordered={bordered}
					size={size}
					rounded={rounded}
					status={status}
					statusPosition={statusPosition}
					className={composedClassName}
					{...rest}
				>
					{children}
				</FlowbiteAvatar>
			);
		}
	)
);

Avatar.displayName = "Avatar";
