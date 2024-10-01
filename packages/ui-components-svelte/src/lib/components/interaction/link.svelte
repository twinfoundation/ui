<script lang="ts">
	export let disabled: boolean = false;
</script>

<a
	{...$$restProps}
	href={$$restProps.href}
	aria-disabled={disabled}
	class={`text-primary-500 focus:ring-primary-100 focus:border-primary-500 dark:focus:ring-primary-900 rounded outline-none focus:ring-4 ${$$restProps.class ?? ''} ${disabled ? 'cursor-not-allowed opacity-50 hover:no-underline' : 'cursor-pointer hover:underline'}`}
>
	<slot />
</a>
