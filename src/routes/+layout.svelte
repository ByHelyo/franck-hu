<script>
	import '/node_modules/normalize.css/normalize.css';
	import Header from '$lib/components/header/Header.svelte';
	import '../app.scss';
	import '$lib/styles/reset.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		padding-top: 256px;
	}
</style>
