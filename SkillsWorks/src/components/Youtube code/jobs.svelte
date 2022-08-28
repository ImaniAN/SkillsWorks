<script `lang="ts" `>
	export /** @type {any[]}*/
	let jobs = [];
</script>

{#each jobs as item}
	<!-- <a sveltekit:prefetch href={'/jobs/${item.id}'}> </a> -->
	<!-- <a sveltekit:noscroll href={'/jobs/${item.id}'}> -->
	<a sveltekit:reload href={'/jobs/${item.id}'}>
		<p>{item.title}</p>
		<img src={item.image} alt={item.title} />
	</a>
{/each}
