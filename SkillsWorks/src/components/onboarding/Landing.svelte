<script>
	import Intro from './Intro.svelte';
	import Blog from '../blog/Topics.svelte';
	import Contact_us from '../about_us/Contact_us.svelte';
	// import Sign_up_form from './Sign_up_form.svelte';
	// import Log_in_form from './Log_in_form.svelte';
	import About_us from '../about_us/Faq.svelte';

	const webpages = [
		{ name: 'Home', component: Intro },
		{ name: 'Blog', component: Blog },
		{ name: 'Contact Us', component: Contact_us },
		// { name: 'Sign Up', component: Sign_up_form },
		// { name: 'Log In', component: Log_in_form },
		{ name: 'About Us', component: About_us },
	];

	// Loads an object in webpages array
	let selectedPage = webpages[0];
	$: console.dir(selectedPage);

	// Have to use obj as arg. so value can be a class
	// @ts-ignore
	const loadPage = (obj) => (selectedPage = obj);
</script>

{#each webpages as webpageObj}
	<button
		class="tablink"
		title={webpageObj.name}
		on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
	>
{/each}

<!-- Loaded component/webpage -->
<svelte:component this={selectedPage.component} />

<style>
	* {
		box-sizing: border-box;
	}

	/* Style tab links */
	.tablink {
		background-color: #3d4042;
		color: white;
		float: left;
		border: none;
		outline: none;
		border: 0.5px solid #2280ec;
		border-radius: 0;
		cursor: pointer;
		padding: 14px 16px;
		font-size: 17px;
		width: 25%;
	}

	.tablink:hover {
		background-color:  #a9aee8;
	}
</style>
