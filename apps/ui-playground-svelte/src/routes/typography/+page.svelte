<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, i18n, P, Span, Label, Code } from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.typography')}</Heading>
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
</section>
