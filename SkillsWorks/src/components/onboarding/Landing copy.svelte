<script>
	import About_us from '../about_us/about_us.svelte'; //Updated
	// import Athing from '../';
	import Accordion_menu from '../comps/extras/menus/Accordion_menu.svelte';
	import Dets_app from '../profiles/candidate/jobs/Dets_app.svelte';
	import Applied_jobs from '../profiles/candidate/jobs/Ex_jobs.svelte'; //Updated
	import Attempts from '../endeavors/Attempts.svelte'; //Updated
	import Blog from '../blog/Topics.svelte'; //Updated
	import Branded_accent from '../comps/extras/menus/Branded_accent.svelte';
	import Candi_info from '../profiles/candidate/Candidate.svelte';
	import Category_filters from '../comps/extras/Category_filters.svelte';
	import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	import Dash_nav from '../profiles/ui/Dash_nav.svelte'; //Updated //Please add things properly for goodness sake
	import Pricing_plan from '../profiles/ui/Pricing_plan.svelte'; //Updated //Please add things properly for goodness sake
	import Sub_plans from '../profiles/ui/Sub_plans.svelte'; //Updated //Please add things properly for goodness sake
	import Dash_nav_banner from '../profiles/ui/Dash_nav_banner.svelte';
	import Dash_nav_final from '../profiles/ui/Dash_nav_final.svelte';
	import Dropdown from '../comps/extras/Dropdown.svelte';
	import Empty_state from '../comps/extras/Empty_state.svelte';
	import Faq from '../about_us/Faq.svelte'; //Updated
	import Footer from '../comps/Footer.svelte'; //Updated...
	import Forgot from './Forgot.svelte'; //Updated
	import Full_side_nav from '../comps/extras/Full_side_nav.svelte';
	import Grouped_buttons from '../comps/extras/Grouped_buttons.svelte';
	import Inputs from '../comps/extras/Inputs.svelte';
	import Intro from './Intro.svelte';
	import Jobs_search from '../profiles/ui/Jobs_search.svelte'; //Updated
	import Job_reccommendations from '../profiles/candidate/jobs/Job_recc.svelte';
	import Menu from '../profiles/ui/Menu.svelte';
	import Messages from '../profiles/ui/messages/Messages.svelte'; //Updated
	import Nav_search from '../profiles/ui/Nav_search.svelte';
	import Nav_side from '../profiles/ui/Nav_side.svelte';
	import Nav_side_small from '../profiles/ui/Nav_side_small.svelte';
	import Navbar from '../comps/Navbar.svelte'; //Updated...
	import Pagination from '../comps/extras/Pagination.svelte';
	import Pri_pol from '../about_us/Pri_pol.svelte';
	import Pop_cart from '../comps/extras/Pop_cart.svelte';
	import Resume_form from '../profiles/candidate/resume/Resume.svelte'; //Updated
	import Reviews from '../about_us/Reviews.svelte';
	import Sign_in_form from './Sign_in_form.svelte'; //Updated
	import Sign_up_form from '../onboarding/Sign_up_form.svelte'; //Updated
	import Accordion_Menu from '../comps/extras/menus/Accordion_menu.svelte';
	// import something from ''./Intro.svelte';
	import Split_with_headings from '../comps/extras/menus/Split_with_headings.svelte';
	import Sub_plan_card from '../comps/extras/Sub_plan_card.svelte';
	import Tab_pills from '../comps/extras/Tab_pills.svelte';
	import Testimonial from '../about_us/Testimonial.svelte';

	const webpages = [
		// { name: 'UI_Name', component: Import_name },
		{ name: 'About Us', component: About_us },
		// { name: 'Accordion_menu', component: Accordion_menu },
		// { name: 'Applied Jobs', component: Applied_jobs },
		{ name: 'Attempts', component: Attempts },
		{ name: 'Blog', component: Blog },
		// { name: 'Branded_accent', component: Branded_accent },
		// { name: 'Candidate information', component: Candi_info },
		// { name: 'Category_filters', component: Category_filters },
		// { name: 'Contact Us', component: Contact_us },
		// { name: 'Dash_nav with banner kinda main', component: Dash_nav },
		{ name: 'Dash_nav_final', component: Dash_nav_final },
		// { name: 'Dash-center-flavicon', component: Dash_nav_banner },
		// { name: 'Dets_app', component: Dets_app },
		// { name: 'Dropdown', component: Dropdown },
		// { name: 'Empty_state', component: Empty_state },
		// { name: 'Faq', component: Faq },
		{ name: 'Forgot', component: Forgot },
		// { name: 'Full_side_nav', component: Full_side_nav },
		// { name: 'Grouped_buttons', component: Grouped_buttons },
		// { name: 'Inputs', component: Inputs },
		{ name: 'Home', component: Intro },
		// { name: 'Job Recommendations', component: Job_reccommendations },
		// { name: 'Menu', component: Menu },
		// { name: 'Messages', component: Messages },
		// { name: 'Nav with Search idk', component: Nav_search },
		// { name: 'Nav_side', component: Nav_side },
		// { name: 'Nav_side_small', component: Nav_side_small },
		// { name: 'Pagination', component: Pagination },
		// { name: 'Pri_pol', component: Pri_pol },
		// { name: 'Pop_cart', component: Pop_cart },
		// { name: 'Reviews', component: Reviews },
		// { name: 'Accordion_Menu', component: Accordion_Menu },
		// { name: 'Split_with_headings', component: Split_with_headings },
		{ name: 'Resume Explorer', component: Resume_form },
		{ name: 'Sign In', component: Sign_in_form },
		{ name: 'Sign Up', component: Sign_up_form },
		// { name: 'Jobs search', component: Jobs_search },
		// { name: 'Sub_plans', component: Sub_plans },
		// { name: 'Pricing_plan', component: Pricing_plan },
		// { name: 'Sub_plan_card', component: Sub_plan_card },
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

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-slate-800 sticky">
	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-indigo-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!--
  Icon when menu is closed.

  Heroicon name: outline/menu

  Menu open: "hidden", Menu closed: "block"
   -->
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
  Icon when menu is open.

  Heroicon name: outline/x

  Menu open: "block", Menu closed: "hidden"
   -->
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div
				class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
			>
				<div class="flex-shrink-0 flex items-center">
					<img
						class="block lg:hidden h-8 w-auto"
						src="https://dummyimage.com/305x305"
						alt="Workflow"
					/>
					<img
						class="hidden lg:block h-8 w-auto"
						src="https://dummyimage.com/305x305"
						alt="Workflow"
					/>
				</div>
				<div class="hidden sm:block sm:ml-6">
					<div class="flex space-x-4 stick z-30 container">
						{#each webpages as webpageObj}
							<button
								class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								title={webpageObj.name}
								on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
							>
						{/each}
						<!--END:()-->
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button
					type="button"
					class="bg-slate-800 p-1 rounded-full text-slate-400 hover:text-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
				>
					<span class="sr-only">View notifications</span>
					<!-- Heroicon name: outline/bell -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>

				<!-- Profile dropdown -->
				<div class="ml-3 relative">
					<div>
						<button
							type="button"
							class="bg-slate-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src="https://dummyimage.com/305x305"
								alt=""
							/>
						</button>
					</div>

					<!--
  Dropdown menu, show/hide based on menu state.

  Entering: "transition ease-out duration-100"
   From: "transform opacity-0 scale-95"
   To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
   From: "transform opacity-100 scale-100"
   To: "transform opacity-0 scale-95"
   -->
					<div
						class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-indigo-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
					>
						<!-- Active: "bg-slate-100", Not Active: "" -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-0">Your Profile</a
						>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-1">Settings</a
						>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-700"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-2">Sign out</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1">
			<div class="stick z-30 container">
				{#each webpages as webpageObj}
					<button
						class="btn"
						title={webpageObj.name}
						on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
					>
				{/each}
			</div>
			<!--END:()-->
		</div>
	</div>
</nav>
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

	nav.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 20;
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
