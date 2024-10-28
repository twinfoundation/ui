<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		Button,
		Heading,
		Icons,
		Pagination,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '$lib';

	const data = [
		{
			id: 1,
			description: 'My Item 1',
			dateCreated: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 2,
			description: 'My Item 2',
			dateCreated: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 3,
			description: 'My Item 3',
			dateCreated: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 4,
			description: 'My Item 4',
			dateCreated: '2024-01-01T00:00:00.000Z'
		},
		{
			id: 5,
			description: 'My Item 5',
			dateCreated: '2024-01-01T00:00:00.000Z'
		}
	];

	async function loadPrevious(): Promise<void> {}

	async function loadNext(): Promise<void> {}
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Tables</Heading>

	<Table>
		<TableHead>
			<TableHeadCell>Description</TableHeadCell>
			<TableHeadCell>Date Created</TableHeadCell>
			<TableHeadCell>Actions</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each data as item}
				<TableBodyRow>
					<TableBodyCell wrap>{item.description}</TableBodyCell>
					<TableBodyCell>{new Date(item.dateCreated).toLocaleString()}</TableBodyCell>
					<TableBodyCell actions
						><Button size="xs" color="plain"><Icons.EyeSolid /></Button><Button
							size="xs"
							color="plain"><Icons.TrashBinSolid /></Button
						></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	<Pagination {loadNext} {loadPrevious} />
</section>
