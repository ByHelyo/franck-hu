<script lang="ts">
	export let href: string;
	export let content: string;
</script>

<a {href}>{content}</a>

<style lang="scss">
	@use 'variable.scss' as v;

	a {
		display: inline-block;
		padding: 11.55px;
		border-radius: 4px;

		&:hover {
			background: v.$light-background-primary-hover;
		}
	}

	:global(html.dark) {
		a {
			&:hover {
				background: v.$dark-background-primary-hover;
			}
		}
	}

	@media (max-width: 640px) {
		a {
			display: none;
		}
	}
</style>
