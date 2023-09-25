<script lang="ts">
	import Title from '$lib/component/home/Title.svelte';
	import Links from '$lib/component/home/Links.svelte';
	import Head from '$lib/component/head/Head.svelte';
</script>

<Head title="Franck Hu | Home" />

<main>
	<img src="me.jpg" alt="" />

	<Title />

	<Links />
</main>

<style>
	main {
		padding-top: 256px;
	}

	img {
		width: 200px;
		height: 200px;

		margin: auto;
		display: block;
		border: 2px solid #ffffff;
		border-radius: 50%;
	}
</style>
