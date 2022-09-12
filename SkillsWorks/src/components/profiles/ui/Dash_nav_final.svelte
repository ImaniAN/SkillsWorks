<script>
	import Flaotees from './Flaotees.svelte';
	import Banner from './Banner.svelte';
	import Menu from './F_Menu.svelte';
	import Resume from '../candidate/resume/Resume.svelte';
	import Candi_info from '../candidate/Candidate.svelte';
</script>

<div class="min-h-full">
	<nav class="bg-slate-800">
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
							<!-- Current: "bg-slate-900 text-indigo-50", Default: "text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50" -->
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								class="bg-slate-900 text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page">Dashboard</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Team</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Projects</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Calendar</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								href="#"
								class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Reports</a
							>
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<button
							type="button"
							class="bg-slate-800 p-1 rounded-full text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 cursor-pointer hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50"
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
								class="z-10 origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-indigo-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<Menu />
							</div>
						</div>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-indigo-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
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
				<!-- Current: "bg-slate-900 text-indigo-50", Default: "text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50" -->
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page">Dashboard</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Team</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Projects</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Calendar</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50  hover:border-2 hover:border-dashed hover:border-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Reports</a
				>
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
						<div class="text-base font-medium leading-none text-indigo-50">
							Tom Cook
						</div>
						<div class="text-sm font-medium leading-none text-slate-400">
							tom@example.com
						</div>
					</div>
					<button
						type="button"
						class="ml-auto bg-slate-800 flex-shrink-0 p-1 rounded-full text-slate-400 hover:text-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
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
					<Menu />
				</div>
			</div>
		</div>
	</nav>
	<!-- <Banner /> -->
	<header class="bg-indigo-50 shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-3xl tracking-tight font-bold text-slate-900">
				Dashboard
			</h1>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="relative min-h-screen flex ">
				<div
					class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto bg-slate-50"
				>
					<div
						class="w-11/12 h-full sm:hidden md:flex flex-auto items-end justify-end overflow-hidden bg-yellow-200 text-indigo-50 bg-no-repeat bg-cover relative"
					>
						<div
							class="absolute bg-gradient-to-b from-white to-indigo-900 opacity-25 inset-0 z-0"
						/>
						<div class="w-full z-10 mb-1">
							<div class="leading-tight mb-1">
								<!-- <Candi_info /> -->
								<!-- <Resume /> -->
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->
						<!---remove custom style-->
						<ul class="squares max-w-sm:hidden">
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
							<li />
						</ul>

						<!--END:()-->
					</div>
					<!--END:()-->
				</div>
				<!--END:()-->
				<!-- /End replace -->
			</div>
		</div>
	</main>
</div>

<!-- component -->
<style>
	/*remove custom style*/
	.squares {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.squares li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: indigo;
		animation: animate 25s linear infinite;
		bottom: -320px;
	}
	.squares li:nth-child(1) {
		left: 3%;
		width: 99px;
		height: 99px;
		animation-delay: 3, 14s;
		animation-duration: 30s;
	}

	.squares li:nth-child(2) {
		left: 26%;
		width: 114px;
		height: 114px;
		animation-delay: 3, 14s;
		animation-duration: 10s;
	}

	.squares li:nth-child(3) {
		left: 39%;
		width: 133px;
		height: 133px;
		animation-delay: 3, 14s;
		animation-duration: 20s;
	}

	.squares li:nth-child(4) {
		left: 48%;
		width: 88px;
		height: 88px;
		animation-delay: 3, 14s;
		animation-duration: 11s;
	}

	.squares li:nth-child(5) {
		left: 55%;
		width: 55px;
		height: 55px;
		animation-delay: 3, 14s;
		animation-duration: 32s;
	}

	.squares li:nth-child(6) {
		left: 69%;
		width: 99px;
		height: 99px;
		animation-delay: 3, 14s;
		animation-duration: 33s;
	}

	.squares li:nth-child(7) {
		left: 62%;
		width: 88px;
		height: 88px;
		animation-delay: 3, 14s;
		animation-duration: 34s;
	}

	.squares li:nth-child(8) {
		left: 19%;
		width: 69px;
		height: 69px;
		animation-delay: 3, 14s;
		animation-duration: 21s;
	}

	.squares li:nth-child(9) {
		left: 2%;
		width: 82px;
		height: 82px;
		animation-delay: 3, 14s;
		animation-duration: 22s;
	}

	.squares li:nth-child(10) {
		left: 5%;
		width: 50px;
		height: 50px;
		animation-delay: 3, 14s;
		animation-duration: 23s;
	}

	.squares li:nth-child(11) {
		left: 39%;
		width: 314px;
		height: 314px;
		animation-delay: 3, 14s;
		animation-duration: 24s;
	}

	.squares li:nth-child(12) {
		left: 42%;
		width: 20px;
		height: 20px;
		animation-delay: 3, 14s;
		animation-duration: 12s;
	}

	.squares li:nth-child(13) {
		left: 33%;
		width: 153px;
		height: 153px;
		animation-delay: 3, 14s;
		animation-duration: 13s;
	}
	.squares li:nth-child(14) {
		left: 12%;
		width: 222px;
		height: 222px;
		animation-delay: 3, 14s;
		animation-duration: 14s;
	}

	.squares li:nth-child(15) {
		left: 55%;
		width: 55px;
		height: 55px;
		animation-delay: 3, 14s;
		animation-duration: 15s;
	}
	.squares li:nth-child(16) {
		left: 44%;
		width: 33px;
		height: 33px;
		animation-delay: 3, 14s;
		animation-duration: 25s;
	}

	.squares li:nth-child(17) {
		left: 77%;
		width: 77px;
		height: 77px;
		animation-delay: 3, 14s;
		animation-duration: 26s;
	}
	.squares li:nth-child(18) {
		left: 88%;
		width: 217px;
		height: 217px;
		animation-delay: 3, 14s;
		animation-duration: 17s;
	}

	.squares li:nth-child(19) {
		left: 90%;
		width: 238px;
		height: 238px;
		animation-delay: 3, 14s;
		animation-duration: 27s;
	}
	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-3000px) rotate(900deg);
			opacity: 0;
			border-radius: 99%;
		}
	}
</style>
