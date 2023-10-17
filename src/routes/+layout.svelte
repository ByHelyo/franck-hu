<script lang="ts">
	import '/node_modules/normalize.css/normalize.css';
	import Header from '$lib/component/header/Header.svelte';
	import '../app.scss';
	import '$lib/style/reset.css';
	import Footer from '$lib/component/footer/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	@import 'variable.scss';

	main {
		min-height: calc(100vh - 128px);
	}

	:global(body.dark-theme) {
		background-color: $dark-background;
		color: $dark-foreground;
	}
</style>
