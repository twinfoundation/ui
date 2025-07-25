// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
// Icons from Phosphor Icons (https://phosphoricons.com)
// Copyright (c) 2020-2024 Phosphor Icons
// SPDX-License-Identifier: MIT
import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@twin.org/ui-components-react/icons";
import type { IconsProps } from "@twin.org/ui-components-react/icons";
import React from "react";

// Filter out non-component exports (like IconsProps if it's exported alongside components)
const iconComponents = Object.entries(Icons)
	.filter(([name, Component]) => {
		// Exclude 'IconsProps' and any other known non-component exports by name
		if (name === "IconsProps") {
			return false;
		}
		// Check if it's a React component (function or an object with a render method for forwardRef/memo)
		return (
			typeof Component === "function" ||
			(typeof Component === "object" && Component !== null && "render" in Component)
		);
	})
	.map(([name, Component]) => ({ name, Component: Component as React.FC<IconsProps> }));

/**
 * Storybook metadata for Icons component
 */
const meta: Meta = {
	title: "Components/Icons",
	decorators: [
		Story => (
			<div
				style={{
					height: "calc(100vh - 40px)",
					overflowY: "auto",
					padding: "20px"
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
						gap: "20px"
					}}
				>
					<Story />
				</div>
			</div>
		)
	],
	parameters: {
		layout: "fullscreen"
	}
};

/**
 * Default export for the Icons story.
 * This is the main entry point for the Icons story in Storybook.
 */
export default meta;

/**
 * Defines the story type for Icon stories.
 * This type is used to define the shape of the story objects.
 */
type Story = StoryObj<typeof meta>;

/**
 * Displays all icon components in a grid with light, regular, and bold variants.
 */
export const AllIcons: Story = {
	name: "Icon Gallery",
	render: () => (
		<>
			{iconComponents.map(({ name, Component }) => (
				<div
					key={name}
					style={{
						border: "1px solid #eee",
						padding: "20px",
						borderRadius: "8px",
						textAlign: "center",
						backgroundColor: "#fff",
						boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<h3
						style={{
							marginTop: 0,
							width: "100%",
							marginBottom: "20px",
							fontSize: "16px",
							color: "#333",
							borderBottom: "1px solid #eee",
							paddingBottom: "10px"
						}}
					>
						{name}
					</h3>
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							width: "100%",
							marginBottom: "10px"
						}}
					>
						<div style={{ textAlign: "center", padding: "10px", flex: 1 }}>
							<Component type="light" width={32} height={32} color="#4A4A4A" />
							<p style={{ fontSize: "12px", marginTop: "10px", color: "#666" }}>Light</p>
						</div>
						<div style={{ textAlign: "center", padding: "10px", flex: 1 }}>
							<Component type="regular" width={32} height={32} color="#4A4A4A" />
							<p style={{ fontSize: "12px", marginTop: "10px", color: "#666" }}>Regular</p>
						</div>
						<div style={{ textAlign: "center", padding: "10px", flex: 1 }}>
							<Component type="bold" width={32} height={32} color="#4A4A4A" />
							<p style={{ fontSize: "12px", marginTop: "10px", color: "#666" }}>Bold</p>
						</div>
						<div style={{ textAlign: "center", padding: "10px", flex: 1 }}>
							<Component type="fill" width={32} height={32} color="#4A4A4A" />
							<p style={{ fontSize: "12px", marginTop: "10px", color: "#666" }}>Fill</p>
						</div>
					</div>
				</div>
			))}
		</>
	)
};
