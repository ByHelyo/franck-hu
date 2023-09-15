<script lang="ts">
	import '/node_modules/normalize.css/normalize.css';
	import Header from '$lib/component/header/Header.svelte';
	import '../app.scss';
	import '$lib/style/reset.css';
</script>

<Header />

<slot />

<style lang="scss">
	@import 'variable.scss';

	:global(body.dark-theme) {
		background-color: $dark-background;
		color: $dark-foreground;
	}
</style>
