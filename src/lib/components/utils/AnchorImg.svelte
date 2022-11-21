<script>
	export let href;

	export let src;
</script>

<a {href}>
	<img {src} alt="" />
</a>

<style lang="scss">
	@import 'variables.scss';

	a {
		padding: 10px;

		display: block;
		border-radius: 6px;
	}

	a:hover {
		background-color: $color-light-background-2-hover;
	}

	a:focus {
		background-color: $color-light-background-2-focus;
	}

	img {
		width: 40px;
		height: 40px;
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
