// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Table as FlowbiteTable } from "flowbite-react";
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
		const { head, body, ...rest } = this._props;
		return (
			<div className="overflow-x-auto">
				<FlowbiteTable {...rest}>
					<FlowbiteTable.Head>
						{head && head.length > 0 ? (
							head.map(item => (
								<FlowbiteTable.HeadCell className={item?.className ?? ""}>
									{item?.content}
								</FlowbiteTable.HeadCell>
							))
						) : (
							<></>
						)}
					</FlowbiteTable.Head>
					<FlowbiteTable.Body className="divide-y">
						{body && body.length > 0 ? (
							body.map(row => (
								<FlowbiteTable.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
									{row?.map(cell => (
										<FlowbiteTable.Cell className={cell?.className ?? ""}>
											{cell?.content}
										</FlowbiteTable.Cell>
									))}
								</FlowbiteTable.Row>
							))
						) : (
							<></>
						)}
					</FlowbiteTable.Body>
				</FlowbiteTable>
			</div>
		);
	}
}
