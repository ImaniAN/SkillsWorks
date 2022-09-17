<script>
	// @ts-ignore
	import About_us from '../about_us/Aboutus.svelte'; //Updated
	// import Athing from '../';
	// import Accordion_menu from '../comps/extras/menus/Accordion_menu.svelte';
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
	// import Accordion_Menu from '../comps/extras/menus/Accordion_menu.svelte';
	// import something from ''./Intro.svelte';
	import Split_with_headings from '../comps/extras/menus/Split_with_headings.svelte';
	import Sub_plan_card from '../comps/extras/Sub_plan_card.svelte';
	import Tab_pills from '../comps/extras/Tab_pills.svelte';
	// import Testimonial from '../about_us/Testimonial.svelte';

	const webpages = [
		// { name: 'UI_Name', component: Import_name },
		// { name: 'Ad_man', component: Ad_man },
		{ name: 'About Us', component: About_us },
		// { name: 'Accordion_menu', component: Accordion_menu },
		// { name: 'Applied Jobs', component: Applied_jobs },
		// { name: 'Attempts', component: Attempts },
		// { name: 'Blog', component: Blog },
		// { name: 'Branded_accent', component: Branded_accent },
		{ name: 'Candidate info', component: Candi_info },
		// { name: 'Ex_posts', component: Ex_posts },
		{ name: 'Contact_validation', component: Contact_validation },
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
		{ name: 'Home', component: Intro },
		{ name: 'Post_job', component: Post_job },
		{ name: 'Int_questions', component: Int_questions },
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
		{ name: 'Resume', component: Resume_form },
		{ name: 'Sign In', component: Sign_in_form },
		{ name: 'Sign Up', component: Sign_up_form },
		// { name: 'Sub_man', component: Sub_man },
		// { name: 'Jobs search', component: Jobs_search },
		// { name: 'Sub_plans', component: Sub_plans },
		// { name: 'Sign', component: Signn },
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

<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
<div class="">
	<header
		class="sticky top-3 mx-4 bg-opacity-70 z-50 bg-indigo-200 rounded-full px-2 py-2"
	>
		<div class="flex items-center justify-between px-4 mx-auto max-w-screen-xl">
			<div class="flex flex-1">
				<nav
					class="sticky items-center justify-center text-sm font-medium space-x-8 lg:flex lg:flex-1 lg:w-0"
				>
					<div class="z-50 group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">Menu Options</span>
							<span>
								<svg
									class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/>
								</svg>
							</span>
						</button>
						<ul
							class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="px-3 py-1 hover:bg-gray-100">
								{#each webpages as webpageObj}
									<button
										class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
										title={webpageObj.name}
										on:click={() => loadPage(webpageObj)}
										>{webpageObj.name}</button
									>
								{/each}
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div
				class="sticky items-center justify-center text-sm font-medium space-x-8 lg:flex lg:flex-1 lg:w-0 flex-shrink-0"
			>
				<img
					class="h-8 w-8"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				/>
			</div>

			<div class="items-center lg:flex text-right sm:px-6">
				<div class="flex items-center ">
					<form class="mb-0 lg:flex">
						<div class="px-3 relative">
							<input
								class="rounded-lg border-transparent flex-1 appearance-none border-2 border-indigo-600 border-dashed bg-indigo-50 text-indigo-600 placeholder-indigo-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-10 pl-4 w-4/5"
								placeholder="Search..."
								type="text"
							/>

							<button
								class="border-2 border-dashed border-indigo-600 rounded-md hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-slate-50 hover:bg-indigo-600 absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
								type="submit"
							>
								<svg
									class="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clip-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										fill-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
					</form>
				</div>
				<button
					type="submit"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
					>Sign In</button
				>
				<button
					type="submit"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-indigo-600 hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
					>Sign Up</button
				>
			</div>
		</div>
	</header>
	<main class="relative">
		<div class="max-w-7xl mx-auto p-2 ">
			<!-- Replace with your content -->
			<div
				class="relative min-h-screen flex rounded-lg border-4 border-dashed border-slate-200 "
			>
				<svelte:component this={selectedPage.component} />
				<!--END:()-->
			</div>
		</div>
	</main>
</div>

<Footer />

<style>
	nav.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		justify-content: center;
		align-items: center;
		z-index: 50;
	}
	/* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
	li > button svg {
		transform: rotate(-90deg);
	}
	li:hover > button svg {
		transform: rotate(-270deg);
	}

	/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
	.group:hover .group-hover\:scale-100 {
		transform: scale(1);
	}
	.group:hover .group-hover\:-rotate-180 {
		transform: rotate(180deg);
	}
	.scale-0 {
		transform: scale(0);
	}
	.min-w-32 {
		min-width: 8rem;
	}
</style>
