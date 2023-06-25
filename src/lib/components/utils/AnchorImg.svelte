<script lang="ts">
	export let name: string;

	export let href: string;

	export let src: string;
</script>

<a {href} title={name}>
	<img {src} alt="" />
</a>

<style lang="scss">
	@import 'variables.scss';

	a {
		padding: 8px;

		letter-spacing: 1px;
		text-align: center;
		display: block;
		border-radius: 8px;
		position: relative;

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

		/* Tooltip */

		&::after {
			bottom: 100%;
			left: 50%;
			width: 0;
			height: 0;
			transform: translateX(-50%);

			border: 5px solid transparent;
			position: absolute;
			display: none;
			content: '';
			border-block-start-color: rgba($light-background-tooltip, 0.8);
			border-block-end-width: 0;
		}

		&::before {
			width: 80px;
			padding: 10px;
			bottom: calc(100% + 4px);
			left: 50%;
			transform: translate(-50%);

			position: absolute;
			display: none;
			background-color: rgba($light-background-tooltip, 0.8);
			color: $light-foreground-tooltip;
			content: attr(title);
			border-radius: 20px;
			border-block-end: 0;
		}

		&:hover::before,
		&:hover::after {
			display: inline-block;
		}

		/* ! Tooltip ! */
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
		a {
			&:hover {
				background-color: $dark-background-primary-hover;
			}

			&:focus {
				background-color: $dark-background-primary-focus;
			}

			/* Tooltip */

			&::before {
				color: $dark-foreground-tooltip;
				background-color: rgba($dark-background-tooltip, 0.8);
			}

			&::after {
				border-block-start-color: rgba($dark-background-tooltip, 0.8);
			}

			/* ! Tooltip ! */
		}

		img {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}
</style>
