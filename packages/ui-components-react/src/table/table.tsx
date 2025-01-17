// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Table as FlowbiteTable, Checkbox as FlowbiteCheckbox } from "flowbite-react";
import React, { type ReactNode } from "react";
import { TablePropTypes, type TableProps } from "./tableProps";

/**
 * Table component.
 */
export class Table extends React.Component<TableProps> {
	/**
	 * The prop types of the component.
	 */
	public static propTypes = TablePropTypes;

	/**
	 * The props of the component.
	 */
	private readonly _props: TableProps;

	/**
	 * Create a new instance of Table.
	 * @param props The props of the component.
	 */
	constructor(props: TableProps) {
		super(props);
		this._props = props;
	}

	/**
	 * Render the component.
	 * @returns The component to render.
	 */
	public render(): ReactNode {
		const { ...rest } = this._props;
		return (
			<div className="overflow-x-auto">
				<FlowbiteTable {...rest}>
					<FlowbiteTable.Head>
						<FlowbiteTable.HeadCell className="p-4">
							<FlowbiteCheckbox />
						</FlowbiteTable.HeadCell>
						<FlowbiteTable.HeadCell>Product name</FlowbiteTable.HeadCell>
						<FlowbiteTable.HeadCell>Color</FlowbiteTable.HeadCell>
						<FlowbiteTable.HeadCell>Category</FlowbiteTable.HeadCell>
						<FlowbiteTable.HeadCell>Price</FlowbiteTable.HeadCell>
						<FlowbiteTable.HeadCell>
							<span className="sr-only">Edit</span>
						</FlowbiteTable.HeadCell>
					</FlowbiteTable.Head>
					<FlowbiteTable.Body className="divide-y">
						<FlowbiteTable.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<FlowbiteTable.Cell className="p-4">
								<FlowbiteCheckbox />
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{'Apple MacBook Pro 17"'}
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>Sliver</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>Laptop</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>$2999</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>
								<a
									href="#"
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Edit
								</a>
							</FlowbiteTable.Cell>
						</FlowbiteTable.Row>
						<FlowbiteTable.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<FlowbiteTable.Cell className="p-4">
								<FlowbiteCheckbox />
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Microsoft Surface Pro
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>White</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>Laptop PC</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>$1999</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>
								<a
									href="#"
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Edit
								</a>
							</FlowbiteTable.Cell>
						</FlowbiteTable.Row>
						<FlowbiteTable.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<FlowbiteTable.Cell className="p-4">
								<FlowbiteCheckbox />
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
								Magic Mouse 2
							</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>Black</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>Accessories</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>$99</FlowbiteTable.Cell>
							<FlowbiteTable.Cell>
								<a
									href="#"
									className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
								>
									Edit
								</a>
							</FlowbiteTable.Cell>
						</FlowbiteTable.Row>
					</FlowbiteTable.Body>
				</FlowbiteTable>
			</div>
		);
	}
}
