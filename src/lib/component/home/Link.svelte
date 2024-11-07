<script lang="ts">
	export let name: string;

	export let href: string;

	export let src: string;
</script>

<a {href}><img {src} alt="" />{name}</a>

<style lang="scss">
	@use 'variable.scss' as v;

	a {
		display: flex;
		justify-content: center;
		gap: 8px;
		border-radius: 4px;
		padding: 8px 16px;
		border: 1px solid v.$light-background-primary-border;

		&:hover {
			background-color: v.$light-background-primary-hover;
		}
	}

	img {
		width: 16px;
		height: 16px;
		position: relative;
		top: 1px;
	}

	:global(html.dark) {
		a {
			border-color: v.$dark-background-primary-border;

			&:hover {
				background-color: v.$dark-background-primary-hover;
			}
		}

		img {
			filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(353deg) brightness(100%)
				contrast(107%);
		}
	}

	@media (max-width: 480px) {
		a {
			padding: 16px 32px;
		}
	}
</style>
