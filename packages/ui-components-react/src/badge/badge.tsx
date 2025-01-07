// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Badge as FlowbiteBadge } from "flowbite-react";
import React, { type ReactNode } from "react";
import { BadgePropTypes, type BadgeProps } from "./badgeProps";

const colorClasses = {
	gray: "badge-gray",
	failure: "badge-error",
	warning: "badge-warn",
	success: "badge-success",
	info: "badge-info"
};

/**
 * Badge component.
 */
export class Badge extends React.Component<BadgeProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = BadgePropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: BadgeProps;

	/**
	 * Create a new instance of Badge.
	 * @param props The props of the component.
	 */
	constructor(props: BadgeProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { children, dismiss, onlyIcon, ...rest } = this._props;
		const badgeId = `badge-${Math.random().toString(36).slice(2, 11)}`;
		return (
			<div className="flex flex-wrap gap-2">
				<FlowbiteBadge
					id={badgeId}
					className={`${colorClasses[this._props.color ?? "info"]} ${this._props.className ?? ""} ${!onlyIcon ? "px-4 py-1" : ""}`}
					color={rest.color || "info"}
					size={rest.size || ""}
					icon={typeof rest.icon === "function" ? rest.icon : undefined}
				>
					{!onlyIcon && children}
					{dismiss && (
						<button
							type="button"
							className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm"
							onClick={() => document.querySelector(`#${badgeId}`)?.remove()}
							aria-label="Remove"
						>
							<svg
								className="h-2 w-2"
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
}
