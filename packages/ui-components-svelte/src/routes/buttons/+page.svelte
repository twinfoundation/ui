<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Button, Heading } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Buttons</Heading>
	<Button>Button</Button>
	<Button disabled>disabled</Button>
	<div class="flex flex-col gap-2 md:flex-row md:items-center">
		<Button size="xs">size=xs</Button>
		<Button size="sm">size=sm</Button>
		<Button size="md">size=md</Button>
		<Button size="lg">size=lg</Button>
		<Button size="xl">size=xl</Button>
	</div>
	<Button color="plain">color=plain</Button>
	<Button color="secondary">color=secondary</Button>
	<Button color="error">color=error</Button>
	<Button color="warning">color=warning</Button>
	<Button color="success">color=success</Button>
	<Button color="info">color=info</Button>
</section>
