<script>
	import Repositories from '$lib/components/repositories/Repositories.svelte';
	import Head from '$lib/components/head/Head.svelte';

	export let data;
</script>

<Head title="Franck Hu | Repositories" />

<main>
	<Repositories repos={data.repositories} />
</main>

<style>
	main {
		padding-top: 256px;
	}
</style>
