<script lang="ts">
	export let src: string;

	export let dark = true;
</script>

<button on:click>
	<img class:dark {src} alt="" />
</button>

<style lang="scss">
	@import 'variable.scss';

	button {
		padding: 8px;

		background: transparent;
		border-radius: 6px;
		cursor: pointer;
		border: none;

		&:hover {
			background-color: $light-background-primary-hover;
		}
	}

	img {
		width: 24px;
		height: 24px;
	}

	:global(html.dark) {
		button {
			&:hover {
				background-color: $dark-background-primary-hover;
			}
		}

		img.dark {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}
</style>
