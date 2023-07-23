<script lang="ts">
	import Title from '$lib/component/header/Title.svelte';
	import Buttons from '$lib/component/header/Buttons.svelte';
	import Menu from '$lib/component/header/Menu.svelte';

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
		padding-block: 8px;

		position: absolute;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
