<script>
	// import Athing from '../';
	// import Accordion_menu from './menus/Accordion_menu.svelte';
	// import Job_ad_man from '../profiles/admin/analytics/Job_ad_man.svelte'; //Creates aFailed to fetch dynamically imported module:TYPEERROR(NO solutions avaliable)
	// import Dets_app from '../profiles/candidate/jobs/Dets_app.svelte';
	// import Applied_jobs from '../profiles/candidate/jobs/Ex_jobs.svelte'; //Updated
	// import Int_questions from '../profiles/recruiter/jobs/Int_questions.svelte'; //Updated
	// import Post_job from '../profiles/recruiter/jobs/Post_job.svelte'; //Updated
	// import Ex_posts from '../profiles/recruiter/jobs/Ex_posts.svelte'; //Updated
	// import Applicant_profile from '../profiles/recruiter/jobs/Applicant_profile.svelte'; //Updated
	// import Attempts from '../endeavors/Attempts.svelte'; //Updated
	// import Blog from '../blog/Topics.svelte'; //Updated
	// import Branded_accent from './menus/Branded_accent.svelte';
	// import Candi_info from '../profiles/candidate/Candidate.svelte';
	// import Contact_validation from '../profiles/admin/analytics/Contact_validation.svelte';
	// import Category_filters from './Category_filters.svelte';
	// import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	// import Dash_nav from '../profiles/ui/Dash_nav.svelte'; //Updated //Please add things properly for goodness sake
	// import Pricing_plan from '../profiles/ui/Pricing_plan.svelte'; //Updated //Please add things properly for goodness sake
	// import Sub_plans from '../profiles/ui/Sub_plans.svelte'; //Updated //Please add things properly for goodness sake
	// import Dash_nav_banner from '../profiles/ui/Dash_nav_banner.svelte';
	// import Dash_nav_final from '../profiles/ui/Dash_nav_final.svelte';
	// import Dropdown from './Dropdown.svelte';
	// import Empty_state from './Empty_state.svelte';
	// import Faq from '../about_us/Faq.svelte'; //Updated
	// import Footer from '../comps/Footer.svelte'; //Updated...
	// import Forgot from './Forgot.svelte'; //Updated
	// import Full_side_nav from './Full_side_nav.svelte';
	// import Grouped_buttons from './Grouped_buttons.svelte';
	// import Inputs from './Inputs.svelte';
	// import Intro from './Intro.svelte';
	// import Jobs_search from '../profiles/ui/Jobs_search.svelte'; //Updated
	// import Job_reccommendations from '../profiles/candidate/jobs/Job_recc.svelte';
	// import Menu from '../profiles/ui/F_Menu.svelte';
	// import Man_report from '../profiles/admin/analytics/Man_report.svelte';
	// import Messages from '../profiles/ui/messages/Messages.svelte'; //Updated
	// import Nav_search from '../profiles/ui/Nav_search.svelte';
	// import Nav_side from '../profiles/ui/Nav_side.svelte';
	// import Job_preview from '../profiles/ui/Job_preview.svelte';
	// import Nav_side_small from '../profiles/ui/Nav_side_small.svelte';
	// import Navbar from '../comps/Navbar.svelte'; //Updated...
	// import Pagination from './Pagination.svelte';
	// import Pri_pol from '../about_us/Pri_pol.svelte';
	// import Pop_cart from './Pop_cart.svelte';
	// import Resume_form from '../profiles/candidate/resume/Resume.svelte'; //Updated
	// import Reviews from '../about_us/Reviews.svelte';
	// import Sign_in_form from './Sign_in_form.svelte'; //Updated
	// import Signn from '../profiles/ui/Sign_register.svelte';
	// import Sign_up_form from '../onboarding/Sign_up_form.svelte'; //Updated
	// import Sub_man from '../profiles/admin/analytics/Sub_man.svelte';
	// import Accordion_Menu from './menus/Accordion_menu.svelte';
	// import Split_with_headings from './menus/Split_with_headings.svelte';
	import Sub_plan_card from './Sub_plan_card.svelte';
	import Tab_pills from './Tab_pills.svelte';
	// import About_us from '../about_us/Aboutus.svelte'; //Updated
	// import Testimonial from '../about_us/Testimonial.svelte';

	const webpages = [
		// { name: 'UI_Name', component: Import_name },
		// { name: 'Job_ad_man', component: Job_ad_man },
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
		// { name: 'Sign', component: Signn },
		// { name: 'Pricing_plan', component: Pricing_plan },
		{ name: 'Sub_plan_card', component: Sub_plan_card },
		{ name: 'Tab_pills', component: Tab_pills },
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

<div class="w-full px-8 py-4 justify-center">
	<div class="">
		<div class="navbar bg-base-100">
			<div class="navbar-start">
				<div class="dropdown">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/></svg
						>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
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
				<div class="dropdown">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn m-1">Click Card title!</label>
					<div
						tabindex="0"
						class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
					>
						<div class="card-body">
							<h3 class="card-title">Card title!</h3>
							<p>you can use any element as a dropdown.</p>
						</div>
					</div>
				</div>
				<div class="dropdown">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn m-1">Click</label>
					<ul
						tabindex="0"
						class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Item 1</a></li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<li><a href="#">Item 2</a></li>
					</ul>
				</div>

				<div>
					<!-- The button to open modal -->
					<label for="my-modal-5" class="btn modal-button">open modal</label>

					<!-- Put this part before </body> tag -->
					<input type="checkbox" id="my-modal-5" class="modal-toggle" />
					<div class="modal">
						<div class="modal-box w-11/12 max-w-5xl">
							<h3 class="font-bold text-lg">
								Congratulations random Internet user!
							</h3>
							<p class="py-4">
								You've been selected for a chance to get one year of
								subscription to use Wikipedia for free!
							</p>
							<div class="modal-action">
								<label for="my-modal-5" class="btn">Yay!</label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="navbar-center">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
				<button class="btn btn-ghost btn-circle">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/></svg
						>
						<span class="badge badge-xs badge-primary indicator-item" />
					</div>
				</button>
			</div>
		</div>
	</div>
	<div class="relative min-h-screen flex ">00CONTENT00</div>
	<!--END:()-->
</div>
<!--END:()-->
