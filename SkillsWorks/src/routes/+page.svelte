<script>
	export let data;
</script>

<!--START:()-->
<div class="flex justify-center w-screen relative">
	<!--START:()-->
	<div class="">
		<ul>
			{#each data.countries as country}
				<li>{country.name}</li>
			{/each}
		</ul>
	</div>
	<!--END:()-->
</div>
<!--END:()-->
