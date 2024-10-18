<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import {
		Heading,
		i18n,
		Card,
		CardHeader,
		CardFooter,
		CardBody,
		P
	} from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.cards')}</Heading>
	<Card class="h-64">
		<CardHeader title={$i18n('navigation.cards')} busy={true} />
		<CardBody>
			<P>This is some content</P>
		</CardBody>
		<CardFooter>This is the footer</CardFooter>
	</Card>
</section>
