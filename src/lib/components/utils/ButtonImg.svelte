<script>
	export let src;

	export let dark = true;
</script>

<button on:click>
	<img class:dark {src} alt="" />
</button>

<style lang="scss">
	@import 'variables.scss';

	button {
		padding: 10px;

		background: transparent;
		border-radius: 6px;
		cursor: pointer;
		border: none;
	}

	button:hover {
		background-color: $light-background-primary-hover;
	}

	button:focus {
		background-color: $light-background-primary-focus;
	}

	:global(body.dark-theme) button:hover {
		background-color: $dark-background-primary-hover;
	}

	:global(body.dark-theme) button:focus {
		background-color: $dark-background-primary-focus;
	}

	img {
		width: 40px;
		height: 40px;
	}

	:global(body.dark-theme) img.dark {
		filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
			contrast(107%);
	}

	/* Grow */

	img {
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: transform;
		transition-property: transform;
	}

	button:hover > img,
	button:focus > img,
	button:active > img {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
