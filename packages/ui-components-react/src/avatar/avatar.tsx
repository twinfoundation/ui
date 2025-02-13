// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Avatar as FlowbiteAvatar } from "flowbite-react";
import { forwardRef } from "react";
import type { AvatarProps } from "./avatarProps";

/**
 * Avatar component for displaying user profile images.
 * Extends Flowbite's Avatar component with custom styling and theme support.
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
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
		},
		ref
	) => (
		<FlowbiteAvatar
			ref={ref}
			img={img}
			alt={alt}
			bordered={bordered}
			size={size}
			rounded={rounded}
			status={status}
			statusPosition={statusPosition}
			className={className}
			{...rest}
		>
			{children}
		</FlowbiteAvatar>
	)
);
