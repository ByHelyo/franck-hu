<script lang="ts">
	import Title from '$lib/component/header/Title.svelte';
	import Nav from '$lib/component/header/Nav.svelte';
	import Menu from '$lib/component/header/Menu.svelte';

	let open = false;
</script>

<header>
	<div>
		<Title />

		<Nav bind:open />
	</div>

	<Menu bind:open />
</header>

<style>
	header {
		display: flex;
		max-width: 1200px;
		height: 64px;
		margin-inline: auto;
		padding-inline: 16px;
		font-size: 18px;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
</style>
