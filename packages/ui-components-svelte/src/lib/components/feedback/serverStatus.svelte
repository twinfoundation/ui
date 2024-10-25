<script lang="ts">
	// Copyright 2024 IOTA Stiftung.
	// SPDX-License-Identifier: Apache-2.0.
	import { Is } from '@twin.org/core';
	import { Badge, i18n } from '$lib';

	interface Props {
		serverHealthStatus?: 'error' | 'warning' | 'success';
		serverName?: string;
		serverVersion?: string;
	}

	const { serverHealthStatus, serverName = '', serverVersion = '0.0' }: Props = $props();
</script>

{#if !Is.empty(serverHealthStatus)}
	{#if serverHealthStatus !== 'error'}
		<Badge color={serverHealthStatus} large
			>{$i18n('components.serverStatus.api')}: {serverName} v{serverVersion}</Badge
		>
	{:else}
		<Badge color="error" large
			>{$i18n('components.serverStatus.api')}: {$i18n(
				'components.serverStatus.notConnected'
			)}</Badge
		>
	{/if}
{/if}
