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
	@use 'variable.scss' as v;

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
		border: 1px solid v.$light-background-primary-border;
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
			background: v.$dark-background;
			border-color: v.$dark-background-primary-border;
		}

		input {
			color: v.$dark-foreground;
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
