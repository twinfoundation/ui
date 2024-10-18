<script lang="ts">
	import { Fileupload } from 'flowbite-svelte';
	export let files: FileList | undefined;
</script>

<Fileupload
	{...$$props}
	class={`focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 border-neutral-300 outline-none focus:ring-4 disabled:cursor-not-allowed ${$$props.class ?? ''} `}
	bind:files
></Fileupload>
