<script lang="ts">
	import Repositories from '$lib/component/repositories/Repositories.svelte';
	import Head from '$lib/component/head/Head.svelte';
	import Search from '$lib/component/repositories/Search.svelte';

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
