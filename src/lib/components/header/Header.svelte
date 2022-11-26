<script>
	import Title from '$lib/components/header/Title.svelte';
	import Buttons from '$lib/components/header/Buttons.svelte';
	import Menu from '$lib/components/header/Menu.svelte';

	let open = false;
</script>

<header>
	<nav>
		<div>
			<Title />

			<Buttons bind:open />
		</div>

		<Menu bind:open />
	</nav>
</header>

<style>
	header {
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
