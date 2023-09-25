<script lang="ts">
	import Title from '$lib/component/header/Title.svelte';
	import Buttons from '$lib/component/header/Buttons.svelte';
	import Menu from '$lib/component/header/Menu.svelte';

	let open = false;
</script>

<header>
	<div>
		<Title />

		<Buttons bind:open />
	</div>

	<Menu bind:open />
</header>

<style>
	header {
		height: 60px;
		font-size: 18px;
		padding-inline: 16px;
		max-width: 1200px;
		margin-inline: auto;
		display: flex;
	}

	div {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
