import type { Meta } from "@storybook/react";
import { Button } from "@twin.org/ui-components-react";
import { Card, Dropdown, Label, TextInput, Checkbox } from "flowbite-react";
import CardHeaderimage from "/images/card-header.png";
import SideImage from "/images/card-header-side.png";
import Avatar from "/images/Avatar.png";
import Ecomreace from "/images/gift.png";
import See from "/images/see.png";
import CardImage from "/images/Image.png";

const meta = {
	title: "Components/Card",
	component: Card
} satisfies Meta<typeof Card>;

export default meta;

export const BasicCard = () => (
	<Card href="#" className="max-w-sm">
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
);

export const GiftCard = () => (
	<Card className="max-w-sm">
		<div className="flex items-center gap-4">
			<div className="flex-1">
				<img src={Ecomreace} alt="ecommerce" className="h-24" />

				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Need a help in Claim?
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Go to this step by step guideline process on how to certify for your weekly benefits:
				</p>
				<div className="mt-2 items-center flex gap-2">
					<a href="#" className="text-blue-600 hover:underline">
						{" "}
						See our guideline
					</a>
					<img src={See} alt="ecommerce" className="ml-2 h-4" />{" "}
				</div>
			</div>
		</div>
	</Card>
);

export const CardWithButton = () => (
	<Card className="max-w-sm">
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button color={"secondary"} size="sm">
			Read more
			<svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</Button>
	</Card>
);

export const CardWithImage = () => (
	<Card className="max-w-sm" imgAlt="Alt text" imgSrc={CardHeaderimage}>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
		<Button color={"secondary"} size="sm">
			Read more
			<svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</Button>
	</Card>
);

export const CardWithCustomImage = () => (
	<Card
		className="max-w-lg flex-row"
		renderImage={() => <img width={200} height={500} src={CardHeaderimage} alt="image 1" />}
	>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
);

export const HorizontalCardWithImage = () => (
	<Card className="max-w-sm" imgSrc={SideImage} horizontal>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions 2021
		</h5>
		<p className="font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
			chronological order.
		</p>
	</Card>
);

export const CardWithDropdownAndProfileImage = () => (
	<Card className="max-w-sm">
		<div className="flex justify-end px-4 pt-4">
			<Dropdown inline label="">
				<Dropdown.Item>
					{" "}
					<a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
						Edit
					</a>{" "}
				</Dropdown.Item>
				<Dropdown.Item>
					{" "}
					<a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
						Export Data
					</a>{" "}
				</Dropdown.Item>
				<Dropdown.Item>
					{" "}
					<a href="#" className="block px-4 py-2 text-sm text-red-600 dark:text-gray-200">
						Delete
					</a>{" "}
				</Dropdown.Item>
			</Dropdown>
		</div>
		<div className="flex flex-col items-center pb-10">
			<img
				alt="Bonnie image"
				height="96"
				src={Avatar}
				width="96"
				className="mb-3 rounded-full shadow-lg"
			/>
			<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
			<span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
			<div className="mt-4 flex space-x-3 lg:mt-6">
				<a
					href="#"
					className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-white"
				>
					Add friend
				</a>
				<a href="#" className="inline-flex items-center rounded-lg border px-4 py-2 text-gray-900">
					Message
				</a>
			</div>
		</div>
	</Card>
);

export const CardWithForm = () => (
	<Card className="max-w-sm">
		<form className="flex flex-col gap-4">
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email1" value="Your email" />
				</div>
				<TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="password1" value="Your password" />
				</div>
				<TextInput id="password1" type="password" required />
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="remember" />
				<Label htmlFor="remember">Remember me</Label>
			</div>
			<Button type="submit" color={"secondary"} >Submit</Button>
		</form>
	</Card>
);

