<script>
	export let name;

	export let href;

	export let src;
</script>

<a {href} title={name}>
	<img {src} alt="" />
</a>

<style lang="scss">
	@import 'variables.scss';

	a {
		padding: 10px;

		letter-spacing: 1px;
		text-align: center;
		display: block;
		border-radius: 6px;
		position: relative;
	}

	a:hover {
		background-color: $color-light-background-2-hover;
	}

	a:focus {
		background-color: $color-light-background-2-focus;
	}

	:global(body.dark-theme) a:hover {
		background-color: $color-dark-background-2-hover;
	}

	:global(body.dark-theme) a:focus {
		background-color: $color-dark-background-2-focus;
	}

	img {
		width: 44px;
		height: 44px;
	}

	:global(body.dark-theme) img {
		filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
			contrast(107%);
	}

	/* Tooltip */

	a::after {
		bottom: 100%;
		left: 50%;
		width: 0;
		height: 0;
		transform: translateX(-50%);

		border: 5px solid transparent;
		position: absolute;
		display: none;
		content: '';
		border-block-start-color: rgba($color-light-background-2-active, 0.8);
		border-block-end-width: 0;
	}

	a::before {
		width: 80px;
		padding: 10px;
		bottom: calc(100% + 4px);
		left: 50%;
		transform: translate(-50%);

		position: absolute;
		display: none;
		background-color: rgba($color-light-background-2-active, 0.8);
		color: $color-light-foreground-2-active;
		content: attr(title);
		border-radius: 20px;
		border-block-end: 0;
	}

	a:hover::before,
	a:hover::after {
		display: inline-block;
	}

	:global(body.dark-theme) a::before {
		color: $color-dark-foreground-2-active;
		background-color: rgba($color-dark-background-2-active, 0.8);
	}

	:global(body.dark-theme) a::after {
		border-block-start-color: rgba($color-dark-background-2-active, 0.8);
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

	a:hover > img,
	a:focus > img,
	a:active > img {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
