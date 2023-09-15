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
		border-radius: 8px;
		cursor: pointer;
		border: none;

		&:hover {
			background-color: $light-background-primary-hover;
		}

		&:focus {
			background-color: $light-background-primary-focus;
		}

		/* Grow */

		&:hover > img,
		&:focus > img,
		&:active > img {
			-webkit-transform: scale(1.1);
			transform: scale(1.1);
		}

		/* ! Grow ! */
	}

	img {
		width: 40px;
		height: 40px;

		/* Grow */

		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: transform;
		transition-property: transform;

		/* ! Grow ! */
	}

	:global(body.dark-theme) {
		button {
			&:hover {
				background-color: $dark-background-primary-hover;
			}

			&:focus {
				background-color: $dark-background-primary-focus;
			}
		}

		img.dark {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}
</style>
