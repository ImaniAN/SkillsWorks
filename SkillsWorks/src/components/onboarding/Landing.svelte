<script>
	import Intro from './Intro.svelte';
	// import Sign_in_form from './Sign_in_form.svelte';
	// import Sign_up_form from './Sign_up_form.svelte';
	// import something from ''./Intro.svelte';
	import Blog from '../blog/Topics.svelte';
	import Contact_us from '../about_us/Contact_us.svelte';
	import Faq from '../about_us/Faq.svelte';
	import Attempts from '../endeavors/Attempts.svelte';
	import Forgot from './Forgot.svelte';
	import Job_list from '../profiles/ui/Job_list.svelte';
	import Resume_form from '../profiles/candidate/resume/Resume.svelte';
	import Messages from '../profiles/ui/messages/Messages.svelte';
	import About_us from '../about_us/Faq.svelte';

	const webpages = [
		{ name: 'Home', component: Intro },
		// { name: 'Sign In', component: Sign_in_form },
		// { name: 'Sign Up', component: Sign_up_form },
		// { name: 'Log In', component: Sign_in_form},
		{ name: 'Blog', component: Blog },
		{ name: 'Contact Us', component: Contact_us },
		{ name: 'Faq', component: Faq },
		{ name: 'Attempts', component: Attempts },
		{ name: 'Forgot', component: Forgot },
		{ name: 'Jobs', component: Job_list },
		{ name: 'Resume', component: Resume_form },
		{ name: 'Messages', component: Messages },
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
	/* Style the tablink */
	.tablink {
		background-color: #1b191f;
		border: 1px solid #28bda4;
		border-bottom: 2px solid #8e44ad;
		color: white;
		cursor: pointer;
		float: left;
		font-size: 17px;
		outline: none;
		overflow: hidden;
		padding: 14px 16px;
		transition: 0.3s;
		width: 10%;
	}

	/* Change background color of buttons on hover */
	.tablink:hover {
		background-color: #d3d337;
	}

	/* Create an active/current tablink class */
	.tablink:active {
		background-color: #2280ec;
	}

	/* Fade in tabs */
	@-webkit-keyframes fadeEffect {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeEffect {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
