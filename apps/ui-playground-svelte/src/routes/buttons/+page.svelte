<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, Button, i18n, Link } from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.buttons')}</Heading>
	<Button>Button</Button>
	<Button disabled>disabled</Button>
	<div>
		<Button size="xs">size=xs</Button>
		<Button size="sm">size=sm</Button>
		<Button size="md">size=md</Button>
		<Button size="lg">size=lg</Button>
		<Button size="xl">size=xl</Button>
	</div>
	<Button outline>outline</Button>
	<Button outline disabled>outline disabled</Button>
	<Link to="/buttons/primary">Link</Link>
	<Link to="/buttons/primary" disabled>disabled</Link>

	<div>
		<Button color="red">color=red</Button>
		<Button color="red" outline>color=red outline</Button>
	</div>

	<div>
		<Button color="yellow">color=yellow</Button>
		<Button color="yellow" outline>color=yellow outline</Button>
	</div>

	<div>
		<Button color="green">color=green</Button>
		<Button color="green" outline>color=green outline</Button>
	</div>
</section>
