// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Card as FlowbiteCard } from "flowbite-react";
import { useMemo, memo, type JSX } from "react";
import type { CardProps } from "./cardProps";
import { Button } from "../button/button";

/**
 * Card component.
 */
export const Card = memo(
	({ children, content, href, horizontal, buttons, image }: CardProps): JSX.Element => {
		const renderButtons = useMemo(() => {
			if (!buttons?.length) {
				return null;
			}

			return (
				<div className="flex flex-wrap gap-2">
					{buttons.map((button, index) => (
						<Button
							key={`${button.label}-${index}`}
							buttonText={button.label}
							color={button.color ?? "primary"}
							size="md"
							showButtonText={true}
							icon={button.svg}
							showRightIcon={Boolean(button.svg)}
						/>
					))}
				</div>
			);
		}, [buttons]);

		return (
			<FlowbiteCard
				href={href}
				className="max-w-sm"
				horizontal={horizontal}
				imgSrc={image?.imgSrc}
				imgAlt={image?.imgAlt}
			>
				{children && (
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{children}
					</h5>
				)}
				{content && <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>}
				{renderButtons}
			</FlowbiteCard>
		);
	}
);

Card.displayName = "Card";
