<script `lang="ts" `>
	export /** @type {any[]}*/
	let jobs = [];
</script>

{#each jobs as item}
	<!-- <!-- svelte-ignore a11y-invalid-attribute -->
<a sveltekit:prefetch href={'/jobs/${item.id}'}> </a> -->
	<!-- <!-- svelte-ignore a11y-invalid-attribute -->
<a sveltekit:noscroll href={'/jobs/${item.id}'}> -->
	<!-- svelte-ignore a11y-invalid-attribute -->
<a sveltekit:reload href={'/jobs/${item.id}'}>
		<p>{item.title}</p>
		<img src={item.image} alt={item.title} />
	</a>
{/each}
