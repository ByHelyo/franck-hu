<script lang="ts">
	import '/node_modules/normalize.css/normalize.css';
	import Header from '$lib/component/header/Header.svelte';
	import '../app.scss';
	import '$lib/style/reset.css';
	import Footer from '$lib/component/footer/Footer.svelte';
	import Theme from '$lib/component/misc/Theme.svelte';
</script>

<Theme />

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

	:global(html.dark) {
		background-color: $dark-background;
		color: $dark-foreground;
	}
</style>
