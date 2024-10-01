<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, i18n, P, Spinner } from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.spinner')}</Heading>
	<P>Default Size = 7</P>
	<Spinner />
	<P>Size = 12</P>
	<Spinner size={12} />
</section>
