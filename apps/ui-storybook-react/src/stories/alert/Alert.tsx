import React from "react";
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Button } from "@twin.org/ui-components-react";

interface DynamicAlertProps {
	color?: "success" | "info" | "warning" | "error";
	onDismiss?: () => void;
	additionalContent?: React.ReactNode;
	message: string;
	icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const DynamicAlert: React.FC<DynamicAlertProps> = ({
	color = "info",
	onDismiss = () => alert("Alert dismissed!"),
	additionalContent = <ExampleAdditionalContent color={color} />,
	message,
	icon: Icon = HiInformationCircle,
}) => {
	// Define unique class names for each color
	const colorClass = getColorClass(color);

	return (
		<Alert
			color={color}
			icon={() => <Icon />}
			onDismiss={onDismiss}
			rounded
			additionalContent={additionalContent}
			className={colorClass}
		>
			<span className="ml-2 font-medium">{message}</span>
		</Alert>
	);
};

// Helper function to determine class names based on color
const getColorClass = (color: "success" | "info" | "warning" | "error") => {
	switch (color) {
		case "success":
			return "bg-surface-success dark:bg-surface-success-dark text-success";
		case "info":
			return "bg-surface-information dark:bg-surface-information-dark text-information";
		case "warning":
			return "bg-surface-warning dark:bg-surface-warning-dark text-warning";
		case "error":
			return "bg-surface-error dark:bg-surface-error-dark text-error";
		default:
			return "";
	}
};

// Additional content component
export const ExampleAdditionalContent: React.FC<{
	color?: "success" | "info" | "warning" | "error";
}> = ({ color = "info" }) => (
	<>
		<div className="mb-4 mt-2 text-sm">
			More info about this {color} alert goes here. This example text is going to run a bit longer so
			that you can see how spacing within an alert works with this kind of content.
		</div>
		<div className="flex">
			<Button type="button" color={color}>
				<HiEye className="-ml-0.5 mr-2 h-4 w-4" />
				View more
			</Button>
		</div>
	</>
);
