<script lang="ts">
	import Title from '$lib/component/header/Title.svelte';
	import Nav from '$lib/component/header/Nav.svelte';
</script>

<header>
	<Title />

	<Nav />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 64px;
		padding-inline: 16px;
		font-size: 18px;
	}
</style>
