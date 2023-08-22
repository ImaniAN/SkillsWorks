<script>
	// @ts-nocheck
	export let data;
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<ul>
	{#each data.skills_levels as skills_level}
		<li>{skills_level.exposure}</li>
	{/each}
</ul>
