<script>
	import Buttons from '$lib/components/header/Buttons.svelte';
	import Menu from '$lib/components/header/Menu.svelte';

	let open = false;
</script>

<header>
	<nav>
		<div>
			<h1>&lt; <span>Franck</span> Hu /&gt;</h1>

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

	span {
		padding: 2px;
		border-radius: 6px;

		display: inline-block;
		background-image: radial-gradient(
			circle 248px at center,
			#16d9e3 0%,
			#30c7ec 47%,
			#46aef7 100%
		);
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
