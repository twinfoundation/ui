import {
	DropdownDivider,
	DropdownItemsWithIcon,
	DropdownHeader,
	ItemDropdown,
	DefaultCheckDropdown,
	DefaultRadioDropdown,
	RadioDropdownSelect,
	ToggleDropdown,
	ListDropdown,
} from "./Dropdown";

export default {
	title: "Components/Dropdown",
	component: DropdownDivider
};

export const Divider = () => <DropdownDivider />;
Divider.storyName = "Divider";

export const WithIcon = () => <DropdownItemsWithIcon />;
WithIcon.storyName = "With Icon";

export const Header = () => <DropdownHeader />;
Header.storyName = "Header";

export const DefultItemCheck = () => <DefaultCheckDropdown />;
DefultItemCheck.storyName = "Default Checkbox Dropdown";

export const CheckboxDropdown = () => <ItemDropdown />;
CheckboxDropdown.storyName = "Checkbox Dropdown";

export const RadioDropdown = () => <DefaultRadioDropdown />;
RadioDropdown.storyName = "Radio Dropdown"

export const RadioDropdownSelects = () => <RadioDropdownSelect />;
RadioDropdownSelects.storyName = "Radio Dropdown Select"

export const Toggle = () => <ToggleDropdown />;
Toggle.storyName = "Toggle"

export const List = () => <ListDropdown />;
List.storyName = "List"