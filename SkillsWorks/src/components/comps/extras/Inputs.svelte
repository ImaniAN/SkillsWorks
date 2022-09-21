
<div class="">
	<header
		class="sticky top-3 mx-4 bg-opacity-70 z-50 bg-indigo-200 rounded-full px-2 py-2"
	>
  <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto">
  <a
    class="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
    href="/"
  >
    👋
  </a>

  <ul class="flex items-center text-sm font-medium text-gray-500 gap-2">
    <li class="hidden lg:block">
      <a class="px-3 py-2 rounded-lg" href="/"> Home </a>
    </li>

    <li><a class="px-3 py-2 rounded-lg" href=""> Projects </a></li>

    <li>
      <a
        class="inline-flex items-center px-3 py-2 rounded-lg"
        href=""
        target="_blank"
      >
        External
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="ml-1.5 w-4 h-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>

		<div class="">
			<div class="flex flex-1">
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
