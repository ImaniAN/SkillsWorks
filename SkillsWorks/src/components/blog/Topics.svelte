<div class="overflow-scroll px-8 py-4 justify-center">
	<div class="flex justify-center">
		<div class="text-sm breadcrumbs bg-slate-800">
			<ul>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-4 h-4 mr-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							/>
						</svg>
						Home
					</a>
				</li>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-4 h-4 mr-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							/>
						</svg>
						Documents
					</a>
				</li>
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="w-4 h-4 mr-2 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					Add Document
				</li>
			</ul>
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->

	<div class="drawer drawer-end">
		<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />

		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer-4" class="drawer-button btn btn-primary"
				>Open Search Filter</label
			>
			<section>
				<div class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
					<div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
						<div class="relative z-10 lg:py-16">
							<div class="relative h-64 sm:h-80 lg:h-full">
								<img
									class="absolute inset-0 object-cover w-full h-full"
									src="https://dummyimage.com/305x305"
									alt="Indoors house"
								/>
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->

						<div class="relative flex items-center bg-slate-100">
							<span
								class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-slate-100 lg:block lg:-left-16"
							/>

							<div class="p-8 sm:p-16 lg:p-24">
								<h2 class="text-2xl font-bold sm:text-3xl text-indigo-600">
									Blog Post Title.
								</h2>

								<p class="mt-4 text-slate-600">
									BLOG CONTENT : Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Aliquid, molestiae! Quidem est esse numquam
									odio deleniti, beatae, magni dolores provident quaerat totam
									eos, aperiam architecto eius quis quibusdam fugiat dicta.Lorem
									ipsum dolor sit amet, consectetur adipisicing elit.
								</p>

								<a
									class="inline-block px-12 py-3 mt-8 text-sm font-medium text-indigo-50 bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
									href="/contact"
								>
									Get in Touch
								</a>
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->
				</div>
				<!--END:()-->
			</section>
		</div>
		<!--END:()-->

		<div class="drawer-side bg-indigo-300">
			<label for="my-drawer-4" class="drawer-overlay " />
			<details
				open
				class="overflow-hidden w-2/5 border border-yellow-400 rounded bg-red-300"
			>
				<summary
					class="flex items-center justify-between px-5 py-3 bg-slate-800 lg:hidden"
				>
					<span class="text-sm font-medium"> Toggle Filters </span>

					<svg
						class="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</summary>

				<form action="" class="border-t border-red-300 lg:border-t-0">
					<!-- component -->
					<div class="flex items-center">
						<label for="voice-search" class="sr-only">Search</label>
						<div class="relative w-full">
							<div
								class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
							>
								<svg
									aria-hidden="true"
									class="w-5 h-5 text-slate-500 dark:text-slate-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<!--END:()-->

							<input
								type="text"
								id="voice-search"
								class="bg-slate-50 border-2 border-red-300 border-dashed text-slate-900 text-sm focus:ring-indigo-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-slate-700 dark:border-indigo-600 dark:placeholder-slate-400 dark:text-indigo-50 dark:focus:ring-indigo-500 dark:focus:border-blue-500"
								placeholder="Search blog topics..."
							/>
							<button
								type="button"
								class="flex absolute inset-y-0 right-0 items-center pr-3"
							>
								<svg
									aria-hidden="true"
									class="w-4 h-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-indigo-50"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<!--END:()-->

						<button
							type="submit"
							class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-indigo-50 bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-indigo-800"
						>
							<svg
								aria-hidden="true"
								class="mr-2 -ml-1 w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>Search
						</button>
					</div>
					<!--END:()-->

					<fieldset>
						<legend
							class="block w-full px-5 py-3 text-xs font-medium bg-slate-500"
						>
							Type
						</legend>

						<div class="px-5 py-6 space-y-2">
							<div class="flex items-center">
								<input
									id="toy"
									type="checkbox"
									name="type[toy]"
									class="w-5 h-5 border-red-300 rounded"
								/>

								<label for="toy" class="ml-3 text-sm font-medium"> Toy </label>
							</div>
							<!--END:()-->

							<div class="flex items-center">
								<input
									id="game"
									type="checkbox"
									name="type[game]"
									class="w-5 h-5 border-red-300 rounded"
								/>

								<label for="game" class="ml-3 text-sm font-medium">
									Game
								</label>
							</div>
							<!--END:()-->

							<div class="flex items-center">
								<input
									id="outdoor"
									type="checkbox"
									name="type[outdoor]"
									class="w-5 h-5 border-red-300 rounded"
								/>

								<label for="outdoor" class="ml-3 text-sm font-medium">
									Outdoor
								</label>
							</div>
							<!--END:()-->

							<div class="pt-2">
								<button type="button" class="text-xs text-slate-500 underline">
									Reset Type
								</button>
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->
					</fieldset>

					<div>
						<fieldset>
							<legend
								class="block w-full px-5 py-3 text-xs font-medium bg-slate-500"
							>
								Age
							</legend>

							<div class="px-5 py-6 space-y-2">
								<div class="flex items-center">
									<input
										id="3+"
										type="checkbox"
										name="age[3+]"
										class="w-5 h-5 border-red-300 rounded"
									/>

									<label for="3+" class="ml-3 text-sm font-medium"> 3+ </label>
								</div>
								<!--END:()-->

								<div class="flex items-center">
									<input
										id="8+"
										type="checkbox"
										name="age[8+]"
										class="w-5 h-5 border-red-300 rounded"
									/>

									<label for="8+" class="ml-3 text-sm font-medium"> 8+ </label>
								</div>
								<!--END:()-->

								<div class="flex items-center">
									<input
										id="12+"
										type="checkbox"
										name="age[12+]"
										class="w-5 h-5 border-red-300 rounded"
									/>

									<label for="12+" class="ml-3 text-sm font-medium">
										12+
									</label>
								</div>
								<!--END:()-->

								<div class="flex items-center">
									<input
										id="16+"
										type="checkbox"
										name="age[16+]"
										class="w-5 h-5 border-red-300 rounded"
									/>

									<label for="16+" class="ml-3 text-sm font-medium">
										16+
									</label>
								</div>
								<!--END:()-->

								<div class="pt-2">
									<button
										type="button"
										class="text-xs text-slate-500 underline"
									>
										Reset Age
									</button>
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->
						</fieldset>
					</div>
					<!--END:()-->

					<div class="flex justify-between px-5 py-3 border-t border-red-300">
						<button
							name="reset"
							type="button"
							class="text-xs font-medium text-slate-600 underline rounded"
						>
							Reset All
						</button>

						<button
							name="commit"
							type="button"
							class="px-5 py-3 text-xs font-medium text-indigo-50 bg-green-600 rounded"
						>
							Apply Filters
						</button>
					</div>
					<!--END:()-->
				</form>
			</details>
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
</div>
