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

<style lang="scss">
	@import 'variables.scss';

	main {
		padding-top: 256px;
	}

	:global(body.dark-theme) {
		background-color: $color-dark-background-1;
		color: $color-dark-foreground-1;
	}
</style>