export function ECommerceCard() {
	return (
		<Card
			className="max-w-sm"
			imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
			imgSrc={CardImage}
		>
			<a href="#">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
				</h5>
			</a>
			<div className="mb-5 mt-2.5 flex items-center">
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<svg
					className="h-5 w-5 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				</svg>
				<span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
					5.0
				</span>
			</div>
			<div className="flex items-center justify-between">
				<span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
				<a
					href="#"
					className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
				>
					Add to cart
				</a>
			</div>
		</Card>
	);
}

export function CTACard() {
	return (
		<Card className="max-w-sm">
			<h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
				Work fast from anywhere
			</h5>
			<p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				Stay up to date and move work forward with Flowbite on iOS & Android. Download the app
				today.
			</p>
			<div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
				<a
					href="#"
					className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
				>
					<svg
						className="mr-3 h-7 w-7"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="apple"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
					>
						<path
							fill="currentColor"
							d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
						/>
					</svg>
					<div className="text-left">
						<div className="mb-1 text-xs">Download on the</div>
						<div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
					</div>
				</a>
				<a
					href="#"
					className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 sm:w-auto dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
				>
					<svg
						className="mr-3 h-7 w-7"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="google-play"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<path
							fill="currentColor"
							d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
						/>
					</svg>
					<div className="text-left">
						<div className="mb-1 text-xs">Get in on</div>
						<div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
					</div>
				</a>
			</div>
		</Card>
	);
}

export function CardWithList() {
	return (
		<Card className="max-w-sm">
			<div className="mb-4 flex items-center justify-between">
				<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
					Latest Customers
				</h5>
				<a
					href="#"
					className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
				>
					View all
				</a>
			</div>
			<div className="flow-root">
				<ul className="divide-y divide-gray-200 dark:divide-gray-700">
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<img
									alt="Neil image"
									height="32"
									src={Avatar}
									width="32"
									className="rounded-full"
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Neil Sims
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@windster.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$320
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<img
									alt="Bonnie image"
									height="32"
									src={Avatar}
									width="32"
									className="rounded-full"
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Bonnie Green
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@windster.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$3467
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<img
									alt="Michael image"
									height="32"
									src={Avatar}
									width="32"
									className="rounded-full"
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Michael Gough
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@windster.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$67
							</div>
						</div>
					</li>
					<li className="py-3 sm:py-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<img
									alt="Lana image"
									height="32"
									src={Avatar}
									width="32"
									className="rounded-full"
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Lana Byrd
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@windster.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$367
							</div>
						</div>
					</li>
					<li className="pb-0 pt-3 sm:pt-4">
						<div className="flex items-center space-x-4">
							<div className="shrink-0">
								<img
									alt="Thomas image"
									height="32"
									src={Avatar}
									width="32"
									className="rounded-full"
								/>
							</div>
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-medium text-gray-900 dark:text-white">
									Thomes Lean
								</p>
								<p className="truncate text-sm text-gray-500 dark:text-gray-400">
									email@windster.com
								</p>
							</div>
							<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								$2367
							</div>
						</div>
					</li>
				</ul>
			</div>
		</Card>
	);
}

export function PricingCard() {
	return (
		<Card className="max-w-sm">
			<h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
			<div className="flex items-baseline text-gray-900 dark:text-white">
				<span className="text-3xl font-semibold">$</span>
				<span className="text-5xl font-extrabold tracking-tight">49</span>
				<span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
			</div>
			<ul className="my-7 space-y-5">
				<li className="flex space-x-3">
					<svg
						className="h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-500"
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
						className="h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-500"
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
						className="h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-500"
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
						className="h-5 w-5 shrink-0 text-blue-600 dark:text-gray-500"
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
					<span className="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
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
					<span className="text-base font-normal leading-tight text-gray-500">API Access</span>
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
					<span className="text-base font-normal leading-tight text-gray-500">
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
					<span className="text-base font-normal leading-tight text-gray-500">
						24×7 phone & email support
					</span>
				</li>
			</ul>
			<button
				type="button"
				className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
			>
				Choose plan
			</button>
		</Card>
	);
}

