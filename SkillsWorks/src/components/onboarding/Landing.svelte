<script>
	// import Navbar from '../comps/Navbar.svelte';
	import Footer from '../comps/Footer.svelte';
	import Intro from './Intro.svelte';
	import Sign_in_form from './Sign_in_form.svelte';
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
	// import About_us from '../about_us/Faq.svelte';

	const webpages = [
		{ name: 'Home', component: Intro },
		{ name: 'Sign In', component: Sign_in_form },
		// { name: 'Sign Up', component: Sign_up_form },
		// { name: 'Log In', component: Sign_in_form},
		{ name: 'Blog', component: Blog },
		{ name: 'Contact Us', component: Contact_us },
		{ name: 'Faq', component: Faq },
		{ name: 'Attempts', component: Attempts },
		{ name: 'Forgot', component: Forgot },
		{ name: 'Jobs', component: Job_list },
		{ name: 'CVr br', component: Resume_form },
		{ name: 'Messages', component: Messages },
		// { name: 'About Us', component: About_us },
	];

	// Loads an object in webpages array
	let selectedPage = webpages[0];
	$: console.dir(selectedPage);

	// Have to use obj as arg. so value can be a class
	// @ts-ignore
	const loadPage = (obj) => (selectedPage = obj);
</script>

<!-- <Navbar /> -->
<div class="stick z-30 container">
	{#each webpages as webpageObj}
		<button
			class="btn"
			title={webpageObj.name}
			on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
		>
	{/each}
</div>
<br />

<!-- Loaded component/webpage -->
<svelte:component this={selectedPage.component} />

<Footer />

<style>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div.stick {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		justify-content: center;
		align-items: center;
		overflow: hidden;
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
