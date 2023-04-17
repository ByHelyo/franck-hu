<script>
	import { theme } from '$lib/stores/theme.js';
	import ButtonImg from '$lib/components/utils/ButtonImg.svelte';

	export let open;

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
		<ButtonImg src="misc/moon.svg" on:click={handleThemeButton} dark={false} />
	{/if}

	<ButtonImg src="/misc/menu.svg" on:click={() => (open = !open)} />
</div>
