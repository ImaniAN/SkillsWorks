<script>
	// @ts-ignore
	import About_us from '../about_us/Aboutus.svelte'; //Updated
	// import Athing from '../';
	import Accordion_menu from '../comps/menus/Accordion_menu.svelte';
	import Dets_app from '../profiles/candidate/jobs/Dets_app.svelte';
	import Applied_jobs from '../profiles/candidate/jobs/Ex_jobs.svelte'; //Updated
	import Rec_profile from '../profiles/recruiter/Recruiter.svelte';
	import Int_questions from '../profiles/recruiter/jobs/Int_questions.svelte'; //Updated
	import Post_job from '../profiles/recruiter/jobs/Post_job.svelte'; //Updated
	import Ex_posts from '../profiles/recruiter/jobs/Ex_posts.svelte'; //Updated
	import Applicant_profile from '../profiles/recruiter/jobs/Applicant_profile.svelte'; //Updated
	import Attempts from '../endeavors/Attempts.svelte'; //Updated
	import Attempts_copy from '../endeavors/Attempts copy.svelte'; //Updated
	import Blog from '../blog/Topics.svelte'; //Updated
	import Branded_accent from '../comps/menus/Branded_accent.svelte';
	import Candi_info from '../profiles/candidate/Candidate.svelte';
	import Contact_validation from '../profiles/admin/analytics/Contact_validation.svelte';
	import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	import Dash_nav from '../profiles/ui/Dash_nav.svelte'; //Updated //Please add things properly for goodness sake
	import Pricing_plan from '../profiles/ui/Pricing_plan.svelte'; //Updated //Please add things properly for goodness sake
	import Sub_plans from '../profiles/ui/Sub_plans.svelte'; //Updated //Please add things properly for goodness sake
	import Dash_nav_banner from '../profiles/ui/Dash_nav_banner.svelte';
	import Dash_nav_final from '../profiles/ui/Dash_nav_final.svelte';
	import Dropdown from '../comps/mock/Dropdown.svelte';
	import Empty_state from '../comps/mock/Empty_state.svelte';
	import Faq from '../about_us/Faq.svelte'; //Updated
	import Footer from '../comps/Footer.svelte'; //Updated...
	import Forgot from './Forgot.svelte'; //Updated
	import Full_side_nav from '../comps/mock/Full_side_nav.svelte';
	import Grouped_buttons from '../comps/mock/Grouped_buttons.svelte';
	import Inputs from '../comps/mock/Inputs.svelte';
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
	import Pagination from '../comps/mock/Pagination.svelte';
	import Pri_pol from '../about_us/Pri_pol.svelte';
	import Pop_cart from '../comps/mock/Pop_cart.svelte';
	import Resume_form from '../profiles/candidate/resume/Resume.svelte'; //Updated
	import Reviews from '../about_us/Reviews.svelte';
	import Sign_in_form from './Sign_in_form.svelte'; //Updated
	import Signn from '../profiles/ui/Sign_register.svelte';
	import Sign_up_form from '../onboarding/Sign_up_form.svelte'; //Updated
	import Sub_man from '../profiles/admin/analytics/Sub_man.svelte';
	// import something from ''./Intro.svelte';
	import Split_with_headings from '../comps/menus/Split_with_headings.svelte';
	import Sub_plan_card from '../comps/mock/Sub_plan_card.svelte';
	import Tab_pills from '../comps/mock/pills_tabs/Tab_pills.svelte';
	import SignInForm from './Sign_in_form.svelte';
	import SignUpForm from '../onboarding/Sign_up_form.svelte';
	import Search_Input from '../comps/Form Inputs/Search_input.svelte';
	import Testimonial from '../about_us/Testimonial.svelte';

	const webpages = [
		{ name: 'Sign Up', component: Sign_up_form },
		{ name: 'Sign In', component: Sign_in_form },
		// { name: 'UI_Name', component: Import_name },
		{ name: 'Home', component: Intro },
		{ name: 'About Us', component: About_us },
		// { name: 'Accordion_menu', component: Accordion_menu },
		// { name: 'Applied Jobs', component: Applied_jobs },
		{ name: 'Attempts', component: Attempts },
		{ name: 'Applicant_profile', component: Applicant_profile },
		// { name: 'Attempts_copy', component: Attempts_copy },
		{ name: 'Blog', component: Blog },
		// { name: 'Branded_accent', component: Branded_accent },
		{ name: 'Candidate info', component: Candi_info },
		{ name: 'Contact_validation', component: Contact_validation },
		{ name: 'Contact Us', component: Contact_us },
		// { name: 'Dash_nav with banner kinda main', component: Dash_nav },
		// { name: 'Dash_nav_final', component: Dash_nav_final }, //Review Bro
		// { name: 'Dropdown', component: Dropdown },
		// { name: 'Empty_state', component: Empty_state },
		{ name: 'Ex_posts', component: Ex_posts },
		{ name: 'Faq', component: Faq },
		{ name: 'Forgot', component: Forgot },
		// { name: 'Full_side_nav', component: Full_side_nav },
		// { name: 'Grouped_buttons', component: Grouped_buttons },
		// { name: 'Inputs', component: Inputs },
		{ name: 'Int_questions', component: Int_questions },
		{ name: 'Job_preview', component: Job_preview },
		{ name: 'Jobs search', component: Jobs_search },
		{ name: 'Job Recs', component: Job_reccommendations },
		{ name: 'Man_report', component: Man_report },
		// { name: 'Menu', component: Menu },
		// { name: 'Messages', component: Messages },
		// { name: 'Nav with Search idk', component: Nav_search },
		// { name: 'Nav_side', component: Nav_side },
		// { name: 'Nav_side_small', component: Nav_side_small },
		// { name: 'Pagination', component: Pagination },
		{ name: 'Post_job', component: Post_job },
		// { name: 'Pri_pol', component: Pri_pol },
		// { name: 'Pop_cart', component: Pop_cart },
		{ name: 'Pricing_plan', component: Pricing_plan },
		{ name: 'Reviews', component: Reviews },
		{ name: 'Resume', component: Resume_form },
		{ name: 'Rec_profile', component: Rec_profile },
		// { name: 'Split_with_headings', component: Split_with_headings },
		{ name: 'Sub_man', component: Sub_man },
		{ name: 'Sub_plans', component: Sub_plans },
		// { name: 'Sign', component: Signn },
		{ name: 'Job/Resume Card', component: Sub_plan_card },
		// { name: 'Tab_pills', component: Tab_pills },
		{ name: 'Testimonial', component: Testimonial },
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
<!--START:()-->
<div class="">
	<header
		class="sticky top-3 mx-4 bg-opacity-70 z-50 bg-lime-200 rounded-full px-2 py-2"
	>
		<!--START:()-->
		<div class="flex items-center justify-between max-w-screen-xl">
			<!--START:()-->
			<div class="flex flex-1">
				<nav class="sticky text-sm font-medium lg:flex lg:flex-1 lg:w-0">
					<!--START:()-->
					<div class="group inline-block">
						<button
							class="outline-none focus:outline-none border py-1 bg-indigo-50 rounded-sm flex min-w-32"
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
							class="bg-slate-600 border -right-9 rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="px-9 py-1 hover:bg-slate-900">
								{#each webpages as webpageObj}
									<button
										target="_blank"
										class="text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-dashed hover:border-pink-600 hover:text-indigo-900 hover:bg-lime-200 px-3 py-2 rounded-md text-sm font-medium"
										title={webpageObj.name}
										on:click={() => loadPage(webpageObj)}
										>{webpageObj.name}</button
									>
								{/each}
							</li>
						</ul>
					</div>
					<div class="px-3 relative"><Search_Input /></div>
				</nav>
			</div>

			<!--START:()-->
			<div
				class="sticky items-center justify-center text-sm font-medium space-x-8 lg:flex lg:flex-1 lg:w-0 flex-shrink-0"
			>
				<img
					class="h-8 w-8"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt="Your Company"
				/>
			</div>

			<!--START:()-->
			<div class="items-center lg:flex text-right sm:px-6">
				<!--START:()-->
				<div class="flex items-center">
					<form class="mb-0 lg:flex">
						<!--START:()-->
					</form>
				</div>
				<form>
					<!-- svelte-ignore a11y-invalid-attribute target=”_blank” -->

					<!-- svelte-ignore a11y-missing-attribute -->
					<a
						on:click={() => loadPage(webpages[0])}
						class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-pink-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
						>Sign Up</a
					>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a
						on:click={() => loadPage(webpages[1])}
						class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-indigo-600 hover:border-2 hover:border-dashed hover:border-pink-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
						>Log In</a
					>
				</form>
			</div>
		</div>
	</header>
	<main class="relative">
		<!--START:()-->
		<div class="max-w-7xl mx-auto p-2">
			<!-- Replace with your content -->
			<!--START:()-->
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
