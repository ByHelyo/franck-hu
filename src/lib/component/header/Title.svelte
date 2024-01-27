<a href="/">
	<img src="/favicon.png" alt="logo" />
	<span class="firstName">Franck</span> Hu
</a>

<style lang="scss">
	@import 'variable.scss';

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
		background-color: $dark-background-primary;
		color: $dark-foreground;
	}

	:global(html.dark) {
		span {
			background-color: $light-background-primary;
			color: $light-foreground;
		}
	}
</style>
