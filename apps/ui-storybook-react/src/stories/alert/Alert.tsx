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
	icon: Icon = HiInformationCircle
}) => {
	return (
		<Alert
			color={color}
			icon={() => <Icon />}
			onDismiss={onDismiss}
			rounded
			additionalContent={additionalContent}
		>
			<span className="ml-2">{message}</span>
		</Alert>
	);
};

// Additional content component
export const ExampleAdditionalContent: React.FC<{
	color?: "success" | "info" | "warning" | "error";
}> = ({ color = "info" }) => (
	<>
		<div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">
			More info about this info alert goes here. This example text is going to run a bit longer so
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
