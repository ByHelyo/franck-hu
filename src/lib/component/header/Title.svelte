<a href="/">
	<img src="/favicon.png" alt="logo" />
	<span class="firstName">Franck</span> Hu
</a>

<style lang="scss">
	@use 'variable.scss' as v;

	a {
		font-style: italic;
		font-family: Raleway, monospace;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	img {
		width: 24px;
		height: 24px;
		border-radius: 4px;
	}

	.firstName {
		border-radius: 4px;
		padding: 4px;
		background-color: v.$dark-background-primary;
		color: v.$dark-foreground;
	}

	:global(html.dark) {
		span {
			background-color: v.$light-background-primary;
			color: v.$light-foreground;
		}
	}
</style>
