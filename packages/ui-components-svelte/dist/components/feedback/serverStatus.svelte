<script>import { Is } from "@twin.org/core";
import { Badge, i18n } from "../..";
export let serverHealthStatus;
export let serverName = "";
export let serverVersion = "0.0";
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
