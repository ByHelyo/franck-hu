<script lang="ts">
	import { theme } from '$lib/store/theme.js';
	import Button from '$lib/component/header/Button.svelte';
	import Menu from '$lib/component/header/Menu.svelte';
	import Link from '$lib/component/header/Link.svelte';
	import { headerLinks } from '$lib/const/link';

	let open = false;

	function handleThemeButton() {
		if ($theme === 'light') {
			$theme = 'dark';
			document.documentElement.classList.toggle('dark');
		} else {
			$theme = 'light';
			document.documentElement.classList.toggle('dark');
		}
	}
</script>

<nav>
	{#each headerLinks as anchor}
		<Link href={anchor.href} content={anchor.content} />
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

		<Menu bind:open />
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
