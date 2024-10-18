<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Heading, i18n, QR } from '@twin.org/ui-components-svelte';
</script>

<section class="flex flex-col items-start gap-5">
	<Heading tag="h3">{$i18n('navigation.qr')}</Heading>
	<QR qrData="https://twindev.org" label={$i18n('navigation.qr')} dimensions={128} />
</section>
