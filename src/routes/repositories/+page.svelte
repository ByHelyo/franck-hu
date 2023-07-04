<script lang="ts">
	import Repositories from '$lib/components/repositories/Repositories.svelte';
	import Head from '$lib/components/head/Head.svelte';
	import Search from '$lib/components/repositories/Search.svelte';

	export let data;

	let search = '';
</script>

<Head title="Franck Hu | Repositories" />

<main>
	<h1>Repositories</h1>

	<Search bind:search />

	<Repositories repos={data.repositories} bind:search />
</main>

<style>
	main {
		padding-top: 256px;
	}

	h1 {
		text-align: center;
	}
</style>
