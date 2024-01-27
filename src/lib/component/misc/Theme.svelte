<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/store/theme';

	onMount(() => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (isDark) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	});
</script>
