<script>import { Is, Validation } from "@twin.org/core";
import { Button, Card, Heading, P, Spinner, i18n } from "../..";
export let title;
export let actionButtonLabel = $i18n("actions.save");
export let actionSuccessLabel = $i18n("actions.saveSuccess");
export let closeButtonLabel = $i18n("actions.close");
export let validationMethod;
export let actionMethod = void 0;
export let closeMethod = void 0;
export let validationErrors;
export let busy = false;
export let result = "";
export let resultIsError = false;
export let resultTimeout = 5e3;
let submitResultTimeout;
function resetState() {
  result = "";
  resultIsError = false;
  clearTimeout(submitResultTimeout);
  validationErrors = {};
  busy = false;
}
async function handleSubmit() {
  resetState();
  if (Is.function(validationMethod)) {
    const validationFailures = [];
    const newErrors = {};
    await validationMethod(validationFailures);
    Validation.toPropertyMap(validationFailures, newErrors);
    validationErrors = newErrors;
  }
  if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
    busy = true;
    const actionResult = await actionMethod();
    busy = false;
    if (Is.stringValue(actionResult)) {
      result = actionResult;
      resultIsError = true;
    } else if (Is.stringValue(actionSuccessLabel)) {
      result = actionSuccessLabel;
    }
    if (resultTimeout > 0) {
      submitResultTimeout = setTimeout(resetState, resultTimeout);
    }
  }
}
async function handleClose() {
  resetState();
  if (Is.function(closeMethod)) {
    busy = true;
    await closeMethod();
    busy = false;
  }
}
</script>

<Card class="w-96">
	<form class="flex flex-col gap-4">
		<div class="flex flex-row justify-between gap-5">
			<Heading tag="h5">{title}</Heading>
			{#if busy}
				<Spinner />
			{/if}
		</div>
		<slot name="fields"></slot>
		{#if result.length > 0}
			<P
				class={`whitespace-pre-line break-all text-sm ${resultIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
			>
				{result}
			</P>
		{/if}
		<div class="flex flex-row gap-2">
			{#if Is.function(closeMethod)}
				<Button
					type="button"
					class="w-full"
					outline
					on:click={async () => handleClose()}
					disabled={busy}
					>{closeButtonLabel}
				</Button>
			{/if}
			{#if Is.function(actionMethod)}
				<Button type="button" class="w-full" on:click={async () => handleSubmit()} disabled={busy}
					>{actionButtonLabel}
				</Button>
			{/if}
		</div>
		<slot name="after-action"></slot>
	</form>
</Card>
