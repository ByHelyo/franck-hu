<script lang="ts">
	export let search: string;
</script>

<div class="container">
	<div class="input-container">
		<img src="/misc/search.svg" alt="" />
		<input placeholder="Search repository" bind:value={search} />
	</div>
</div>

<style lang="scss">
	@import 'variable.scss';

	.container {
		display: flex;
		justify-content: center;
		margin-block-end: 32px;
		padding-inline: 16px;
	}

	.input-container {
		display: flex;
		gap: 8px;
		width: 50%;
		padding: 10px 6px;
		border-radius: 4px;
		border: 1px solid $light-background-primary-border;
	}

	input {
		background: none;
		border: none;
		width: 100%;
		letter-spacing: 2px;

		&:focus {
			outline: none;
		}
	}

	:global(html.dark) {
		.input-container {
			background: $dark-background;
			border-color: $dark-background-primary-border;
		}

		input {
			color: $dark-foreground;
		}

		img {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}

	@media (max-width: 948px) {
		.input-container {
			width: 100%;
		}
	}
</style>
