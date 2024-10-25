<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Card, CardBody, CardFooter, CardHeader, Heading, P } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Cards</Heading>
	<Card class="h-64">
		<CardHeader title="Cards" busy={true} />
		<CardBody>
			<P>This is some content</P>
		</CardBody>
		<CardFooter>This is the footer</CardFooter>
	</Card>
</section>