export function CryptoCardWeb3() {
	return (
		<Card href="#" className="max-w-sm">
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				Connect Wallet
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				Connect with one of our available wallet providers or create a new one.
			</p>
			<div className="mb-5 mt-2.5 flex flex-col items-center gap-3">
				<button
					type="button"
					className="flex w-full items-center gap-3 rounded-lg bg-[#F4F6F8] px-5 py-2.5 text-center text-sm font-medium text-gray-900"
				>
					<div className="flex gap-3">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABJlBMVEX////2hRt2PRbkdhvNYRbArZ7XwbMWFhbkdR/rfBv7yar2ggj5hxsjNEdyOxa8p5cAAAANDg82MS6fj4Pb0cn/jhsOExbVaRjjbABtOBbiZgDdbxpAKBfkcgvxgRtrJgBwMgCCQxfx7ev9+PX77ueSSxcALkv21cPXcBrNahpnHQCKRxf2eAAQMUnOuaucUBjSxL5/TDDso3bgWwDDsavvtZbnhkKtWhiLYEjdon7pklrxvaPBZBnleS30zLX43tDvrIW1nJJjDwCjg3SVcFzl3dr4oF/3kkR0Rzg0N0X5qG+2WSGqZDNuTUBPQkS4bDIAKU2UWzf3jDEAABZ0aWFcU03ar5XCm4SXenu4c0mEVUyPZ15dLxaYUS5BPUTEbyszHhaJe3CjXRKyAAAO90lEQVR4nO2deX/axhaGQTKulGA5ae2LhK8wtrAB4xhMDDhidRxap02cLmm6ZGu+/5e4M1pAy2xn5Dbp7+r90xaj8+i8OrNoBIVCrly5cuXKlStXrly5cvlyPncAacmH9Pub+R3GcQeav/ld9qM7+50/+rMvJj3Ovf4fnZOl5Kev60p9NB32v4j0zPvDVhcFdCX5+T/rimIcVGxtOvjM6XEGU9VuHxiKUv9TroXeuYJkKBNVNR+7zbsND6Km+9hU1ZFl4HjOd6TaQC7zaKxuS1Xtqj1ofIb8OI0BOrWqtrqWF42kz5y3PoyiWAdtFcmsurN/lsdpzNyqic/dPghYlPpbmZZ8lwXJmeAWUXq0frNx1yHT1Gj2VZwUVdVGhrEKRspnV3UlQtNt6R4OSs/4n+BpNMcoKR6KvrKYtM8O30ZgkNWO/ORgHq0//pur9Xzc13wSpEknyqLUr+FW753HYFCNHqmhTHvYn/1t6WmM+0PbDM/VGilGLJD6eQ/c5NW+klRgNT89U7f/t1TrZt9dJwVbzEiGsQ/22eF1PQVj+FUt5LGn7uCO09MYuFPbjpxkcpBiQT47BDbbSzeC75yRrsZ4NHd2dygzV4uRqPrIIgRRB9ezixMSDKoDalyovPXvJD2NftW0E40fkFgU5eQC1vThs7TLfBqjrSdOaT5WZ06mztRxZsPHZqJZtW2RWcA+26GweFZLnhV1pibqTCV5HNQ5mtVkUvBYjBqCAfMZxWU+DR6rJWVWhwOZzrTRHAyrqaSginxEZwH6jOoyn6YzSZ/dS89sDkqPM5/1zdSdgpXoKBOqg3y2THcysTQfjDRCBDg9i3sALYhJwWMxQkWOah8y32S5zKMxjlrJOuCnxzy9L6xTYlJQR3lksFlAPnMuWS4LkjMh0qh6uSioMqUBXlqQ6s/E7Xz4lNcanoF2icHooizFIvnzXV5asJ6K3zQ8l/myOiopHGEa4odblI4yIYDPDK7LPBkGyWpZYPSJSFqQ6oYwDP+WCXFIVa0mxlJLw+x1hdKCYS6FYQjDf4qso3YqJMHUpFnarI4yLsA0oPdUtFHFOkh1oJIw2kQRZlGeik/QRKpZKMMaJbscIZ/VElegNRK8XXwY8WrmnIveNFjIanEaodQkPgKwmIKnNOL9jEOYZrJoEh2oCEwiMSOxiryCgSxqbAtXAE+GMtKiOAI+i8Kgib4CsBjS/rY4S2H5FNQ2wolZTSA10aPbHRgKumUgA03OqJlEo0SrGjc10cQk15IEBBo1s+czZEVnoBAY4Y5yrfozyHzGEe82IzSd9QyUB7M6sAXoXFbavwLNAXtCQ82EwvV1AMzEAlsM6QS2prkjA6Mo78KxGqcEBLd/a/RO6jQnsAWNJajbXGs1VhNJTJs50aerfg57SitTATyF6+t8GO5Enw4Duv8lK4BPo3grUUyfYZeBO8q1gPe/6GSTjNPBHSiDpSzVUa4FXZ4t9CRt5tEoI53V1dRUXaKjXKsOfUCzFJ5tkmiMI53hM10/yoCCZpnQXRqk5zMAWUqLuuRUpq6IC8KAn88Aps4UnDaFpjzJhCLz5KxwkSkzeHl9lwKTyWNIdej9H9sGIMVyQM2MbF8ZSuIB7VK22/RZOi1qBdBbmWjqz+C7tIBT5wQLfjBNg8Er4xloZPYBxHZowGRY3niTwlLzRpiQpZgEDPz+dy4upVmC4Rml2/TnZRloLi+AqTm8tmQTY4UTaCaMClnyi6tuXYE6msO30kMza7XzgQ0T2XUF1gms21zK0hid1aITB0bXZMeaJ2+BQwDnqi7jMyvyBIpSmyNrGVJFrV6HLJoFuoD3moYR3Y7CyQzGlSkDl/A+E9NAT4SG/tH1MD6MWoPPNs/hgxnksx60Nief2VJsFj9mAi4Dlz1wp3l4BV3SEH0YkFz+h45t6jewylzA02YoS2oTihAMXgwAOq0OnjYvr4HzmVFqQ40gjLoHpNm/Bo80DyE0qIwlQxSHAY5t9uETTSQAjUHaGSQOowImn/vXEiiF1f55viziRhoAjN4SfmYuyVI4FDgDMoihUDbBkDsa8sEqaknEbJaMx/AkgGczfPKDbiu9E4AFQ9jL4Kvd7h74bTK1D50AeLpiDzUNy+gcjVq1XcrmJDCMXt6ttUZHHYPzlONE5jWNHUavaVlKpztRy7vlMs02YBh0j5XLu0V10u0ojIU1+EZgT+StzSgl1kF31MYkXnC02CiDMzqMd3wZSW2PugcWJUGG1DgTjQLSNw0i6YwmLR2dkhsbBYZ+fJhK1Ljemow6JJ59mXGmp6unCXNZR5OWWluR0GuTFEykmKNT1NTWxyMrYbinsu/PIV2vi4D1zkB3Cfa1aGhwmPgnvPtxcmS9W/OcyPYyWId+ETAwSbtWTJCwTSYDk6wZ+Hy1djfk2Qc+MkvS1OuIRBlp5XIShGcyyhAA/BF8Zm2kvLOM+nkmFkxzNKntkkB4V1kKhjI9Le/u1iZHRkaWQuHeKYWkGNmacHcw1EXdcvk089stje/v05rnxiUFQ3/idv/7rO9VzuksHJNJwtAfhpaLWV/UuXdKheFFJQlDf059mvElN+dbamb4UUnCUI2W1WcOnaVSqewFUjXiSxvEkSYRBn0+bAs1S6fJBjOju6yysVIlphUgOTPrwGOfirRGPWXGekZ3GUrNBkd7hMzU9nifoicG+SwTDD0xxaLGo6mQYLgf0hinPM3Cwqhl2DCcwGRgKmRzhjBZ6tl3dJchaRwaCZtVNFZiive/zQDDSox3LzNpiDAah4W9hzCDzxi1zJPGpgHDIBZmYjLVM0Yt86QzaSp7hKvMvNH2eInJ4DOH3TC+zCSa8A/Ee3kFU0lDIRbuttuibL95j5MYPzUJ31Q2fnovAvP+fKOSYuElBqVG1meM0X8o1M9r0fq0t3F+u/X8hyA4Iox/+A+3Wx/ON/YSLPzEyPabDrswB7FFc1PduHm+9Wjr+D0f5v0jdODzG/SRQF5D/Dci7n8n57PmzwLvj6prmurk5tGWpw9BeEQY/+AP/pGPbibVNQs/McVyTc5nAi4LU6N5xjkOWILUsGDeHweHPjq+/aESsAgkRtZnDV5h9uWnRm/dPEIKItx6vkHrAIOO9kN4JP7UTVsXTQwuzjLzzZmIy8LU6OXd1ouXt1sB0PH7CqXT0HHBqHSPA5Ct25cvWvfLunBiiuWfZXy2EEpMkBrdWw7SX52//LCF3facDfMck2x9eHn5St/F6++6cGJQahZwFtayTDK8MGzM8/HF5e3W8Y/vK+RL7Q0auj8eb93evPjok8Tb4MNI+KwpUJh9qdGrWi7v1tqvfnr5nAXz4eVPr1rR9XdVPDFSPuN3/6FqyUhQkOpHlTxvxrNm9M9ifLUXwwi+Eo1SM4CyCLvMDyV5WTEPFSa1/k5qgQHzPdRnQj1moBoxFJ0GQ/irCkgM8hl0vsmcMKdjIcDUaDCEsIkNUHV6D8bS6Iu7DMedGQZwNrDP5gCX4WBIMCoZhpQD/uuDccG+K64JcRkOnPBHnQxD+GNN9NsdAsF85gBqmR8jIRoADOArUbBgPmsUQS5D4ZD+RoYhrXLAToZoID5jL8uUScoCI9jgWiCfzUydITVYGMc9f7j8T7wTSDCk2yN8MqAFjXrtsyIwxwCYOfH7oFYPIFLrKuSlWNJLdKS/EZdsiQ9JQlUhNmu4TBrCEmuFkAZBGF0lwOyxzm8PIQXAGTNhCGffIzhNDEYnXZwK8/Qm7CuX51Vma2mjeVcyaR8STNKO5EwzTQZzGfLZkPjVYyulTu/BJCqVAExNo7dGlT2EwTgLts+SRgttkQg1DRP/k85ujSJzAVw7m3Fgkouy4d9jVz4NU4v9e/WwNgHDNplqQqea8ynbZwlrRK6lcHce2RQRh2GbTFWn0PlMo89JTTyAqDEkvniK2hZJJvwrVQc8GJUaAPy7mmIwvPOa4DWAwmzKazS2hB//F91q4dZO4abS0uCrMw2Xc9PErmcygpofeHk3oWAAmdxDFIHhmUy1XYmv8eYVZzVqtNTlxPtrJ3/9N6m//prgvbHJoyMw3JOafThLYcxtNhJDupjatvHLfwj6RbHTKdfoVyUtyIg51JwzCMCqUK6nrWqDbx58RdSDi4WmJpsWNhm4+w/U58NoRBhbGz7pbVJhvtnsLaZavHF6hlMwrtSjswUfJjRa9IJilE2kTzSYT/i/T4YxnIqwyeyFDEuhyS3OqyjWMLbmeiibZ69pMK/PvAOeuBGzJZuhC9z9+3IEbprAaOEVNVX3iR/q5tmvNJhfwyOeuKuv/98TNBm6ZSQ3AgjcNEEYPoxpu282Q519/ZAM8/Drs9UxK5w9QZOhW0aOpTATgfEcgi+pHUVBgVJYEM1Z5LA3rlepNUGTqbbspgZH5FJ5cWhJFARDcRny2VnsQA9HEzMZSqH0Nk2Rm8aziG0O4yibmxd0mFLi0DdD0xYzmWpPZVkKA/ZKQKiN6vBNLxHg5hUd5ip5bO/NsMofx2BV4SPmUI3HAtcK6bcUyubmNR3mU/ro3m+4HQGYDJvOOWNNdP7p0B3MC6Wkc3Cf+ZCiB69TB5dKhfnYHU65QKY8C2vkbKOiOnQXwc/Q9Eql+G29+frB1xQ9uI0feVYq+S/FNWYLd4gKPB1IasQcirZ8Zpsmysg48pMGO6XtsxjO7etvKHr9VQzlbLu0flnRmY8H7pT8wwdI1UxvAxAyg0Bsd5H84SZnWdouRXE+bZco2n4dRUEfW8bLbaM5Xrg2EcjMtH8+ueZsm1W1P26SfmViiS5xBIeGghVBQQklvN3vzJvj/jT1Gy6mbPfvaxb1mVmtDgezOa2gHPZwMs4CHi7MGUYpbfdo71415rPBsBr7fYpqtncBGiEMSonpjufM32VxltvrYHkwgeWWzAYb83HfXCcoS2HGzXk+s6uP1UVT4AdznIsVDhsmQBF4g9xxmgv1sff7NJLzsrXGVWQudyx8SXao931a28KvXDfGLjJcVWb2H2tmuoDNuZfCKCXY93rMF9N/7Jf8VnJ6YjDw78L5LFqe8VFIBfnLlF+kWQ6jFuQvUN54gM5ywSzIX56WvW2q/k1p8eXs0PQvS0uuXLly5cqVK1euXLly5cqVK1eu/0f9D0lwJG4wBjwqAAAAAElFTkSuQmCC"
							alt="MetaMask"
							width={24}
							height={24}
						/>
						<span className="ml-2 text-lg">MetaMask</span>
					</div>
					<span className="ml-2 rounded-full border border-slate-400 bg-slate-300 px-2.5 py-0.5 text-xs font-medium text-gray-500">
						Most popular
					</span>
				</button>
				<button
					type="button"
					className="flex w-full items-center gap-3 rounded-lg bg-[#F4F6F8] px-5 py-2.5 text-center text-sm font-medium text-gray-900"
				>
					<img
						src="data:image/png;base64,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"
						alt="Coinbase Wallet"
						width={24}
						height={24}
					/>
					<span className="ml-2 text-lg">Coinbase Wallet</span>
				</button>
				<button
					type="button"
					className="flex w-full items-center gap-3 rounded-lg bg-[#F4F6F8] px-5 py-2.5 text-center text-sm font-medium text-gray-900"
				>
					<img
						src="data:image/png;base64,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"
						alt="Coinbase Wallet"
						width={24}
						height={24}
					/>
					<span className="ml-2 text-lg">Opera Wallet</span>
				</button>
				<button
					type="button"
					className="flex w-full items-center gap-3 rounded-lg bg-[#F4F6F8] px-5 py-2.5 text-center text-sm font-medium text-gray-900"
				>
					<img
						src="data:image/png;base64,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"
						alt="Coinbase Wallet"
						width={24}
						height={24}
					/>
					<span className="ml-2 text-lg">WalletConnect</span>
				</button>
				<button
					type="button"
					className="flex w-full items-left gap-3 rounded-lg bg-[#F4F6F8] px-5 py-2.5 text-center text-sm font-medium text-gray-900"
				>
					<img
						src="data:image/png;base64,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"
						alt="Coinbase Wallet"
						width={24}
						height={24}
					/>
					<span className="ml-2 text-lg">Fortmatic</span>
				</button>
				<span className="text-sx ml-2 text-gray-500">
					{" "}
					Why do I need to connect with my wallet?
				</span>
			</div>
		</Card>
	);
}
