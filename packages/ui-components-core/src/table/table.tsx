// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { 
	Table as FlowbiteTable, 
	TableHead, 
	TableHeadCell, 
	TableBody, 
	TableRow, 
	TableCell 
} from "flowbite-react";
import { memo, useCallback, useMemo, type JSX } from "react";
import type { TableFooterRow, TableProps } from "./tableProps";

/**
 * Table component.
 */
export const Table = memo(({ header, body, footer, ...rest }: TableProps): JSX.Element => {
	const renderHeader = useMemo(() => {
		if (!header || header.length === 0) {
			return <TableHeadCell>No header data</TableHeadCell>;
		}

		return header.map((item, index) => (
			<TableHeadCell key={`header-${index}`} className={item?.className ?? ""}>
				{item?.content}
			</TableHeadCell>
		));
	}, [header]);

	const renderBody = useMemo(() => {
		if (!body || body.length === 0) {
			return (
				<TableRow>
					<TableCell>No data available</TableCell>
				</TableRow>
			);
		}

		return body.map((row, rowIndex) => (
			<TableRow key={`row-${rowIndex}`}>
				{row.map((cell, cellIndex) => (
					<TableCell
						key={`cell-${rowIndex}-${cellIndex}`}
						className={cell?.className ?? ""}
					>
						{cell?.content}
					</TableCell>
				))}
			</TableRow>
		));
	}, [body]);

	const renderFooterRow = useCallback(
		(row: TableFooterRow, rowIndex: number) => (
			<TableRow key={`footer-row-${rowIndex}`} className={row.className ?? ""}>
				{row.cells.map((cell, cellIndex) => (
					<TableCell
						key={`footer-cell-${rowIndex}-${cellIndex}`}
						className={`font-medium ${cell?.className ?? ""}`}
					>
						{cell.content}
					</TableCell>
				))}
			</TableRow>
		),
		[]
	);

	const renderFooter = useMemo(() => {
		if (!footer || footer.length === 0) {
			return null;
		}

		return (
			<TableBody>
				{footer.map((row, rowIndex) => renderFooterRow(row, rowIndex))}
			</TableBody>
		);
	}, [footer, renderFooterRow]);

	return (
		<FlowbiteTable {...rest}>
			<TableHead>{renderHeader}</TableHead>
			<TableBody className="divide-y">{renderBody}</TableBody>
			{renderFooter}
		</FlowbiteTable>
	);
});

Table.displayName = "Table";
