<!--
 This example requires updating your template:

 ```
 <html class="h-full bg-slate-100">
 <body class="h-full">
 ```
-->
<script>
	import Banner from './Banner.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<!--START:()-->
<div class="min-h-full">
	<nav class="bg-slate-800">
		<!--START:()-->
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<!--START:()-->
			<div class="flex items-center justify-between h-16">
				<!--START:()-->
				<div class="flex items-center">
					<!--START:()-->
					<div class="flex-shrink-0">
						<img
							class="h-8 w-8"
							src="https://dummyimage.com/305x305"
							alt="Workflow"
						/>
					</div>
					<!--START:()-->
					<div class="hidden md:block">
						<!--START:()-->
						<div class="ml-10 flex items-baseline space-x-4">
							<!-- Current: "bg-slate-800 text-indigo-50", Default: "text-slate-50 hover:bg-slate-700 hover:text-indigo-50" -->
							<!-- svelte-ignore a11y-invalid-attribute -->

							<a
								href="#"
								class="bg-slate-800 text-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								aria-current="page">Dashboard</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->

							<a
								href="#"
								class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Team</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->

							<a
								href="#"
								class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Projects</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->

							<a
								href="#"
								class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Calendar</a
							>

							<!-- svelte-ignore a11y-invalid-attribute -->

							<a
								href="#"
								class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
								>Reports</a
							>
						</div>
					</div>
				</div>
				<!--START:()-->
				<div class="hidden md:block">
					<!--START:()-->
					<div class="ml-4 flex items-center md:ml-6">
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
						<!--START:()-->
						<div class="ml-3 relative">
							<!--START:()-->
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
							<!--START:()-->
							<div
								class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-indigo-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- Active: "bg-slate-100", Not Active: "" -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="#"
									class="block px-4 py-2 text-sm text-slate-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>

								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="#"
									class="block px-4 py-2 text-sm text-slate-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1">Settings</a
								>

								<!-- svelte-ignore a11y-invalid-attribute -->
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
				<!--START:()-->
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
		<!--START:()-->
		<div class="md:hidden" id="mobile-menu">
			<!--START:()-->
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<!-- Current: "bg-slate-800 text-indigo-50", Default: "text-slate-50 hover:bg-slate-700 hover:text-indigo-50" -->
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="bg-slate-800 text-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					aria-current="page">Dashboard</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Team</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Projects</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Calendar</a
				>

				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="text-slate-50 hover:bg-slate-700 hover:text-indigo-50 block px-3 py-2 rounded-md text-base font-medium"
					>Reports</a
				>
			</div>
			<!--START:()-->
			<div class="pt-4 pb-3 border-t border-slate-700">
				<!--START:()-->
				<div class="flex items-center px-5">
					<!--START:()-->
					<div class="flex-shrink-0">
						<img
							class="h-10 w-10 rounded-full"
							src="https://dummyimage.com/305x305"
							alt=""
						/>
					</div>
					<!--START:()-->
					<div class="ml-3">
						<!--START:()-->
						<div class="text-base font-medium leading-none text-indigo-50">
							Tom Cook
						</div>
						<!--START:()-->
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
				<!--START:()-->
				<div class="mt-3 px-2 space-y-1">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-indigo-50 hover:bg-slate-700"
						>Your Profile</a
					>

					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-indigo-50 hover:bg-slate-700"
						>Settings</a
					>

					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-3 py-2 rounded-md text-base font-medium text-slate-400 hover:text-indigo-50 hover:bg-slate-700"
						>Sign out</a
					>
				</div>
			</div>
		</div>
	</nav>
	<Banner />
	<header class="bg-indigo-50 shadow">
		<!--START:()-->
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<h1 class="text-center text-3xl tracking-tight font-bold text-slate-900">
				Dashboard
			</h1>
		</div>
	</header>
	<main>
		<!--START:()-->
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<!--START:()-->
			<div class="px-4 py-6 sm:px-0">
				<!--START:()-->
				<div class="border-4 border-dashed border-slate-200 rounded-lg h-96" />
			</div>
			<!-- /End replace -->
		</div>
	</main>
</div>
