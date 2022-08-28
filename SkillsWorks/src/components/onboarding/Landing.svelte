<script>
	import About_us from '../about_us/About_us.svelte'; //Updated
	import Accordion_menu from '../comps/extras/menus/Accordion_menu.svelte';
	import Applied_jobs from '../profiles/candidate/jobs/Ex_jobs.svelte'; //Updated
	import Attempts from '../endeavors/Attempts.svelte'; //Updated
	import Blog from '../blog/Topics.svelte'; //Updated
	// import Branded_accent from '../comps/extras/menus/Branded_accent.svelte';
	import Candi_info from '../profiles/candidate/Candidate.svelte';
	import Category_filters from '../comps/extras/Category_filters.svelte';
	import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	import Dropdown from '../comps/extras/Dropdown.svelte';
	import Empty_state from '../comps/extras/Empty_state.svelte';
	import Faq from '../about_us/Faq.svelte'; //Updated
	import Footer from '../comps/Footer.svelte'; //Updated...
	import Forgot from './Forgot.svelte'; //Updated
	// import Full_side_nav from '../comps/extras/Full_side_nav.svelte';
	// import Grouped_buttons from '../comps/extras/Grouped_buttons.svelte';
	// import Inputs from '../comps/extras/Inputs.svelte';
	import Intro from './Intro.svelte';
	import Jobs_search from '../profiles/ui/Jobs_search.svelte'; //Updated
	import Job_reccommendations from '../profiles/candidate/jobs/Job_recc.svelte';
	import Menu from '../comps/extras/Menu.svelte';
	import Messages from '../profiles/ui/messages/Messages.svelte'; //Updated
	import Nav_search from '../profiles/ui/Nav_search.svelte';
	import Nav_side from '../profiles/ui/Nav_side.svelte';
	import Nav_side_small from '../profiles/ui/Nav_side_small.svelte';
	import Navbar from '../comps/Navbar.svelte'; //Updated...
	import Pagination from '../comps/extras/Pagination.svelte';
	import Pop_cart from '../comps/extras/Pop_cart.svelte';
	import Resume_form from '../profiles/candidate/resume/Resume.svelte'; //Updated
	import Reviews from '../comps/extras/Reviews.svelte';
	import Sign_in_form from './Sign_in_form.svelte'; //Updated
	import Sign_up_form from '../onboarding/Sign_up_form.svelte'; //Updated
	import Accordion_Menu from '../comps/extras/menus/Accordion_menu.svelte';
	// import something from ''./Intro.svelte';
	import Split_with_headings from '../comps/extras/menus/Split_with_headings.svelte';
	import Sub_plan_card from '../comps/extras/Sub_plan_card.svelte';
	import Tab_pills from '../comps/extras/Tab_pills.svelte';
	import Testimonial from '../comps/extras/Testimonial.svelte';

	const webpages = [
		// { name: 'UI_Name', component: Import_name },
		{ name: 'About Us', component: About_us },
		// { name: 'Accordion_menu', component: Accordion_menu },
		{ name: 'Applied Jobs', component: Applied_jobs },
		// { name: 'Attempts', component: Attempts },
		// { name: 'Blog', component: Blog },
		// { name: 'Branded_accent', component: Branded_accent },
		{ name: 'Candidate information', component: Candi_info },
		{ name: 'Category_filters', component: Category_filters },
		// { name: 'Contact Us', component: Contact_us },
		{ name: 'Dropdown', component: Dropdown },
		// { name: 'Empty_state', component: Empty_state },
		// { name: 'Faq', component: Faq },
		// { name: 'Forgot', component: Forgot },
		// { name: 'Home', component: Intro },
		// { name: 'Job Reccommendations', component: Job_reccommendations },
		{ name: 'Menu', component: Menu },
		// { name: 'Messages', component: Messages },
		// { name: 'Nav with Search idk', component: Nav_search },
		// { name: 'Nav_side', component: Nav_side },
		// { name: 'Nav_side_small', component: Nav_side_small },
		// { name: 'Pagination', component: Pagination },
		// { name: 'Pop_cart', component: Pop_cart },
		// { name: 'Reviews', component: Reviews },
		// { name: 'Accordion_Menu', component: Accordion_Menu },
		// { name: 'Split_with_headings', component: Split_with_headings },
		{ name: 'Resume Explorer', component: Resume_form },
		// { name: 'Sign In', component: Sign_in_form },
		// { name: 'Sign Up', component: Sign_up_form },
		{ name: 'Jobs search', component: Jobs_search },
		// { name: 'Split_with_headings', component: Split_with_headings },
		{ name: 'Sub_plan_card', component: Sub_plan_card },
		// { name: 'Tab_pills', component: Tab_pills },
		// { name: 'Testimonial', component: Testimonial },
		// { name: 'UI_Name', component: Import_name },
	];

	// Loads an object in webpages array
	let selectedPage = webpages[0];
	$: console.dir(selectedPage);

	// Have to use obj as arg. so value can be a class
	// @ts-ignore
	const loadPage = (obj) => (selectedPage = obj);
</script>

<!-- <Navbar /> -->

<div
	class="stick z-30 container px-8 py-4 col-span-6 sm:col-span-3 lg:col-span-2"
>
	{#each webpages as webpageObj}
		<button
			class="btn"
			title={webpageObj.name}
			on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
		>
	{/each}
</div>
<!--END:()-->

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
