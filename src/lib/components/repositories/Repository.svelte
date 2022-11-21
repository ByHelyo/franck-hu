<script>
	export let name;

	export let description;

	export let stars;

	export let url;
</script>

<a href={url}>
	<div>
		<h2>{name}</h2>
		<p>{description}</p>
	</div>

	<p><img src="misc/star.svg" alt="" />{stars}</p>
</a>

<style lang="scss">
	@import 'variables.scss';

	a {
		height: 150px;
		padding: 16px;

		display: flex;
		flex-direction: column;
		border-radius: 6px;
		background-color: $color-light-background-2;
		border: 2px solid $color-light-background-2-border;
	}

	a:hover {
		background-color: $color-light-background-2-hover;
	}

	a:focus {
		background-color: $color-light-background-2-focus;
	}

	img {
		top: 2px;
		width: 16px;
		height: 16px;
		margin-inline-end: 8px;

		position: relative;
	}

	/* Fade */

	a {
		vertical-align: middle;
		-webkit-transform: perspective(1px) translateZ(0);
		transform: perspective(1px) translateZ(0);
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		overflow: hidden;
		-webkit-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-webkit-transition-property: color, background-color;
		transition-property: color, background-color;
	}
</style>
