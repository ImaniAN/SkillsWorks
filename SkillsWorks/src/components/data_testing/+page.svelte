<script>
	export let data;
</script>

<ul>
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
