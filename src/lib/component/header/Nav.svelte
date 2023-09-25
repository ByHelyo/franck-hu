<script lang="ts">
	import { theme } from '$lib/store/theme.js';
	import ButtonImg from '$lib/component/utils/ButtonImg.svelte';
	import type { Header } from '$lib/type/header/Menu';

	export let open: boolean;

	function handleThemeButton() {
		if ($theme === 'light') {
			$theme = 'dark';
			window.document.body.classList.toggle('dark-theme');
		} else {
			$theme = 'light';
			window.document.body.classList.toggle('dark-theme');
		}
	}

	let links: Header.LinkNavigation[] = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Repositories',
			href: '/repositories'
		}
	];
</script>

<nav>
	{#each links as link}
		<a href={link.href}>{link.name}</a>
	{/each}
	{#if $theme === 'light'}
		<ButtonImg src="misc/sun.svg" on:click={handleThemeButton} />
	{:else if $theme === 'dark'}
		<ButtonImg src="misc/moon.svg" on:click={handleThemeButton} />
	{/if}

	{#if open}
		<ButtonImg
			src="/misc/menu-open.svg"
			on:click={() => {
				open = !open;
			}}
		/>
	{:else}
		<ButtonImg
			src="/misc/menu.svg"
			on:click={() => {
				open = !open;
			}}
		/>
	{/if}
</nav>

<style lang="scss">
	@import 'variable.scss';

	nav {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	a {
		display: inline-block;
		padding: 11.55px;
		border-radius: 4px;

		&:hover {
			background: $light-background-primary-hover;
		}
	}

	:global(body.dark-theme) {
		a {
			&:hover {
				background: $dark-background-primary-hover;
			}
		}
	}
</style>
