<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, P, Spinner } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">Spinner</Heading>
	<P>Default Size = 7</P>
	<Spinner />
	<P>Size = 12</P>
	<Spinner size={12} />
</section>
