<script lang="ts">
	import { Modal } from 'flowbite-svelte';
</script>

<Modal {...$$props} class={`${$$props.class ?? ''}`} classFooter="justify-end" dismissable={false}>
	<slot></slot>
	<slot name="footer" slot="footer"></slot>
</Modal>
