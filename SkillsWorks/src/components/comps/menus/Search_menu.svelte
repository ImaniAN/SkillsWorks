<script>
	import Search_Input from '../../comps/Form Inputs/Search_input.svelte';
	import Msg_preview from '../../comps/Messages/Msg_preview.svelte';
</script>

<!-- component -->
<main class="flex w-full h-full shadow-lg rounded-3xl">
	<div class="mt-3 mr-3 px-3 flex-row w-4/12">
		<div class="relative"><Search_Input /></div>
		<div class="p-3 relative lg:sticky lg:top-4 pt-2">
			<details open class="overflow-hidden border border-gray-200 rounded">
				<summary
					class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
				>
					<span class="text-sm font-medium">Toggle Filters</span>

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

				<form
					method="post"
					name="search-filter"
					id="search-filter"
					action=""
					class="border-t border-gray-200 lg:border-t-0"
				>
					<fieldset
						name="blog-type-fieldset"
						id="blog-type-fieldset"
						form="search-filter"
					>
						<legend
							class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
						>
							Blog Type
						</legend>

						<!--START:()-->
						<div class="px-5 py-6 space-y-2">
							<!--START:()-->
							<div class="flex items-center">
								<input
									id="visual"
									type="checkbox"
									name="type[visual]"
									class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>

								<label for="visual" class="ml-3 text-sm font-medium">
									Visual
								</label>
							</div>

							<!--START:()-->
							<div class="flex items-center">
								<input
									id="audio"
									type="checkbox"
									name="type[audio]"
									class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>

								<label for="audio" class="ml-3 text-sm font-medium">
									Audio
								</label>
							</div>

							<!--START:()-->
							<div class="flex items-center">
								<input
									id="written"
									type="checkbox"
									name="type[written]"
									class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>

								<label for="written" class="ml-3 text-sm font-medium">
									Written
								</label>
							</div>

							<!--START:()-->
							<div class="pt-2">
								<button
									type="reset"
									for="blog-type-fieldset"
									class="text-xs text-gray-500 underline"
								>
									Reset Type
								</button>
							</div>
						</div>
					</fieldset>

					<!--START:()-->
					<div>
						<fieldset
							name="age-fieldset"
							id="age-fieldset"
							form="search-filter"
						>
							<legend
								class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
							>
								Age
							</legend>

							<!--START:()-->
							<div class="px-5 py-6 space-y-2">
								<!--START:()-->
								<div class="flex items-center">
									<input
										id="3+"
										type="checkbox"
										name="age[3+]"
										class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>

									<label for="3+" class="ml-3 text-sm font-medium"> 3+ </label>
								</div>

								<!--START:()-->
								<div class="flex items-center">
									<input
										id="8+"
										type="checkbox"
										name="age[8+]"
										class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>

									<label for="8+" class="ml-3 text-sm font-medium"> 8+ </label>
								</div>

								<!--START:()-->
								<div class="flex items-center">
									<input
										id="12+"
										type="checkbox"
										name="age[12+]"
										class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>

									<label for="12+" class="ml-3 text-sm font-medium">
										12+
									</label>
								</div>

								<!--START:()-->
								<div class="flex items-center">
									<input
										id="16+"
										type="checkbox"
										name="age[16+]"
										class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
									/>

									<label for="16+" class="ml-3 text-sm font-medium">
										16+
									</label>
								</div>

								<!--START:()-->
								<div class="pt-2">
									<button
										type="reset"
										for="age-fieldset"
										class="text-xs text-gray-500 underline"
									>
										Reset Age
									</button>
								</div>
							</div>
						</fieldset>
					</div>

					<!--START:()-->
					<div class="flex justify-between px-5 py-3 border-t border-gray-200">
						<button
							for="search-filter"
							type="reset"
							class="text-xs font-medium text-gray-600 underline rounded"
						>
							Reset All
						</button>

						<button
							name="commit"
							type="button"
							class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
						>
							Apply Filters
						</button>
					</div>
				</form>
			</details>
		</div>
	</div>
	<section
		class="flex flex-col pt-3 w-4/12 bg-slate-50 overflow-y-scrol rounded-l-3xl"
	>
		<ul class="mt-6">
			<Msg_preview />Job data or information
			<Msg_preview />Job data or information
			<Msg_preview />Job data or information
			<Msg_preview />Job data or information
			<li class="py-5 px-3 bg-indigo-500 text-indigo-50">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="flex justify-between items-center">
					<h3 class="text-lg text-slate-900 font-semibold">Akhil Gautam</h3>
					<p class="text-md">23m ago</p>
				</a>
				<!--START:()-->
				<div class="text-md">You have been invited!</div>
			</li>
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
		</ul>
	</section>
	<section class="w-6/12 px-4 flex flex-col bg-indigo-100 rounded-r-3xl">
		<!--START:()-->
		<div class="flex justify-between items-center h-48 mb-8">
			<!--START:()-->
			<div class="flex space-x-4 items-center">
				<!--START:()-->
				<div class="h-12 w-12 rounded-full overflow-hidden">
					<img
						alt="#"
						src="https://dummyimage.com/305x305"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<!--START:()-->
				<div class="flex flex-col">
					<h3 class="font-semibold text-slate-900 text-lg">Akhil Gautam</h3>
					<p class="text-light text-slate-400">akhil.gautam123@gmail.com</p>
				</div>
			</div>
			<!--START:()-->
			<div>
				<ul class="flex text-slate-900 space-x-4">
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
							/>
						</svg>
					</li>
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</li>

					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
							/>
						</svg>
					</li>
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</li>
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</div>
		<section>
			<h1 class="font-bold text-slate-900 text-2xl">We need UI/UX designer</h1>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<article class="mt-8 text-slate-500 leading-7 tracking-wider">
				<p>Hi Akhil,</p>
				<p>
					Design and develop enterprise-facing UI and consumer-facing UI as well
					as REST API backends.Work with Product Managers and User Experience
					designers to create an appealing user experience for desktop web and
					mobile web.
				</p>
				<footer class="mt-12">
					<p>Thanks & Regards,</p>
					<p>Alexandar</p>
				</footer>
			</article>
			<ul class="flex space-x-4 mt-12">
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-indigo-600 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-teal-400 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-amber-500 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
						/>
					</svg>
				</li>
			</ul>
		</section>
		<section class="mt-6 rounded-xl bg-slate-50 mb-3">
			<textarea
				class="rounded-lg flex-1 appearance-none border-2 border-teal-400 border-dashed w-full py-2 px-4 bg-slate-50 text-slate-700 placeholder-amber-500 text-base focus:ring-indigo-600 focus:border-transparent shadow focus:outline-none focus:ring"
				placeholder="Type your reply here..."
				rows="3"
			/>
			<!--START:()-->
			<div class="flex items-center justify-between p-2">
				<button class="h-6 w-6 text-slate-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						/>
					</svg>
				</button>
				<button
					class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-indigo-500 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
					>Reply</button
				>
			</div>
		</section>
	</section>
