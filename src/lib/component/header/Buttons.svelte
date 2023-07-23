<script lang="ts">
	import { theme } from '$lib/store/theme.js';
	import ButtonImg from '$lib/component/utils/ButtonImg.svelte';

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
</script>

<div>
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
</div>
