// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import {
	Card as FlowbiteCard,
	Button as FlowbiteButton,
	Dropdown as FlowbiteDropdown,
	Checkbox as FlowbiteCheckbox,
	Label as FlowbiteLabel,
	TextInput as FlowbiteTextInput
} from "flowbite-react";
import React, { type ReactNode } from "react";
import { CardPropTypes, type CardProps } from "./cardProps";

const BASE_CLASSES = "border-2 border-transparent focus:outline-none focus:ring-2";

const colorClasses = {
	primary: `${BASE_CLASSES} 
		bg-button-primary-background-default 
		hover:enabled:bg-button-primary-background-hover 
		active:bg-button-primary-background-pressed 
		disabled:bg-button-primary-background-disabled
		text-button-primary-text-default
		disabled:text-button-primary-text-disabled`,
	secondary: `${BASE_CLASSES} 
		bg-button-secondary-background-default 
		hover:enabled:bg-button-secondary-background-hover 
		active:bg-button-secondary-background-pressed 
		disabled:bg-button-secondary-background-disabled
		text-button-secondary-text-default
		disabled:text-button-secondary-text-disabled`,
	ghost: `${BASE_CLASSES} 
		bg-button-ghost-background-default 
		hover:enabled:bg-button-ghost-background-hover 
		active:bg-button-ghost-background-pressed 
		disabled:bg-button-ghost-background-disabled
		text-button-ghost-text-default
		disabled:text-button-ghost-text-disabled`,
	error: `${BASE_CLASSES} 
		bg-status-error 
		hover:enabled:bg-error-600
		active:bg-error-400 
		text-neutral-50`,
	warning: `${BASE_CLASSES} 
		bg-status-warning 
		hover:enabled:bg-warning-600
		active:bg-warning-400 
		text-neutral-50`,
	success: `${BASE_CLASSES} 
		bg-status-success 
		hover:enabled:bg-success-600
		active:bg-success-400 
		text-neutral-50`,
	info: `${BASE_CLASSES} 
		bg-status-info 
		hover:enabled:bg-information-600
		active:bg-information-400 
		text-neutral-50`
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
			case "cta":
				return this.renderCTA(this._props);
			case "list":
				return this.renderList(this._props);
			case "pricing":
				return this.renderPricing(this._props);
			case "crypto":
				return this.renderCrypto(this._props);
			case "form":
				return this.renderForm(this._props);
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
		const { children, content, href, horizontal, buttons, image } = props;

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

				{buttons && buttons?.length > 0 ? (
					<div className="mt-4 flex space-x-3 lg:mt-6">
						{buttons.map(button => (
							<FlowbiteButton
								href={button?.href ?? "#"}
								className={`w-full ${colorClasses[button?.color as keyof typeof colorClasses] ?? colorClasses.secondary}`}
							>
								{button?.label}
								{button?.icon && typeof button?.icon === "function" && (
									<div className="px-1 py-1">{button?.icon()}</div>
								)}
							</FlowbiteButton>
						))}
					</div>
				) : (
					<></>
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
		const { profile, buttons } = props;

		return (
			<FlowbiteCard className="max-w-sm">
				<div className="flex justify-end px-4 pt-4">
					{profile?.actions && profile?.actions?.length > 0 ? (
						<FlowbiteDropdown inline label="">
							{profile?.actions.map(action => (
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
							))}
						</FlowbiteDropdown>
					) : (
						<></>
					)}
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
					{buttons && buttons?.length > 0 ? (
						<div className="mt-4 flex space-x-3 lg:mt-6">
							{buttons.map(button => (
								<FlowbiteButton
									href={button?.href ?? "#"}
									className={`w-full ${colorClasses[button?.color as keyof typeof colorClasses] ?? colorClasses.secondary}`}
								>
									{button?.label}
									{button?.icon && typeof button?.icon === "function" && (
										<div className="px-1 py-1">{button?.icon()}</div>
									)}
								</FlowbiteButton>
							))}
						</div>
					) : (
						<></>
					)}
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
		const { children, image, buttons, eCommerce } = props;

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
					<span className="ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
						{eCommerce?.stars}
					</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{eCommerce?.price}
					</span>
					{buttons && buttons?.length > 0 ? (
						buttons.map(button => (
							<FlowbiteButton
								href={button?.href ?? "#"}
								className={`${colorClasses[button?.color as keyof typeof colorClasses] ?? colorClasses.secondary}`}
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

	/**
	 * Render the CTA card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderCTA(props: CardProps): ReactNode {
		const { children, content, horizontal, buttons, image } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{children}</h5>
				<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{content}</p>
				<div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
					{buttons && buttons?.length > 0 ? (
						buttons.map(button => (
							<a
								href={button?.href ?? "#"}
								className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 focus:outline-none focus:ring-4 sm:w-auto ${colorClasses[button?.color as keyof typeof colorClasses] ?? colorClasses.secondary}`}
							>
								{button?.icon && typeof button?.icon === "function" && (
									<div className="mr-3">{button?.icon()}</div>
								)}
								{button?.svg && (
									<div className="mr-3" dangerouslySetInnerHTML={{ __html: button.svg }} />
								)}
								<div className="text-left">
									<div className="mb-1 text-xs">{button?.description}</div>
									<div className="-mt-1 font-sans text-sm font-semibold">{button?.label}</div>
								</div>
							</a>
						))
					) : (
						<></>
					)}
				</div>
			</FlowbiteCard>
		);
	}

	/**
	 * Render the List card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderList(props: CardProps): ReactNode {
		const { children, horizontal, image, list } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<div className="mb-4 flex items-center justify-between">
					<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
						{children}
					</h5>
					{list?.actions && list?.actions?.length > 0 ? (
						<FlowbiteDropdown inline label="">
							{list?.actions.map(action => (
								<FlowbiteDropdown.Item>
									<a
										href={action?.href ?? "#"}
										className={`block px-4 py-2 text-sm text-${action?.color || "cyan"}-600 hover:underline dark:text-${action?.color || "cyan"}-500`}
									>
										{action?.label}
										{action?.icon && typeof action?.icon === "function" && (
											<div className="px-1 py-1">{action?.icon()}</div>
										)}
									</a>
								</FlowbiteDropdown.Item>
							))}
						</FlowbiteDropdown>
					) : (
						<></>
					)}
				</div>

				{list?.items && list.items?.length > 0 ? (
					<div className="flow-root">
						<ul className="divide-y divide-gray-200 dark:divide-gray-700">
							{list.items.map(item => (
								<li className="py-3 sm:py-4">
									<div className="flex items-center space-x-4">
										<div className="shrink-0">
											{item?.image && (
												<img
													alt={item.image?.alt ?? ""}
													src={item.image?.src ?? ""}
													height={item.image?.height ?? "32"}
													width={item.image?.width ?? "32"}
													className="rounded-full"
												/>
											)}
										</div>
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
												{item?.label}
											</p>
											{item?.description && (
												<p className="truncate text-sm text-gray-500 dark:text-gray-400">
													{item?.description}
												</p>
											)}
										</div>
										{item?.info && (
											<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
												{item?.info}
											</div>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>
				) : (
					<></>
				)}
			</FlowbiteCard>
		);
	}

	/**
	 * Render the Pricing card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderPricing(props: CardProps): ReactNode {
		const { children, horizontal, image } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{children}</h5>
				<div className="flex items-baseline text-gray-900 dark:text-white">
					<span className="text-3xl font-semibold">$</span>
					<span className="text-5xl font-extrabold tracking-tight">49</span>
					<span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
				</div>
				<ul className="my-7 space-y-5">
					<li className="flex space-x-3">
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							2 team members
						</span>
					</li>
					<li className="flex space-x-3">
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							20GB Cloud storage
						</span>
					</li>
					<li className="flex space-x-3">
						<svg
							className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							Integration help
						</span>
					</li>
					<li className="flex space-x-3 line-through decoration-gray-500">
						<svg
							className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							Sketch Files
						</span>
					</li>
					<li className="flex space-x-3 line-through decoration-gray-500">
						<svg
							className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							API Access
						</span>
					</li>
					<li className="flex space-x-3 line-through decoration-gray-500">
						<svg
							className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							Complete documentation
						</span>
					</li>
					<li className="flex space-x-3 line-through decoration-gray-500">
						<svg
							className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
							24×7 phone & email support
						</span>
					</li>
				</ul>
				<button
					type="button"
					className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
				>
					Choose plan
				</button>
			</FlowbiteCard>
		);
	}

	/**
	 * Render the Crypto card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderCrypto(props: CardProps): ReactNode {
		const { children, horizontal, image } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
					{children}
				</h5>
				<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
					Connect with one of our available wallet providers or create a new one.
				</p>
				<ul className="my-4 space-y-3">
					<li>
						<a
							href="#"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
						>
							<svg
								className="h-4"
								viewBox="0 0 40 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726" />
								<path
									d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
									fill="#E27625"
								/>
								<path
									d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z"
									fill="#E27625"
								/>
								<path
									d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z"
									fill="#E27625"
								/>
								<path
									d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z"
									fill="#E27625"
								/>
								<path
									d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z"
									fill="#E27625"
								/>
								<path
									d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z"
									fill="#E27625"
								/>
								<path
									d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z"
									fill="#E27625"
								/>
								<path
									d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z"
									fill="#D5BFB2"
								/>
								<path
									d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z"
									fill="#D5BFB2"
								/>
								<path
									d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z"
									fill="#233447"
								/>
								<path
									d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z"
									fill="#233447"
								/>
								<path
									d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z"
									fill="#CC6228"
								/>
								<path
									d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z"
									fill="#CC6228"
								/>
								<path
									d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z"
									fill="#CC6228"
								/>
								<path
									d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z"
									fill="#CC6228"
								/>
								<path
									d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z"
									fill="#E27525"
								/>
								<path
									d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z"
									fill="#E27525"
								/>
								<path
									d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z"
									fill="#E27525"
								/>
								<path
									d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z"
									fill="#E27525"
								/>
								<path
									d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z"
									fill="#F5841F"
								/>
								<path
									d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z"
									fill="#F5841F"
								/>
								<path
									d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z"
									fill="#F5841F"
								/>
							</svg>
							<span className="ml-3 flex-1 whitespace-nowrap">MetaMask</span>
							<span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
								Popular
							</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
						>
							<svg
								className="h-5"
								viewBox="0 0 292 292"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z"
									fill="#3259A5"
								/>
								<path
									d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
									fill="white"
								/>
							</svg>
							<span className="ml-3 flex-1 whitespace-nowrap">Coinbase Wallet</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
						>
							<svg
								className="h-5"
								viewBox="0 0 75.591 75.591"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<linearGradient
									id="a"
									gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
									gradientUnits="userSpaceOnUse"
									x2="1"
								>
									<stop offset="0" stopColor="#ff1b2d" />
									<stop offset=".3" stopColor="#ff1b2d" />
									<stop offset=".614" stopColor="#ff1b2d" />
									<stop offset="1" stopColor="#a70014" />
								</linearGradient>
								<linearGradient
									id="b"
									gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
									gradientUnits="userSpaceOnUse"
									x2="1"
								>
									<stop offset="0" stopColor="#9c0000" />
									<stop offset=".7" stopColor="#ff4b4b" />
									<stop offset="1" stopColor="#ff4b4b" />
								</linearGradient>
								<g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
									<path
										d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
										fill="url(#a)"
									/>
									<path
										d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
										fill="url(#b)"
									/>
								</g>
							</svg>
							<span className="ml-3 flex-1 whitespace-nowrap">Opera Wallet</span>
						</a>
					</li>
					<li>
						<a
							href="#"
							className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
						>
							<svg
								className="h-4"
								viewBox="0 0 96 96"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z"
									fill="#617BFF"
								/>
								<path
									d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z"
									fill="#617BFF"
								/>
							</svg>
							<span className="ml-3 flex-1 whitespace-nowrap">Fortmatic</span>
						</a>
					</li>
				</ul>
				<div>
					<a
						href="#"
						className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
					>
						<svg
							className="mr-2 h-3 w-3"
							aria-hidden="true"
							focusable="false"
							data-prefix="far"
							data-icon="question-circle"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"
							/>
						</svg>
						Why do I need to connect with my wallet?
					</a>
				</div>
			</FlowbiteCard>
		);
	}

	/**
	 * Render the Form card.
	 * @param props The props of the component.
	 * @returns The component to render.
	 */
	private renderForm(props: CardProps): ReactNode {
		const { children, horizontal, image } = props;

		return (
			<FlowbiteCard
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc ?? undefined}
				imgAlt={image?.imgAlt ?? undefined}
			>
				<form className="flex flex-col gap-4">
					<div>
						<div className="mb-2 block">
							<FlowbiteLabel htmlFor="email1" value="Your email" />
						</div>
						<FlowbiteTextInput id="email1" type="email" placeholder="name@flowbite.com" required />
					</div>
					<div>
						<div className="mb-2 block">
							<FlowbiteLabel htmlFor="password1" value="Your password" />
						</div>
						<FlowbiteTextInput id="password1" type="password" required />
					</div>
					<div className="flex items-center gap-2">
						<FlowbiteCheckbox id="remember" />
						<FlowbiteLabel htmlFor="remember">Remember me</FlowbiteLabel>
					</div>
					<FlowbiteButton type="submit">{children}</FlowbiteButton>
				</form>
			</FlowbiteCard>
		);
	}
}
