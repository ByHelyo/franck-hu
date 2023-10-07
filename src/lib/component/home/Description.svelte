<script lang="ts">
	import { technologyBadges } from '$lib/const/technology';
	import { languageBadges } from '$lib/const/language';
</script>

<div class="container">
	<h2>About me</h2>
	<p>
		My name is Franck and I'm a computer science student from France. Here's some info about me!
	</p>
	<p />
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
