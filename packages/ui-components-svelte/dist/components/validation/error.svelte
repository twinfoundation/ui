<script>import { Is } from "@twin.org/core";
import { Helper } from "../..";
export let error;
</script>

{#if Is.stringValue(error)}
	<Helper color="red" class="whitespace-pre-line">
		{error}
	</Helper>
{/if}
