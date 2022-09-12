<script>
	// @ts-ignore
	import About_us from '../about_us/About_us.svelte'; //Updated
	// import Athing from '../';
	import Accordion_menu from '../comps/extras/menus/Accordion_menu.svelte';
	// import Ad_man from '../profiles/admin/analytics/Adman.svelte'; //Creates aFailed to fetch dynamically imported module:TYPEERROR(NO solutions avaliable)
	import Dets_app from '../profiles/candidate/jobs/Dets_app.svelte';
	import Applied_jobs from '../profiles/candidate/jobs/Ex_jobs.svelte'; //Updated
	import Int_questions from '../profiles/recruiter/jobs/Int_questions.svelte'; //Updated
	import Post_job from '../profiles/recruiter/jobs/Post_job.svelte'; //Updated
	import Ex_posts from '../profiles/recruiter/jobs/Ex_posts.svelte'; //Updated
	import Applicant_profile from '../profiles/recruiter/jobs/Applicant_profile.svelte'; //Updated
	import Attempts from '../endeavors/Attempts.svelte'; //Updated
	import Blog from '../blog/Topics.svelte'; //Updated
	import Branded_accent from '../comps/extras/menus/Branded_accent.svelte';
	import Candi_info from '../profiles/candidate/Candidate.svelte';
	import Contact_validation from '../profiles/admin/analytics/Contact_validation.svelte';
	import Category_filters from '../comps/extras/Category_filters.svelte';
	// import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	import Dash_nav from '../profiles/ui/Dash_nav.svelte'; //Updated //Please add things properly for goodness sake
	import Pricing_plan from '../profiles/ui/Pricing_plan.svelte'; //Updated //Please add things properly for goodness sake
	import Sub_plans from '../profiles/ui/Sub_plans.svelte'; //Updated //Please add things properly for goodness sake
	import Dash_nav_banner from '../profiles/ui/Dash_nav_banner.svelte';
	import Dash_nav_final from '../profiles/ui/Dash_nav_final.svelte';
	import Dropdown from '../comps/extras/Dropdown.svelte';
	import Empty_state from '../comps/extras/Empty_state.svelte';
	// import Faq from '../about_us/Faq.svelte'; //Updated
	import Footer from '../comps/Footer.svelte'; //Updated...
	import Forgot from './Forgot.svelte'; //Updated
	import Full_side_nav from '../comps/extras/Full_side_nav.svelte';
	import Grouped_buttons from '../comps/extras/Grouped_buttons.svelte';
	import Inputs from '../comps/extras/Inputs.svelte';
	import Intro from './Intro.svelte';
	import Jobs_search from '../profiles/ui/Jobs_search.svelte'; //Updated
	import Job_reccommendations from '../profiles/candidate/jobs/Job_recc.svelte';
	import Menu from '../profiles/ui/F_Menu.svelte';
	import Man_report from '../profiles/admin/analytics/Man_report.svelte';
	import Messages from '../profiles/ui/messages/Messages.svelte'; //Updated
	import Nav_search from '../profiles/ui/Nav_search.svelte';
	import Nav_side from '../profiles/ui/Nav_side.svelte';
	import Job_preview from '../profiles/ui/Job_preview.svelte';
	import Nav_side_small from '../profiles/ui/Nav_side_small.svelte';
	import Navbar from '../comps/Navbar.svelte'; //Updated...
	import Pagination from '../comps/extras/Pagination.svelte';
	import Pri_pol from '../about_us/Pri_pol.svelte';
	import Pop_cart from '../comps/extras/Pop_cart.svelte';
	import Resume_form from '../profiles/candidate/resume/Resume.svelte'; //Updated
	import Reviews from '../about_us/Reviews.svelte';
	import Sign_in_form from './Sign_in_form.svelte'; //Updated
	import Signn from '../profiles/ui/Sign_register.svelte';
	import Sign_up_form from '../onboarding/Sign_up_form.svelte'; //Updated
	import Sub_man from '../profiles/admin/analytics/Sub_man.svelte';
	import Accordion_Menu from '../comps/extras/menus/Accordion_menu.svelte';
	// import something from ''./Intro.svelte';
	import Split_with_headings from '../comps/extras/menus/Split_with_headings.svelte';
	import Sub_plan_card from '../comps/extras/Sub_plan_card.svelte';
	import Tab_pills from '../comps/extras/Tab_pills.svelte';
	// import Testimonial from '../about_us/Testimonial.svelte';

	const webpages = [
		// { name: 'UI_Name', component: Import_name },
		// { name: 'Ad_man', component: Ad_man },
		// { name: 'About Us', component: About_us },
		// { name: 'Accordion_menu', component: Accordion_menu },
		// { name: 'Applied Jobs', component: Applied_jobs },
		// { name: 'Attempts', component: Attempts },
		// { name: 'Blog', component: Blog },
		// { name: 'Branded_accent', component: Branded_accent },
		// { name: 'Candidate info', component: Candi_info },
		// { name: 'Ex_posts', component: Ex_posts },
		// { name: 'Category_filters', component: Category_filters },
		// { name: 'Contact_validation', component: Contact_validation },
		// { name: 'Contact Us', component: Contact_us },
		// { name: 'Dash_nav with banner kinda main', component: Dash_nav },
		// { name: 'Dash_nav_final', component: Dash_nav_final },
		// { name: 'Dash-center-flavicon', component: Dash_nav_banner },
		// { name: 'Dets_app', component: Dets_app },
		// { name: 'Dropdown', component: Dropdown },
		// { name: 'Empty_state', component: Empty_state },
		// { name: 'Faq', component: Faq },
		// { name: 'Forgot', component: Forgot },
		// { name: 'Full_side_nav', component: Full_side_nav },
		// { name: 'Grouped_buttons', component: Grouped_buttons },
		// { name: 'Inputs', component: Inputs },
		// { name: 'Home', component: Intro },
		// { name: 'Post_job', component: Post_job },
		// { name: 'Int_questions', component: Int_questions },
		// { name: 'Applicant_profile', component: Applicant_profile },
		// { name: 'Job_preview', component: Job_preview },
		// { name: 'Job Recs', component: Job_reccommendations },
		// { name: 'Man_report', component: Man_report },
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
		// { name: 'Resume', component: Resume_form },
		// { name: 'Sign In', component: Sign_in_form },
		// { name: 'Sign Up', component: Sign_up_form },
		// { name: 'Sub_man', component: Sub_man },
		// { name: 'Jobs search', component: Jobs_search },
		// { name: 'Sub_plans', component: Sub_plans },
		{ name: 'Sign', component: Signn },
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

<div class="min-h-full">
	<nav class="bg-slate-800 sticky">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<img
							class="h-8 w-8"
							src="https://dummyimage.com/305x305"
							alt="Workflow"
						/>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<!-- Current: "bg-slate-900 text-white", Default: "text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50" -->
							<!-- svelte-ignore a11y-invalid-attribute -->
							<!-- <a
								href="#"
								class="bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page">Dashboard</a
							> -->
							{#each webpages as webpageObj}
								<button
									class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									title={webpageObj.name}
									on:click={() => loadPage(webpageObj)}
									>{webpageObj.name}</button
								>
							{/each}
							<!--END:()-->
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<button
							type="button"
							class="bg-slate-800 p-1 rounded-full text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50 cursor-pointer hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50"
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
									class="max-w-xs bg-slate-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
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
								class="z-10 origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- <Menu /> -->
							</div>
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!--
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
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="md:hidden" id="mobile-menu">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<!-- Current: "bg-slate-900 text-white", Default: "text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50" -->
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page">Dashboard</a
				>
				{#each webpages as webpageObj}
					<button
						class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600  focus:text-indigo-900 focus:bg-indigo-50   hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
						title={webpageObj.name}
						on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button
					>
				{/each}
				<!--END:()-->
			</div>
			<div class="pt-4 pb-3 border-t border-slate-700">
				<div class="flex items-center px-5">
					<div class="flex-shrink-0">
						<img
							class="h-10 w-10 rounded-full"
							src="https://dummyimage.com/305x305"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<div class="text-base font-medium leading-none text-white">
							Tom Cook
						</div>
						<div class="text-sm font-medium leading-none text-slate-400">
							tom@example.com
						</div>
					</div>
					<button
						type="button"
						class="ml-auto bg-slate-800 flex-shrink-0 p-1 rounded-full text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
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
				</div>
				<div class="mt-3 px-2 space-y-1">
					<!-- <Menu /> -->
				</div>
			</div>
		</div>
	</nav>
	<!-- <Banner /> -->
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl tracking-tight font-bold text-slate-900">
				Header and where the banner should be!
			</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto p-2 ">
			<!-- Replace with your content -->
			<div
				class="relative min-h-screen flex rounded-lg border-4 border-dashed border-gray-200 "
			>
				<svelte:component this={selectedPage.component} />
				<!--END:()-->
			</div>
		</div>
	</main>
</div>
<!-- Loaded component/webpage -->

<Footer />

<style>
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
