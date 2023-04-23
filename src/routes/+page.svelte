<script>
	import Title from '$lib/components/index/Title.svelte';
	import Links from '$lib/components/index/Links.svelte';
</script>

<svelte:head>
	<title>Franck Hu | Home</title>
</svelte:head>

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
		border-radius: 50%;
	}
</style>
