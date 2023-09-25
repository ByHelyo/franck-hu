<script lang="ts">
	import { theme } from '$lib/store/theme.js';
	import Button from '$lib/component/header/Button.svelte';
	import Menu from '$lib/component/header/Menu.svelte';
	import Link from '$lib/component/header/Link.svelte';
	import type { LinkInfo } from '$lib/type/header/menu';

	let open = false;

	let links: LinkInfo[] = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Repositories',
			href: '/repositories'
		}
	];

	function handleThemeButton() {
		if ($theme === 'light') {
			$theme = 'dark';
			window.document.body.classList.toggle('dark-theme');
		} else {
			$theme = 'light';
			window.document.body.classList.toggle('dark-theme');
		}
	}
</script>

<nav>
	{#each links as link}
		<Link href={link.href} content={link.name} />
	{/each}

	{#if $theme === 'light'}
		<Button src="misc/sun.svg" on:click={handleThemeButton} />
	{:else if $theme === 'dark'}
		<Button src="misc/moon.svg" on:click={handleThemeButton} />
	{/if}

	<div class="mobile-menu" on:close={() => (open = false)}>
		{#if open}
			<Button
				src="/misc/menu-open.svg"
				on:click={() => {
					open = !open;
				}}
			/>
		{:else}
			<Button
				src="/misc/menu.svg"
				on:click={() => {
					open = !open;
				}}
			/>
		{/if}

		<Menu {links} bind:open />
	</div>
</nav>

<style lang="scss">
	@import 'variable.scss';

	nav {
		display: flex;
		gap: 6px;
	}

	.mobile-menu {
		display: none;
	}

	@media (max-width: 640px) {
		.mobile-menu {
			display: block;
		}
	}
</style>
