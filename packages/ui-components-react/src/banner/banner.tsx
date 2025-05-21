// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Banner as FlowbiteBanner } from "flowbite-react";
import { X } from "../icons/x";
import { memo, type JSX } from "react";
import type { BannerProps } from "./bannerProps";

/**
 * Banner component.
 */
export const Banner = memo(({ children, bottom = false }: BannerProps): JSX.Element => {
	const bannerClassName = `fixed ${bottom ? "bottom-0" : "top-0"} left-0 z-50 flex w-full justify-between border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 ${bottom ? "border-t" : "border-b"}`;

	return (
		<FlowbiteBanner>
			<div className={bannerClassName}>
				{children}
				<FlowbiteBanner.CollapseButton
					color="gray"
					className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
				>
					<X width={16} height={16} />
				</FlowbiteBanner.CollapseButton>
			</div>
		</FlowbiteBanner>
	);
});

Banner.displayName = "Banner";
