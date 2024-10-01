<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, Button, i18n, Link } from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.buttons')}</Heading>
	<Button>Button</Button>
	<Button disabled>Button Disabled</Button>
	<div>
		<Button size="xs">size xs</Button>
		<Button size="sm">size sm</Button>
		<Button size="md">size md</Button>
		<Button size="lg">size lg</Button>
		<Button size="xl">size xl</Button>
	</div>
	<Button outline>Outline</Button>
	<Button outline disabled>Outline Disabled</Button>
	<Link to="/buttons/primary">Link</Link>
	<Link to="/buttons/primary" disabled>Link Disabled</Link>
</section>
