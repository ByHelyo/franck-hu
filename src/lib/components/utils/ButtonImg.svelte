<script>
	export let src;
</script>

<button on:click>
	<img {src} alt="" />
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
		background-color: $color-light-background-2-hover;
	}

	button:focus {
		background-color: $color-light-background-2-focus;
	}

	:global(body.dark-theme) button:hover {
		background-color: $color-dark-background-2-hover;
	}

	:global(body.dark-theme) button:focus {
		background-color: $color-dark-background-2-focus;
	}

	img {
		width: 40px;
		height: 40px;
	}

	:global(body.dark-theme) img {
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
