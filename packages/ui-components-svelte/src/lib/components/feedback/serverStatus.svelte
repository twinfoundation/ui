<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is } from '@twin.org/core';
	import { Badge, i18n } from '$lib';

	export let serverHealthStatus: 'error' | 'warning' | 'ok' | undefined;
	export let serverName: string | undefined = '';
	export let serverVersion: string | undefined = '0.0';
</script>

{#if !Is.empty(serverHealthStatus)}
	{#if serverHealthStatus !== 'error'}
		<Badge color={serverHealthStatus === 'ok' ? 'green' : 'yellow'} large
			>{$i18n('serverStatus.api')}: {serverName} v{serverVersion}</Badge
		>
	{:else}
		<Badge color="red" large
			>{$i18n('serverStatus.api')}: {$i18n('serverStatus.notConnected')}</Badge
		>
	{/if}
{/if}
