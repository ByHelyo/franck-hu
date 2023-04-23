<script>
	import Repositories from '$lib/components/repositories/Repositories.svelte';

	export let data;
</script>

<svelte:head>
	<title>Franck Hu | Repositories</title>
</svelte:head>

<main>
	<Repositories repos={data.repositories} />
</main>

<style>
	main {
		padding-top: 256px;
	}
</style>
