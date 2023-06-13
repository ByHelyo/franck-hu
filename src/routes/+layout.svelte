<script lang="ts">
	import '/node_modules/normalize.css/normalize.css';
	import Header from '$lib/components/header/Header.svelte';
	import '../app.scss';
	import '$lib/styles/reset.css';
</script>

<Header />

<slot />

<style lang="scss">
	@import 'variables.scss';

	:global(body.dark-theme) {
		background-color: $dark-background;
		color: $dark-foreground;
	}
</style>
