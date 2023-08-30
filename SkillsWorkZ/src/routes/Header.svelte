<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/skillsworks-logo.svg';
	import github from '$lib/images/sign-in.svg';
</script>

<header class="sticky top-0">
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<!-- Nav Bar items component -->

	<nav class="flex-col">
		<ul class="flex justify-center items-center space-x-1">
			<li>
				<a href="/"
					><div class="group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">Home</span>
						</button>
					</div></a
				>
			</li>
			<li>
				<a href="/about"
					><div class="group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">Jobs</span>
							<span>
								<svg
									class="fill-current h-4 w-4 transform group-hover:-rotate-180
							transition duration-150 ease-in-out"
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
							class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
				transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Search Jobs</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Featured Jobs</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Browse Jobs</li>
							<li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
								<button class="w-full text-left flex items-center outline-none focus:outline-none">
									<span class="pr-1 flex-1">Job Categories</span>
									<span class="mr-auto">
										<svg
											class="fill-current h-4 w-4
									transition duration-150 ease-in-out"
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
									class="bg-white border rounded-sm absolute top-0 right-0
				transition duration-150 ease-in-out origin-top-left
				min-w-32
				"
								>
									<li class="px-3 py-1 hover:bg-gray-100">Retail</li>
									<li class="px-3 py-1 hover:bg-gray-100">Hospitatilty</li>
									<li class="px-3 py-1 hover:bg-gray-100">Food Services</li>
									<li class="px-3 py-1 hover:bg-gray-100">Manufacturing</li>
									<li class="px-3 py-1 hover:bg-gray-100">Construction</li>
									<li class="px-3 py-1 hover:bg-gray-100">Transportation</li>
									<li class="px-3 py-1 hover:bg-gray-100">Warehousing</li>
									<li class="px-3 py-1 hover:bg-gray-100">Cleaning Services</li>
									<li class="px-3 py-1 hover:bg-gray-100">Healthcare support</li>
									<li class="px-3 py-1 hover:bg-gray-100">Childcare</li>
								</ul>
							</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Job Alerts</li>
						</ul>
					</div></a
				>
			</li>
			<li>
				<a href="/sverdle"
					><div class="group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">Employer</span>
							<span>
								<svg
									class="fill-current h-4 w-4 transform group-hover:-rotate-180
							transition duration-150 ease-in-out"
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
							class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
				transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Post a job</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Employer Login</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Pricing</li>
							<li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
								<button class="w-full text-left flex items-center outline-none focus:outline-none">
									<span class="pr-1 flex-1">Employer resources</span>
									<span class="mr-auto">
										<svg
											class="fill-current h-4 w-4
									transition duration-150 ease-in-out"
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
									class="bg-white border rounded-sm absolute top-0 right-0
				transition duration-150 ease-in-out origin-top-left
				min-w-32
				"
								>
									<li class="px-3 py-1 hover:bg-gray-100">Hiring Tips</li>
									<li class="px-3 py-1 hover:bg-gray-100">Employer Blog</li>
									<li class="px-3 py-1 hover:bg-gray-100">Labour Laws</li>
								</ul>
							</li>
						</ul>
					</div></a
				>
			</li>
			<li>
				<a href="/sverdle"
					><div class="group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">Job Seeker</span>
							<span>
								<svg
									class="fill-current h-4 w-4 transform group-hover:-rotate-180
							transition duration-150 ease-in-out"
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
							class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
				transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Job Seeker Login</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Resume Builder</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Cover Letter Builder</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Interview Tips</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Job Search Tips</li>
							<li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
								<button class="w-full text-left flex items-center outline-none focus:outline-none">
									<span class="pr-1 flex-1">Job Search Resources</span>
									<span class="mr-auto">
										<svg
											class="fill-current h-4 w-4
									transition duration-150 ease-in-out"
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
									class="bg-white border rounded-sm absolute top-0 right-0
				transition duration-150 ease-in-out origin-top-left
				min-w-32
				"
								>
									<li class="px-3 py-1 hover:bg-gray-100">Job Seeker Blog</li>
									<li class="px-3 py-1 hover:bg-gray-100">Unemployment resources</li>
									<li class="px-3 py-1 hover:bg-gray-100">Labour Laws</li>
								</ul>
							</li>
						</ul>
					</div></a
				>
			</li>
			<li>
				<a href="/sverdle"
					><div class="group inline-block">
						<button
							class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
						>
							<span class="pr-1 font-semibold flex-1">User Support</span>
							<span>
								<svg
									class="fill-current h-4 w-4 transform group-hover:-rotate-180
							transition duration-150 ease-in-out"
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
							class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
				transition duration-150 ease-in-out origin-top min-w-32"
						>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Frequently Asked Questions</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Contact Support</li>
							<li class="rounded-sm px-3 py-1 hover:bg-gray-100">Technical Support</li>
						</ul>
					</div></a
				>
			</li>
		</ul>
	</nav>

	<!-- Nav Bar items component -->

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<!-- Nav Bar items component -->
<!-- Nav Bar items component -->
<!-- Nav Bar items component -->
<!-- Nav Bar items component -->
<!-- Nav Bar items component -->
<!-- Nav Bar items component -->
<style>
	/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
	li > ul {
		transform: translatex(100%) scale(0);
	}
	li:hover > ul {
		transform: translatex(101%) scale(1);
	}
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
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}
</style>