</main>

<!-- component -->
<section class="container px-4 mx-auto">
	<div class="sm:flex sm:items-center sm:justify-between">
		<div>
			<div class="flex items-center gap-x-3">
				<h2 class="text-lg font-medium text-gray-800 dark:text-white">
					Customers
				</h2>

				<span
					class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400"
					>240 vendors</span
				>
			</div>

			<p class="mt-1 text-sm text-gray-500 dark:text-gray-800">
				These companies have purchased in the last 12 months.
			</p>
		</div>

		<div class="flex items-center mt-4 gap-x-3">
			<button
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_3098_154395)">
						<path
							d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
							stroke="currentColor"
							stroke-width="1.67"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_3098_154395">
							<rect width="20" height="20" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<span>Import</span>
			</button>

			<button
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<span>Add vendor</span>
			</button>
		</div>
	</div>

	<div class="mt-6 md:flex md:items-center md:justify-between">
		<div
			class="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700"
		>
			<button
				class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300"
			>
				View all
			</button>

			<button
				class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
			>
				Monitored
			</button>

			<button
				class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
			>
				Unmonitored
			</button>
		</div>

		<div class="relative flex items-center mt-4 md:mt-0">
			<span class="absolute">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</span>

			<input
				type="text"
				placeholder="Search"
				class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
			/>
		</div>
	</div>

	<div class="flex flex-col mt-6">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div
					class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg"
				>
					<table
						class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
					>
						<thead class="bg-gray-50 dark:bg-gray-800">
							<tr>
								<th
									scope="col"
									class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
								>
									<button class="flex items-center gap-x-3 focus:outline-none">
										<span>Company</span>

										<svg
											class="h-3"
											viewBox="0 0 10 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
												fill="currentColor"
												stroke="currentColor"
												stroke-width="0.1"
											/>
											<path
												d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
												fill="currentColor"
												stroke="currentColor"
												stroke-width="0.1"
											/>
											<path
												d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
												fill="currentColor"
												stroke="currentColor"
												stroke-width="0.3"
											/>
										</svg>
									</button>
								</th>

								<th
									scope="col"
									class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
								>
									Status
								</th>

								<th
									scope="col"
									class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
								>
									About
								</th>

								<th
									scope="col"
									class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
									>Users</th
								>

								<th
									scope="col"
									class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
									>License use</th
								>

								<th scope="col" class="relative py-3.5 px-4">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody
							class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900"
						>
							<tr>
								<td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
									<div>
										<h2 class="font-medium text-gray-800 dark:text-white ">
											Catalog
										</h2>
										<p
											class="text-sm font-normal text-gray-600 dark:text-gray-400"
										>
											catalogapp.io
										</p>
									</div>
								</td>
								<td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
									<div
										class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
									>
										Customer
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div>
										<h4 class="text-gray-700 dark:text-gray-200">
											Content curating app
										</h4>
										<p class="text-gray-500 dark:text-gray-400">
											Brings all your news into one place
										</p>
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div class="flex items-center">
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<p
											class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
										>
											+4
										</p>
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div
										class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full"
									>
										<div class="bg-blue-500 w-2/3 h-1.5" />
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<button
										class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
											/>
										</svg>
									</button>
								</td>
							</tr>

							<tr>
								<td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
									<div>
										<h2 class="font-medium text-gray-800 dark:text-white ">
											Circooles
										</h2>
										<p
											class="text-sm font-normal text-gray-600 dark:text-gray-400"
										>
											getcirooles.com
										</p>
									</div>
								</td>
								<td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
									<div
										class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800"
									>
										Churned
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div>
										<h4 class="text-gray-700 dark:text-gray-200">
											Design software
										</h4>
										<p class="text-gray-500 dark:text-gray-400">
											Super lightweight design app
										</p>
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div class="flex items-center">
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<p
											class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
										>
											+4
										</p>
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div
										class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full"
									>
										<div class="bg-blue-500 w-2/5 h-1.5" />
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<button
										class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
											/>
										</svg>
									</button>
								</td>
							</tr>

							<tr>
								<td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
									<div>
										<h2 class="font-medium text-gray-800 dark:text-white ">
											Sisyphus
										</h2>
										<p
											class="text-sm font-normal text-gray-600 dark:text-gray-400"
										>
											sisyphus.com
										</p>
									</div>
								</td>
								<td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
									<div
										class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
									>
										Customer
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div>
										<h4 class="text-gray-700 dark:text-gray-200">
											Automation and workflow
										</h4>
										<p class="text-gray-500 dark:text-gray-400">
											Time tracking, invoicing and expenses
										</p>
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div class="flex items-center">
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<p
											class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
										>
											+4
										</p>
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div
										class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full"
									>
										<div class="bg-blue-500 w-11/12 h-1.5" />
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<button
										class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
											/>
										</svg>
									</button>
								</td>
							</tr>

							<tr>
								<td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
									<div>
										<h2 class="font-medium text-gray-800 dark:text-white ">
											Hourglass
										</h2>
										<p
											class="text-sm font-normal text-gray-600 dark:text-gray-400"
										>
											hourglass.app
										</p>
									</div>
								</td>
								<td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
									<div
										class="inline px-3 py-1 text-sm font-normal text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 gap-x-2 dark:bg-gray-800"
									>
										Churned
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div>
										<h4 class="text-gray-700 dark:text-gray-200">
											Productivity app
										</h4>
										<p class="text-gray-500 dark:text-gray-400">
											Time management and productivity
										</p>
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div class="flex items-center">
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<p
											class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
										>
											+4
										</p>
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div
										class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full"
									>
										<div class="bg-blue-500 w-1/3 h-1.5" />
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<button
										class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
											/>
										</svg>
									</button>
								</td>
							</tr>

							<tr>
								<td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
									<div>
										<h2 class="font-medium text-gray-800 dark:text-white ">
											Quotient
										</h2>
										<p
											class="text-sm font-normal text-gray-600 dark:text-gray-400"
										>
											quotient.co
										</p>
									</div>
								</td>
								<td class="px-12 py-4 text-sm font-medium whitespace-nowrap">
									<div
										class="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
									>
										Customer
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div>
										<h4 class="text-gray-700 dark:text-gray-200">Sales CRM</h4>
										<p class="text-gray-500 dark:text-gray-400">
											Web-based sales doc management
										</p>
									</div>
								</td>
								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div class="flex items-center">
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
											alt=""
										/>
										<img
											class="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
											alt=""
										/>
										<p
											class="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full"
										>
											+4
										</p>
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<div
										class="w-48 h-1.5 bg-blue-200 overflow-hidden rounded-full"
									>
										<div class="bg-blue-500 w-1/6 h-1.5" />
									</div>
								</td>

								<td class="px-4 py-4 text-sm whitespace-nowrap">
									<button
										class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
											/>
										</svg>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 sm:flex sm:items-center sm:justify-between ">
		<div class="text-sm text-gray-500 dark:text-gray-400">
			Page <span class="font-medium text-gray-700 dark:text-gray-800"
				>1 of 10</span
			>
		</div>

		<div class="flex items-center mt-4 gap-x-4 sm:mt-0">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				href="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
					/>
				</svg>

				<span> previous </span>
			</a>

			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				href="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
			>
				<span> Next </span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5 rtl:-scale-x-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>
