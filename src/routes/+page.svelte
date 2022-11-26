<script>
	import Title from '$lib/components/index/Title.svelte';
	import Links from '$lib/components/index/Links.svelte';
</script>

<svelte:head>
	<title>Franck Hu | Home</title>
</svelte:head>

<img src="misc/logo.jpg" alt="" />

<div>
	<Title />
</div>

<Links />

<style>
	img {
		width: 300px;
		height: 300px;

		margin: auto;
		display: block;
		border: 2px solid #ffffff;
		border-radius: 50%;
	}

	div {
		text-align: center;
	}
</style>
