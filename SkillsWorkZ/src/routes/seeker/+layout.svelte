<script>
	import Seeker from './../../components/seeker/seeker.svelte';
</script>

<svelte:head>
	<title>Seeker</title>
	<meta name="description" content="How to play Sverdle" />
</svelte:head>

<main>
	<slot />
	<div class="">
		<Seeker />
	</div>
</main>
