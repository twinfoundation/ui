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
async function handleSubmit() {
  result = "";
  resultIsError = false;
  clearTimeout(submitResultTimeout);
  validationErrors = {};
  if (Is.function(validationMethod)) {
    const validationFailures = [];
    const newErrors = {};
    await validationMethod(validationFailures);
    Validation.toPropertyMap(validationFailures, newErrors);
    validationErrors = newErrors;
  }
  if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
    busy = true;
    const timeStart = Date.now();
    result = await actionMethod() ?? "";
    resultIsError = Is.stringValue(result);
    if (Date.now() - timeStart > 1e3) {
      await showResult();
    } else {
      setTimeout(showResult, 1e3);
    }
  }
}
async function handleClose() {
  result = "";
  resultIsError = false;
  clearTimeout(submitResultTimeout);
  validationErrors = {};
  if (Is.function(closeMethod)) {
    busy = true;
    await closeMethod();
    busy = false;
  }
}
async function showResult() {
  busy = false;
  if (!resultIsError && Is.stringValue(actionSuccessLabel)) {
    result = actionSuccessLabel;
  }
  if (resultTimeout > 0) {
    submitResultTimeout = setTimeout(() => {
      result = "";
    }, resultTimeout);
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
		<P
			class={`whitespace-pre-line text-sm ${resultIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
		>
			{result}
		</P>
		<slot name="after-result"></slot>
	</form>
</Card>
