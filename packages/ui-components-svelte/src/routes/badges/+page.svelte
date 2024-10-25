<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Badge, Heading } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Badges</Heading>
	<Badge>plain (default)</Badge>
	<Badge large>plain large</Badge>
	<Badge color="primary">color=primary</Badge>
	<Badge color="secondary">color=secondary</Badge>
	<Badge color="error">color=error</Badge>
	<Badge color="warning">color=warning</Badge>
	<Badge color="success">color=success</Badge>
	<Badge color="info">color=info</Badge>
</section>
