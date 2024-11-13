import { Badge, Sidebar } from "flowbite-react";
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
	HiOutlineMinusSm,
	HiOutlinePlusSm
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export default {
	title: "Components/Sidebar",
	component: Sidebar
};

export const DefaultSidebar = () => (
	<Sidebar aria-label="Sidebar with logo branding example">
		<Sidebar.Logo href="#" img="./images/LogoTwin.png" imgAlt="Flowbite logo"></Sidebar.Logo>
		<Sidebar.Items>
			<Sidebar.ItemGroup>
				<Sidebar.Item href="#" icon={HiChartPie}>
					Dashboard
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiViewBoards}>
					Kanban
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiInbox}>
					Inbox
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiUser}>
					Users
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiShoppingBag}>
					Products
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiArrowSmRight}>
					Sign In
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiTable}>
					Sign Up
				</Sidebar.Item>
			</Sidebar.ItemGroup>
		</Sidebar.Items>
	</Sidebar>
);

export const SidebarWithCollapse = () => (
	<Sidebar aria-label="Sidebar with multi-level dropdown example">
		<Sidebar.Items>
			<Sidebar.ItemGroup>
				<Sidebar.Item href="#" icon={HiChartPie}>
					Dashboard
				</Sidebar.Item>
				<Sidebar.Collapse
					icon={HiShoppingBag}
					label="E-commerce"
					renderChevronIcon={(theme, open) => {
						const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
						return (
							<IconComponent
								aria-hidden
								className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
							/>
						);
					}}
				>
					<Sidebar.Item href="#">Products</Sidebar.Item>
					<Sidebar.Item href="#">Sales</Sidebar.Item>
					<Sidebar.Item href="#">Refunds</Sidebar.Item>
					<Sidebar.Item href="#">Shipping</Sidebar.Item>
				</Sidebar.Collapse>
				<Sidebar.Item href="#" icon={HiInbox}>
					Inbox
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiUser}>
					Users
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiShoppingBag}>
					Products
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiArrowSmRight}>
					Sign In
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiTable}>
					Sign Up
				</Sidebar.Item>
			</Sidebar.ItemGroup>
		</Sidebar.Items>
	</Sidebar>
);

export const SidebarWithCTA = () => (
	<Sidebar aria-label="Sidebar with call to action button example">
		<Sidebar.Items>
			<Sidebar.ItemGroup>
				<Sidebar.Item href="#" icon={HiChartPie}>
					Dashboard
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiViewBoards}>
					Kanban
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiInbox}>
					Inbox
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiUser}>
					Users
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiShoppingBag}>
					Products
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiArrowSmRight}>
					Sign In
				</Sidebar.Item>
				<Sidebar.Item href="#" icon={HiTable}>
					Sign Up
				</Sidebar.Item>
			</Sidebar.ItemGroup>
		</Sidebar.Items>
		<Sidebar.CTA>
			<div className="mb-3 flex items-center">
				<Badge color="warning">Beta</Badge>
				<button
					aria-label="Close"
					className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
					type="button"
				>
					<svg
						aria-hidden
						className="h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
				Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
				limited time in your profile.
			</div>
			<a
				className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
				href="#"
			>
				Turn new navigation off
			</a>
		</Sidebar.CTA>
	</Sidebar>
);
