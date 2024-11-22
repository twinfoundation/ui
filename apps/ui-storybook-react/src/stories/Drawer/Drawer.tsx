import { useState } from "react";
import { Drawer, TextInput, Textarea, Label, Sidebar, theme, Datepicker, Avatar } from "flowbite-react";
import {
	HiChartPie,
	HiClipboard,
	HiCollection,
	HiInformationCircle,
	HiLogin,
	HiPencil,
	HiSearch,
	HiShoppingBag,
	HiUsers,
  HiCalendar,
  HiUserAdd,
} from "react-icons/hi";
import { HiBars2, HiSquaresPlus, HiEnvelope } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
import { Button } from "@twin.org/ui-components-react";
export function DrawerWithButton() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show drawer</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose}>
				<Drawer.Header title="Info" />
				<Drawer.Items>
					<p className="mb-6 text-sm text-secondary dark:text-secondary-dark">
          Supercharge your hiring by taking advantage of our&nbsp;
						<a href="#" className="text-link-main underline dark:text-link-main-dark hover:text-link-main-hover">
							limited-time sale
						</a>
						&nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
						and the #1 design job board.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<a
							href="#"
							className="rounded-lg border surface-border-primary px-4 py-2 text-center text-sm font-medium text-primary hover:surface-border-primary-hover hover:text-primary-hover focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-primary-dark dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						>
							Learn more
						</a>
						<a
							href="#"
							className="inline-flex items-center rounded-lg bg-surface-button-alt px-4 py-2 text-center text-sm font-medium text-white hover:bg-surface-button-alt-hover focus:outline-none focus:ring-4 dark:bg-surface-button-alt-dark dark:hover:bg-surface-button-alt-hover-dark dark:focus:bg-surface-button-alt-dark"
						>
							Get access&nbsp;
							<svg
								className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</a>
					</div>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function DrawerWithSidebar() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show navigation</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose}>
				<Drawer.Header title="MENU" titleIcon={() => <></>} />
				<Drawer.Items>
					<Sidebar
						aria-label="Sidebar with multi-level dropdown example"
						className="[&>div]:bg-transparent [&>div]:p-0"
					>
						<div className="flex h-full flex-col justify-between py-2">
							<div>
								<form className="pb-3 md:hidden">
									<TextInput
										icon={HiSearch}
										type="search"
										placeholder="Search"
										required
										size={32}
									/>
								</form>
								<Sidebar.Items>
									<Sidebar.ItemGroup>
										<Sidebar.Item href="/" icon={HiChartPie}>
											Dashboard
										</Sidebar.Item>
										<Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>
											Products
										</Sidebar.Item>
										<Sidebar.Item href="/users/list" icon={HiUsers}>
											Users list
										</Sidebar.Item>
										<Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
											Sign in
										</Sidebar.Item>
										<Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
											Sign up
										</Sidebar.Item>
									</Sidebar.ItemGroup>
									<Sidebar.ItemGroup>
										<Sidebar.Item
											href="https://github.com/themesberg/flowbite-react/"
											icon={HiClipboard}
										>
											Docs
										</Sidebar.Item>
										<Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
											Components
										</Sidebar.Item>
										<Sidebar.Item
											href="https://github.com/themesberg/flowbite-react/issues"
											icon={HiInformationCircle}
										>
											Help
										</Sidebar.Item>
									</Sidebar.ItemGroup>
								</Sidebar.Items>
							</div>
						</div>
					</Sidebar>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function ContactDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show contact form</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose}>
				<Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
				<Drawer.Items>
					<form action="#">
						<div className="mb-6 mt-3">
							<Label htmlFor="email" className="mb-2 block">
								Your email
							</Label>
							<TextInput id="email" name="email" placeholder="name@company.com" type="email" />
						</div>
						<div className="mb-6">
							<Label htmlFor="subject" className="mb-2 block">
								Subject
							</Label>
							<TextInput
								id="subject"
								name="subject"
								placeholder="Let us know how we can help you"
							/>
						</div>
						<div className="mb-6">
							<Label htmlFor="message" className="mb-2 block">
								Your message
							</Label>
							<Textarea id="message" name="message" placeholder="Your message..." rows={4} />
						</div>
						<div className="mb-6">
							<Button type="submit" className="w-full">
								Send message
							</Button>
						</div>
						<p className="mb-2 text-sm text-secondary dark:text-secondary-dark">
							<a href="mailto:info@company.com" className="hover:underline">
								info@company.com
							</a>
						</p>
						<p className="text-sm text-secondary dark:text-secondary-dark">
							<a href="tel:2124567890" className="hover:underline">
								212-456-7890
							</a>
						</p>
					</form>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function EventDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show drawer</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose}>
				<Drawer.Header title="NEW EVENT" titleIcon={HiCalendar} />
				<Drawer.Items>
					<form action="#">
						<div className="mb-6 mt-3">
							<Label htmlFor="title" className="mb-2 block">
								Title
							</Label>
							<TextInput id="title" name="title" placeholder="Apple Keynote" />
						</div>
						<div className="mb-6">
							<Label htmlFor="description" className="mb-2 block">
								Description
							</Label>
							<Textarea
								id="description"
								name="description"
								placeholder="Write event description..."
								rows={4}
							/>
						</div>
						<div className="mb-6">
							<Datepicker />
						</div>
						<div className="mb-6">
							<TextInput
								id="guests"
								name="guests"
								placeholder="Add guest email"
								type="search"
								rightIcon={() => (
									<Button size="sm" className="[&>span]:items-center [&>span]:px-2 [&>span]:py-0">
										<HiUserAdd className="mr-2" />
										Add
									</Button>
								)}
								theme={{
									field: {
										rightIcon: {
											base: twMerge(theme.textInput.field.rightIcon.base, "pointer-events-auto")
										}
									}
								}}
							/>
						</div>
						<Avatar.Group className="mb-6">
							<Avatar alt="" img="/images/people/profile-picture-5.jpg" rounded size="sm" stacked />
							<Avatar alt="" img="/images/people/profile-picture-2.jpg" rounded size="sm" stacked />
							<Avatar alt="" img="/images/people/profile-picture-3.jpg" rounded size="sm" stacked />
							<Avatar alt="" img="/images/people/profile-picture-4.jpg" rounded size="sm" stacked />
						</Avatar.Group>
						<Button className="w-full">
							<HiCalendar className="mr-2" />
							Create event
						</Button>
					</form>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function LeftDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show left drawer</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose} position="left">
				<Drawer.Header title="Drawer" />
				<Drawer.Items>
					<p className="mb-6 text-sm text-secondary dark:text-secondary-dark">
						Supercharge your hiring by taking advantage of our&nbsp;
						<a href="#" className="text-link-main underline hover:text-link-main-hover dark:text-link-main-dark">
							limited-time sale
						</a>
						&nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
						and the #1 design job board.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<a
							href="#"
							className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-primary hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-secondary-dark dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						>
							Learn more
						</a>
						<a
							href="#"
							className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
						>
							Get access&nbsp;
							<svg
								className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</a>
					</div>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function RightDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show right drawer</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose} position="right">
				<Drawer.Header title="Drawer" />
				<Drawer.Items>
					<p className="mb-6 text-sm text-secondary dark:text-secondary-dark">
						Supercharge your hiring by taking advantage of our&nbsp;
						<a href="#" className="text-link-main underline hover:text-link-main-hover dark:text-link-main-dark">
							limited-time sale
						</a>
						&nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
						and the #1 design job board.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<a
							href="#"
							className="rounded-lg border surface-border-primary bg-white px-4 py-2 text-center text-sm font-medium text-primary hover:surface-border-primary-hover hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-secondary-dark dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						>
							Learn more
						</a>
						<a
							href="#"
							className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
						>
							Get access&nbsp;
							<svg
								className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</a>
					</div>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function ShowSwipeableDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show swipeable drawer</Button>
			</div>
			<Drawer edge open={isOpen} onClose={handleClose} position="bottom" className="p-0">
				<Drawer.Header
					closeIcon={HiBars2}
					title="Add widget"
					titleIcon={HiSquaresPlus}
					onClick={() => setIsOpen(!isOpen)}
					className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
				/>
				<Drawer.Items className="p-4">
					<div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 22 21"
								>
									<path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
									<path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Chart</div>
						</div>
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 14"
								>
									<path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z" />
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Table</div>
						</div>
						<div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 14 20"
								>
									<path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
								</svg>
							</div>
							<div className="hidden text-center font-medium text-secondary dark:text-secondary-dark">
								Ticket
							</div>
						</div>
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 20"
								>
									<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">List</div>
						</div>
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
									/>
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Price</div>
						</div>
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18"
								>
									<path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Users</div>
						</div>
						<div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18"
								>
									<path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z" />
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Task</div>
						</div>
						<div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
							<div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
								<svg
									className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
									/>
								</svg>
							</div>
							<div className="text-center font-medium text-secondary dark:text-secondary-dark">Custom</div>
						</div>
					</div>
				</Drawer.Items>
			</Drawer>
		</>
	);
}

