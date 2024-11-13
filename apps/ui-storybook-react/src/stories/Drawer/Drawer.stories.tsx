import {
	ContactDrawer,
	DrawerWithButton,
	DrawerWithSidebar,
	EventDrawer,
	LeftDrawer,
	RightDrawer,
  BottomDrawer,
  SwipeableEdge
} from "./Drawer";

export default {
	title: "Components/Drawer",
	component: DrawerWithButton
};

export const DrawerButton = () => <DrawerWithButton />;
DrawerButton.storyName = "Drawer with Button";

export const DrawerSidebar = () => <DrawerWithSidebar />;
DrawerSidebar.storyName = "Drawer with Sidebar";

export const ContactUsDrawer = () => <ContactDrawer />;
ContactUsDrawer.storyName = "Contact Us Drawer";

export const EventCreationDrawer = () => <EventDrawer />;
EventCreationDrawer.storyName = "Event Creation Drawer";

export const LeftPositionedDrawer = () => <LeftDrawer />;
LeftPositionedDrawer.storyName = "Left Positioned Drawer";

export const RightPositionedDrawer = () => <RightDrawer />;
RightPositionedDrawer.storyName = "Right Positioned Drawer";

export const ShowBottomDrawer = () => <BottomDrawer />;
ShowBottomDrawer.storyName = "Bottom Drawer";

export const ShowSwipeableDrawer = () => <SwipeableEdge />;
ShowSwipeableDrawer.storyName = "Swipeable Drawer"