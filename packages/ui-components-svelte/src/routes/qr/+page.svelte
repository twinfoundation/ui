<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, QR } from '$lib';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">QR</Heading>
	<QR qrData="https://twindev.org" label="https://twindev.org" dimensions={128} />
</section>
