<h1><span>Franck</span> Hu</h1>

<style lang="scss">
	@import 'variables.scss';

	h1 {
		font-style: italic;
		margin: 0;
		font-family: Raleway, monospace;
	}

	span {
		border-radius: 6px;
		padding: 2px;
		background-color: $dark-background-primary;
		color: $dark-foreground;
	}

	:global(body.dark-theme) {
		span {
			background-color: $light-background-primary;
			color: $light-foreground;
		}
	}
</style>
