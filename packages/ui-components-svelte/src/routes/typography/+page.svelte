<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Code, Heading, Helper, Label, P, Span } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Typography</Heading>
	<Heading tag="h1">&lt;Heading tag="h1"&gt;</Heading>
	<Heading tag="h2">&lt;Heading tag="h2"&gt;</Heading>
	<Heading tag="h3">&lt;Heading tag="h3"&gt;</Heading>
	<Heading tag="h4">&lt;Heading tag="h4"&gt;</Heading>
	<Heading tag="h5">&lt;Heading tag="h5"&gt;</Heading>
	<Heading tag="h6">&lt;Heading tag="h6"&gt;</Heading>
	<P>&lt;P&gt;</P>
	<Span>&lt;Span&gt;</Span>
	<Label>&lt;Label&gt;</Label>
	<Code>&lt;Code&gt;</Code>

	<Label class="flex gap-2">
		Helper
		<Helper color="primary">This is a primary description</Helper>
		<Helper color="secondary"
			>This is a secondary description (default if no color specified)</Helper
		>
		<Helper color="error">This is an error description</Helper>
		<Helper color="warning">This is a warning description</Helper>
		<Helper color="success">This is a success description</Helper>
		<Helper color="info">This is a info description</Helper>
	</Label>
</section>
