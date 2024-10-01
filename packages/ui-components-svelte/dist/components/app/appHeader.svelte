<script>import { Avatar, i18n, Link, Navbar, NavBrand, Span } from "../..";
export let initials = "";
export let navRoute = "";
export let isAuthenticated = false;
</script>

<svelte:head>
	<title>{$i18n('app.name')}</title>
</svelte:head>

<Navbar
	fluid={true}
	class=" dark:bg-cosmic-indigo-600 fixed start-0 top-0 z-20 h-16 w-full min-w-72 border-b border-neutral-200 px-5 py-3 sm:h-20 dark:border-neutral-900"
>
	<NavBrand href="/" class="p-2">
		<img src="/images/logo-primary.svg" class="me-3 h-6 sm:h-9" alt={$i18n('app.name')} />
		<Span
			class="font-hdcoltonwidesemibold self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>{$i18n('app.name')}</Span
		>
	</NavBrand>
	{#if isAuthenticated}
		<Link href={navRoute} class="rounded-full"
			><Avatar class="cursor-pointer">{initials}</Avatar></Link
		>
	{/if}
</Navbar>
