import { Avatar, Dropdown } from "flowbite-react";
import { useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { Button } from "@twin.org/ui-components-react";
export function DropdownDivider() {
	return (
		<Dropdown label="Dropdown button">
			<Dropdown.Item>Dashboard</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Earnings</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item className="text-warning"> Sign out </Dropdown.Item>
		</Dropdown>
	);
}

export function DropdownItemsWithIcon() {
	return (
		<Dropdown label="Dropdown">
			<Dropdown.Header>
				<span className="block text-sm">Bonnie Green</span>
				<span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
			</Dropdown.Header>
			<Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
			<Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
			<Dropdown.Item icon={HiCurrencyDollar}>Earnings</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
		</Dropdown>
	);
}

export function DropdownHeader() {
	return (
		<Dropdown label="Dropdown button">
			<Dropdown.Header>
				<span className="block text-sm">Bonnie Green</span>
				<span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
			</Dropdown.Header>
			<Dropdown.Item>Dashboard</Dropdown.Item>
			<Dropdown.Item>Settings</Dropdown.Item>
			<Dropdown.Item>Earnings</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item>Sign out</Dropdown.Item>
		</Dropdown>
	);
}

export function DefaultCheckDropdown(): JSX.Element {
	const [selectedItems, setSelectedItems] = useState<string[]>(["Settings"]); // "Settings" is checked by default

	const handleSelect = (item: string) => {
		setSelectedItems(prevSelected =>
			prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]
		);
	};

	const isSelected = (item: string) => selectedItems.includes(item);

	return (
		<Dropdown label="Select Items" inline>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Dashboard")}
						onChange={() => handleSelect("Dashboard")}
						className="mr-2"
					/>
					<span>Dashboard</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Settings")} // Default checked
						onChange={() => handleSelect("Settings")}
						className="mr-2"
					/>
					<span>Settings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Earnings")}
						onChange={() => handleSelect("Earnings")}
						className="mr-2"
					/>
					<span>Earnings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Sign out")}
						onChange={() => handleSelect("Sign out")}
						className="mr-2"
					/>
					<span>Sign out</span>
				</div>
			</Dropdown.Item>
		</Dropdown>
	);
}

export function ItemDropdown(): JSX.Element {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const handleSelect = (item: string) => {
		setSelectedItems(prevSelected =>
			prevSelected.includes(item) ? prevSelected.filter(i => i !== item) : [...prevSelected, item]
		);
	};

	const isSelected = (item: string) => selectedItems.includes(item);

	return (
		<Dropdown label="Select Items" inline>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Dashboard")}
						onChange={() => handleSelect("Dashboard")}
						className="mr-2"
					/>
					<div className="flex flex-col">
						<span>Dashboard</span>
						<span className="text-xs text-gray-400">helper text</span>
					</div>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Settings")}
						onChange={() => handleSelect("Settings")}
						className="mr-2"
					/>
					<div className="flex flex-col">
						<span>Dashboard</span>
						<span className="text-xs text-gray-400">helper text</span>
					</div>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Earnings")}
						onChange={() => handleSelect("Earnings")}
						className="mr-2"
					/>
					<div className="flex flex-col">
						<span>Dashboard</span>
						<span className="text-xs text-gray-400">helper text</span>
					</div>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={isSelected("Sign out")}
						onChange={() => handleSelect("Sign out")}
						className="mr-2"
					/>
					<span>Sign out</span>
				</div>
			</Dropdown.Item>
		</Dropdown>
	);
}
export function DefaultRadioDropdown(): JSX.Element {
	const [selectedItem, setSelectedItem] = useState<string>("Settings"); // "Settings" is checked by default

	const handleSelect = (item: string) => {
		setSelectedItem(item);
	};

	const isSelected = (item: string) => selectedItem === item;

	return (
		<Dropdown label="Select Item" inline>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Dashboard")}
						onChange={() => handleSelect("Dashboard")}
						className="mr-2"
					/>
					<span>Dashboard</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Settings")}
						onChange={() => handleSelect("Settings")}
						className="mr-2"
					/>
					<span>Settings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Earnings")}
						onChange={() => handleSelect("Earnings")}
						className="mr-2"
					/>
					<span>Earnings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Sign out")}
						onChange={() => handleSelect("Sign out")}
						className="mr-2"
					/>
					<span>Sign out</span>
				</div>
			</Dropdown.Item>
		</Dropdown>
	);
}
export function RadioDropdownSelect(): JSX.Element {
	const [selectedItem, setSelectedItem] = useState<string>();

	const handleSelect = (item: string) => {
		setSelectedItem(item);
	};

	const isSelected = (item: string) => selectedItem === item;

	return (
		<Dropdown label="Select Item" inline>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Dashboard")}
						onChange={() => handleSelect("Dashboard")}
						className="mr-2"
					/>
					<span>Dashboard</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Settings")}
						onChange={() => handleSelect("Settings")}
						className="mr-2"
					/>
					<span>Settings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Earnings")}
						onChange={() => handleSelect("Earnings")}
						className="mr-2"
					/>
					<span>Earnings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<input
						type="radio"
						name="dropdown"
						checked={isSelected("Sign out")}
						onChange={() => handleSelect("Sign out")}
						className="mr-2"
					/>
					<span>Sign out</span>
				</div>
			</Dropdown.Item>
		</Dropdown>
	);
}

export function ToggleDropdown(): JSX.Element {
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(true);
	const [switch3, setSwitch3] = useState(true);

	return (
		<Dropdown label="Select Item" inline>
			<Dropdown.Item>
				<div className="flex items-center">
					<ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />
					<span>Dashboard</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<ToggleSwitch checked={switch2} label="Toggle me (checked)" onChange={setSwitch2} />

					<span>Settings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<ToggleSwitch checked={switch1} label="Toggle me" onChange={setSwitch1} />

					<span>Earnings</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<ToggleSwitch checked={switch3} onChange={setSwitch3} />
					<span className="ml-2">Sign out</span>
				</div>
			</Dropdown.Item>
			<Dropdown.Item>
				<div className="flex items-center">
					<ToggleSwitch
						checked={false}
						disabled
						label="Toggle me (disabled)"
						onChange={() => undefined}
					/>
				</div>
			</Dropdown.Item>
		</Dropdown>
	);
}

export function ListDropdown(): JSX.Element {
	return (
		<Dropdown label="Select Item" inline>
			<Dropdown.Item>
				{" "}
				<Avatar rounded /> <span className="ml-2">List Item</span>{" "}
			</Dropdown.Item>
			<Dropdown.Item>
				{" "}
				<Avatar rounded /> <span className="ml-2">List Item</span>{" "}
			</Dropdown.Item>
			<Dropdown.Item>
				{" "}
				<Avatar rounded /> <span className="ml-2">List Item</span>{" "}
			</Dropdown.Item>
			<Dropdown.Item>
				{" "}
				<Avatar rounded /> <span className="ml-2">List Item</span>{" "}
			</Dropdown.Item>
			<Dropdown.Divider />
			<Dropdown.Item>
				<Button color="warning">Sign out</Button>
			</Dropdown.Item>
		</Dropdown>
	);
}
