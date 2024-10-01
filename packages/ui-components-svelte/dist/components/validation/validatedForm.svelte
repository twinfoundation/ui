<script>import { Is, Validation } from "@twin.org/core";
import { Button, Card, Heading, P, Spinner, i18n } from "../..";
export let titleResource;
export let actionButtonResource = "actions.save";
export let actionButtonBusyResource = "actions.saving";
export let actionSuccessResource = "actions.saveSuccess";
export let validationMethod;
export let actionMethod;
export let validationErrors;
export let isBusy = false;
let submitResult = "";
let submitResultIsError = false;
let submitResultTimeout;
async function handleSubmit() {
  submitResult = "";
  submitResultIsError = false;
  clearTimeout(submitResultTimeout);
  if (Is.function(validationMethod)) {
    const validationFailures = [];
    const newErrors = {};
    await validationMethod(validationFailures);
    Validation.toPropertyMap(validationFailures, newErrors);
    validationErrors = newErrors;
  }
  if (Object.keys(validationErrors).length === 0 && Is.function(actionMethod)) {
    isBusy = true;
    const timeStart = Date.now();
    submitResult = await actionMethod() ?? "";
    submitResultIsError = Is.stringValue(submitResult);
    if (Date.now() - timeStart > 1e3) {
      await showResult();
    } else {
      setTimeout(showResult, 1e3);
    }
  }
}
async function showResult() {
  isBusy = false;
  if (!submitResultIsError && Is.stringValue(actionSuccessResource)) {
    submitResult = $i18n(actionSuccessResource);
  }
  submitResultTimeout = setTimeout(() => {
    submitResult = "";
  }, 5e3);
}
</script>

<Card class="w-96">
	<form class="flex flex-col gap-4">
		<div class="flex flex-row justify-between gap-5">
			<Heading tag="h5">{$i18n(titleResource)}</Heading>
			{#if isBusy}
				<Spinner />
			{/if}
		</div>
		<slot name="fields"></slot>
		<Button type="button" class="w-full" on:click={async () => handleSubmit()} disabled={isBusy}
			>{$i18n(isBusy ? actionButtonBusyResource : actionButtonResource)}
		</Button>
		<slot name="after-action"></slot>
		<P
			class={`whitespace-pre-line text-sm ${submitResultIsError ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400'}`}
		>
			{submitResult}
		</P>
		<slot name="after-result"></slot>
	</form>
</Card>
