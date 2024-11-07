<script lang="ts">
	import { languageBadges, osBadges, technologyBadges } from '$lib/const/badge';
</script>

<div class="container">
	<h2>About me</h2>
	<p>
		My name is Franck and I'm a computer science student from France. Here's some info about me!
	</p>
	<h2>Languages</h2>
	<div class="badges">
		{#each languageBadges as badge}
			<img alt={badge.alt} src={badge.src} />
		{/each}
	</div>
	<h2>Technologies</h2>
	<div class="badges">
		{#each technologyBadges as badge}
			<img alt={badge.alt} src={badge.src} />
		{/each}
	</div>
	<h2>OS</h2>
	<div class="badges">
		{#each osBadges as badge}
			<img alt={badge.alt} src={badge.src} />
		{/each}
	</div>
</div>

<style>
	p {
		line-height: 1.5;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
</style>
