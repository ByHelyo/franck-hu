<script lang="ts">
	import Title from '$lib/components/home/Title.svelte';
	import Links from '$lib/components/home/Links.svelte';
	import Head from '$lib/components/head/Head.svelte';
</script>

<Head title="Franck Hu | Home" />

<main>
	<img src="me.jpg" alt="" />

	<Title />

	<Links />
</main>

<style>
	main {
		padding-top: 320px;
	}

	img {
		width: 200px;
		height: 200px;

		margin: auto;
		display: block;
		border: 2px solid #ffffff;
		border-radius: 8px;
	}
</style>
