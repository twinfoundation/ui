import React from "react";
import { Banner, Label, TextInput } from "flowbite-react";
import { HiX, HiSpeakerphone } from "react-icons/hi";
import { Button } from "@twin.org/ui-components-react";

interface BannerProps {
	logo?: string;
	text?: string;
	textlink?: string;
	showButton?: boolean;
	position?: "top" | "bottom";
	showInput?: boolean;
	onSubscribe?: () => void;
	onClose?: () => void;
}

export const BannerComponent: React.FC<BannerProps> = ({
	text,
	textlink,
	showButton,
	position = "top",
	showInput,
	onSubscribe,
	onClose
}) => {
	return (
		<Banner className={`fixed ${position === "bottom" ? "bottom-0" : "top-0"} z-50 w-full`}>
			<div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
				<div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
					{showInput ? (
						<form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
              
							<Label
								htmlFor="email"
								className="mb-2 mr-auto shrink-0 text-sm font-medium text-tertiary md:m-0 md:mb-0"
							>
								{text}
							</Label>
							<TextInput id="email" placeholder="Enter your email" required type="email" />
							{showButton && (
								<Button type="submit" onClick={onSubscribe} color={"secondary"}>
									Subscribe
								</Button>
							)}
						</form>
					) : (
						<div className="flex w-full items-center gap-1 text-center">
							<HiSpeakerphone className="h-6 w-6 text-tertiary" /> {text}{" "}
							<span className="ml-1 text-link-main">{textlink}</span>
						</div>
					)}
				</div>
				<Banner.CollapseButton
					color="gray"
					className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
					onClick={onClose}
				>
					<HiX className="h-4 w-4" />
				</Banner.CollapseButton>
			</div>
		</Banner>
	);
};
