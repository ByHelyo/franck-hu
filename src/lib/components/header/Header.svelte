<script>
	import Buttons from '$lib/components/header/Buttons.svelte';
	import Menu from '$lib/components/header/Menu.svelte';

	let open = false;
</script>

<nav>
	<div>
		<h1>Franck Hu</h1>

		<Buttons bind:open />
	</div>

	<Menu bind:open />
</nav>

<style>
	nav {
		left: 0;
		right: 0;
		padding-inline: 16px;

		position: absolute;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
