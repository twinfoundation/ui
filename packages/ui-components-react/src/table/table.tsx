// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { Table as FlowbiteTable } from "flowbite-react";
import { memo, useCallback, useMemo, type JSX } from "react";
import type { TableFooterRow, TableProps } from "./tableProps";

/**
 * Table component.
 */
export const Table = memo(({ header, body, footer, ...rest }: TableProps): JSX.Element => {
	const renderHeader = useMemo(() => {
		if (!header || header.length === 0) {
			return <FlowbiteTable.HeadCell>No header data</FlowbiteTable.HeadCell>;
		}

		return header.map((item, index) => (
			<FlowbiteTable.HeadCell key={`header-${index}`} className={item?.className ?? ""}>
				{item?.content}
			</FlowbiteTable.HeadCell>
		));
	}, [header]);

	const renderBody = useMemo(() => {
		if (!body || body.length === 0) {
			return (
				<FlowbiteTable.Row>
					<FlowbiteTable.Cell>No data available</FlowbiteTable.Cell>
				</FlowbiteTable.Row>
			);
		}

		return body.map((row, rowIndex) => (
			<FlowbiteTable.Row key={`row-${rowIndex}`}>
				{row.map((cell, cellIndex) => (
					<FlowbiteTable.Cell
						key={`cell-${rowIndex}-${cellIndex}`}
						className={cell?.className ?? ""}
					>
						{cell?.content}
					</FlowbiteTable.Cell>
				))}
			</FlowbiteTable.Row>
		));
	}, [body]);

	const renderFooterRow = useCallback(
		(row: TableFooterRow, rowIndex: number) => (
			<FlowbiteTable.Row key={`footer-row-${rowIndex}`} className={row.className ?? ""}>
				{row.cells.map((cell, cellIndex) => (
					<FlowbiteTable.Cell
						key={`footer-cell-${rowIndex}-${cellIndex}`}
						className={`font-medium ${cell?.className ?? ""}`}
					>
						{cell.content}
					</FlowbiteTable.Cell>
				))}
			</FlowbiteTable.Row>
		),
		[]
	);

	const renderFooter = useMemo(() => {
		if (!footer || footer.length === 0) {
			return null;
		}

		return (
			<FlowbiteTable.Body>
				{footer.map((row, rowIndex) => renderFooterRow(row, rowIndex))}
			</FlowbiteTable.Body>
		);
	}, [footer, renderFooterRow]);

	return (
		<FlowbiteTable {...rest}>
			<FlowbiteTable.Head>{renderHeader}</FlowbiteTable.Head>
			<FlowbiteTable.Body className="divide-y">{renderBody}</FlowbiteTable.Body>
			{renderFooter}
		</FlowbiteTable>
	);
});

Table.displayName = "Table";
