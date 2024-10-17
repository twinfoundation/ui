<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		Button,
		Heading,
		i18n,
		Pagination,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from '@twin.org/ui-components-svelte';
	import { EyeSolid, TrashBinSolid } from 'flowbite-svelte-icons';

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
	<Heading tag="h3">{$i18n('navigation.tables')}</Heading>

	<Table>
		<TableHead>
			<TableHeadCell>{$i18n('common.labels.description')}</TableHeadCell>
			<TableHeadCell>{$i18n('common.labels.dateCreated')}</TableHeadCell>
			<TableHeadCell>{$i18n('common.labels.actions')}</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each data as item}
				<TableBodyRow>
					<TableBodyCell wrap>{item.description}</TableBodyCell>
					<TableBodyCell>{new Date(item.dateCreated).toLocaleString()}</TableBodyCell>
					<TableBodyCell actions
						><Button size="xs" outline><EyeSolid /></Button><Button size="xs" outline
							><TrashBinSolid /></Button
						></TableBodyCell
					>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	<Pagination {loadNext} {loadPrevious} />
</section>