export function BottomDrawer() {
	const [isOpen, setIsOpen] = useState(true);

	const handleClose = () => setIsOpen(false);

	return (
		<>
			<div className="flex min-h-[50vh] items-center justify-center">
				<Button onClick={() => setIsOpen(true)}>Show bottom drawer</Button>
			</div>
			<Drawer open={isOpen} onClose={handleClose} position="bottom">
				<Drawer.Header title="Drawer" />
				<Drawer.Items>
					<p className="mb-6 text-sm text-secondary dark:text-secondary-dark">
						Supercharge your hiring by taking advantage of our&nbsp;
						<a href="#" className="text-link-main underline hover:no-underline dark:text-link-main-dark">
							limited-time sale
						</a>
						&nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates
						and the #1 design job board.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<a
							href="#"
							className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-primary hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-secondary-dark dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
						>
							Learn more
						</a>
						<a
							href="#"
							className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
						>
							Get access&nbsp;
							<svg
								className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 14 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M1 5h12m0 0L9 1m4 4L9 9"
								/>
							</svg>
						</a>
					</div>
				</Drawer.Items>
			</Drawer>
		</>
	);
}


export function SwipeableEdge() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show swipeable drawer</Button>
      </div>
      <Drawer edge open={isOpen} onClose={handleClose} position="bottom" className="p-0">
        <Drawer.Header
          closeIcon={HiBars2}
          title="Add widget"
          titleIcon={HiSquaresPlus}
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
        />
        <Drawer.Items className="p-4">
          <div className="grid grid-cols-3 gap-4 p-4 lg:grid-cols-4">
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Chart</div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM9 6v2H2V6h7Zm2 0h7v2h-7V6Zm-9 4h7v2H2v-2Zm9 2v-2h7v2h-7Z" />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Table</div>
            </div>
            <div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 20"
                >
                  <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                </svg>
              </div>
              <div className="hidden text-center font-medium text-secondary dark:text-secondary-dark">Ticket</div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">List</div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                  />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Price</div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Users</div>
            </div>
            <div className="hidden cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 lg:block dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm-1.391 7.361.707-3.535a3 3 0 0 1 .82-1.533L7.929 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h4.259a2.975 2.975 0 0 1-.15-1.639ZM8.05 17.95a1 1 0 0 1-.981-1.2l.708-3.536a1 1 0 0 1 .274-.511l6.363-6.364a3.007 3.007 0 0 1 4.243 0 3.007 3.007 0 0 1 0 4.243l-6.365 6.363a1 1 0 0 1-.511.274l-3.536.708a1.07 1.07 0 0 1-.195.023Z" />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Task</div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <svg
                  className="inline h-5 w-5 text-secondary dark:text-secondary-dark"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                  />
                </svg>
              </div>
              <div className="text-center font-medium text-secondary dark:text-secondary-dark">Custom</div>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}




