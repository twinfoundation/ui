<script>import { Is } from "@twin.org/core";
import { Helper, i18n } from "../..";
export let validationErrors;
</script>

{#if Is.arrayValue(validationErrors)}
	<Helper class="mt-2" color="red">
		{#each validationErrors as validationError}
			{$i18n(`error.${validationError.reason}`, validationError.properties)}
		{/each}
	</Helper>
{/if}
