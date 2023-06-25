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
	@import 'variables.scss';

	.container {
		display: flex;
		justify-content: center;
		margin-block-end: 32px;
	}

	.input-container {
		display: flex;
		gap: 8px;
		width: 50%;
		padding: 16px 8px;
		border-radius: 8px;
		background: $light-background-primary;
		border: 2px solid $light-background-primary-border;
	}

	input {
		background: none;
		border: none;
		width: 100%;
		font-size: 24px;
		letter-spacing: 2px;

		&:focus {
			outline: none;
		}
	}

	:global(body.dark-theme) {
		.input-container {
			background: $dark-background-primary;
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
</style>
