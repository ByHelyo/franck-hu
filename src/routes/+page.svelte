<script>
	import Links from '$lib/components/index/Links.svelte';
</script>

<svelte:head>
	<title>Franck Hu | Home</title>
</svelte:head>

<img src="misc/logo.jpg" alt="" />

<div>
	<h1>Franck Hu 👋</h1>
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

	h1 {
		text-shadow: 0 3px 0 #b2a98f, 0 14px 10px rgba(0, 0, 0, 0.15), 0 24px 2px rgba(0, 0, 0, 0.1),
			0 34px 30px rgba(0, 0, 0, 0.1);
	}
</style>
