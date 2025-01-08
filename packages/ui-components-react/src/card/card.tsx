// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Card as FlowbiteCard,
	Button as FlowbiteButton,
	Dropdown as FlowbiteDropdown
} from "flowbite-react";
import React, { type ReactNode } from "react";
import { CardPropTypes, type CardProps } from "./cardProps";

const colorClasses = {
	primary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button hover:enabled:bg-surface-button-hover focus:ring-surface-button-pressed",
	secondary:
		"focus:ring text-invert border-2 border-transparent bg-surface-button-alt hover:enabled:bg-surface-button-alt-hover focus:ring-surface-button-alt-pressed",
	error:
		"focus:ring text-invert border-2 border-transparent bg-error hover:enabled:bg-system-error-tints-600 focus:ring-system-error-tints-200",
	warning:
		"focus:ring text-invert border-2 border-transparent bg-warning hover:enabled:bg-system-warning-tints-600 focus:ring-system-warning-tints-200",
	success:
		"focus:ring text-invert border-2 border-transparent bg-success hover:enabled:bg-system-success-tints-600 focus:ring-system-success-tints-200",
	info: "focus:ring text-invert border-2 border-transparent bg-information hover:enabled:bg-system-information-tints-600 focus:ring-system-information-tints-200",
	plain:
		"focus:ring text-primary border-2 border-transparent bg-surface-second hover:enabled:bg-surface-third focus:ring-surface-button-pressed dark:text-invert dark:bg-surface-third-dark dark:hover:enabled:bg-surface-second-dark dark:focus:ring-surface-button-pressed"
};

/**
 * Card component.
 */
export class Card extends React.Component<CardProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = CardPropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: CardProps;

	/**
	 * Create a new instance of Card.
	 * @param props The props of the component.
	 */
	constructor(props: CardProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { type } = this._props;
		switch (type) {
			case "default":
				return this.renderDefault(this._props);
			case "profile":
				return this.renderProfile(this._props);
			case "e-commerce":
				return this.renderECommerce(this._props);
			default:
				return this.renderDefault(this._props);
		}
	}

	/**
	 * Render the default card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderDefault(props: CardProps): ReactNode {
		const { children, content, href, horizontal, button, image } = props;

		return (
			<FlowbiteCard
				href={href ?? "#"}
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				{children && (
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{children}
					</h5>
				)}
				{content && <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>}
				{button && (
					<FlowbiteButton
						href={button.href ?? "#"}
						className={`${colorClasses[button.color ?? "secondary"]}`}
					>
						{button.label}
						{button.icon && typeof button.icon === "function" && (
							<div className="px-1 py-1">{button.icon()}</div>
						)}
					</FlowbiteButton>
				)}
			</FlowbiteCard>
		);
	}

	/**
	 * Render the profile card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderProfile(props: CardProps): ReactNode {
		const { profile } = props;

		return (
			<FlowbiteCard className="max-w-sm">
				<div className="flex justify-end px-4 pt-4">
					<FlowbiteDropdown inline label="">
						{profile?.actions && profile?.actions?.length > 0 ? (
							profile?.actions.map(action => (
								<FlowbiteDropdown.Item>
									<a
										href={action?.href ?? "#"}
										className={`block px-4 py-2 text-sm text-${action?.color || "gray"}-700 hover:bg-${action?.color || "gray"}-100 dark:text-${action?.color || "gray"}-200 dark:hover:bg-${action?.color || "gray"}-600 dark:hover:text-white`}
									>
										{action?.label}
										{action?.icon && typeof action?.icon === "function" && (
											<div className="px-1 py-1">{action?.icon()}</div>
										)}
									</a>
								</FlowbiteDropdown.Item>
							))
						) : (
							<></>
						)}
					</FlowbiteDropdown>
				</div>
				<div className="flex flex-col items-center pb-10">
					{profile?.image && (
						<img
							alt={profile.image.alt ?? ""}
							src={profile.image.src ?? ""}
							height={profile.image.height ?? "96"}
							width={profile.image.width ?? "96"}
							className="mb-3 rounded-full shadow-lg"
						/>
					)}
					<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
						{profile?.name}
					</h5>
					{profile?.position && (
						<span className="text-sm text-gray-500 dark:text-gray-400">{profile?.position}</span>
					)}
					<div className="mt-4 flex space-x-3 lg:mt-6">
						{profile?.buttons && profile?.buttons?.length > 0 ? (
							profile?.buttons.map(button => (
								<FlowbiteButton
									href={button?.href ?? "#"}
									className={`${colorClasses[button?.color ?? "secondary"]}`}
								>
									{button?.label}
									{button?.icon && typeof button?.icon === "function" && (
										<div className="px-1 py-1">{button?.icon()}</div>
									)}
								</FlowbiteButton>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</FlowbiteCard>
		);
	}

	/**
	 * Render the form card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderECommerce(props: CardProps): ReactNode {
		const { children, image, eCommerce } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<a href="#">
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{children}
					</h5>
				</a>
				<div className="mb-5 mt-2.5 flex items-center">
					{eCommerce?.stars && eCommerce?.stars > 0 ? (
						Array.from({ length: eCommerce?.stars }, (_, index) => (
							<svg
								className="h-5 w-5 text-yellow-300"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))
					) : (
						<></>
					)}
					<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
						{eCommerce?.stars}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{eCommerce?.price}
					</span>
					{eCommerce?.buttons && eCommerce?.buttons?.length > 0 ? (
						eCommerce?.buttons.map(button => (
							<FlowbiteButton
								href={button?.href ?? "#"}
								className={`${colorClasses[button?.color ?? "secondary"]}`}
							>
								{button?.label}
								{button?.icon && typeof button?.icon === "function" && (
									<div className="px-1 py-1">{button?.icon()}</div>
								)}
							</FlowbiteButton>
						))
					) : (
						<></>
					)}
				</div>
			</FlowbiteCard>
		);
	}
}
