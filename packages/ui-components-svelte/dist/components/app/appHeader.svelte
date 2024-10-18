<script>import { Avatar, Link, Navbar, NavBrand, Span } from "../..";
export let initials = "";
export let profileNavRoute = "";
export let title = "";
export let authenticated = false;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Navbar
	fluid={true}
	class=" dark:bg-cosmic-indigo-600 z-20 min-w-96 flex-nowrap overflow-hidden border-b border-neutral-200 px-5 py-3 dark:border-neutral-900"
>
	<div class="flex w-full flex-row justify-between gap-10">
		<NavBrand href="/" class="p-2">
			<img src="/images/logo-primary.svg" class="me-3 h-6 sm:h-9" alt={title} />
			<Span
				class="font-hdcoltonwidesemibold self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>{title}</Span
			>
		</NavBrand>
		{#if authenticated}
			<Link href={profileNavRoute} class="rounded-full"
				><Avatar class="cursor-pointer">{initials}</Avatar></Link
			>
		{/if}
	</div>
</Navbar>
