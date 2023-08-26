<script>
	import Search_Input from '../../comps/Form Inputs/Search_input.svelte';
	import Msg_preview from '../../comps/Messages/Msg_preview.svelte';
</script>

<!-- component -->
<main class="p-2 flex container w-full max-h-screen shadow-lg rounded-3xl">
	<div class="mt-3 mr-3 px-3 w-3/12">
		<div class="relative py-2"><Search_Input /></div>
		<div class="h-5/6 p-1 lg:sticky lg:top-4 overflow-y-scroll">
			<details open class="overflow-hidden border border-gray-200 rounded">
				<summary
					class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
				>
					<span class="text-sm font-medium">Edit Filters</span>

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
					enctype="multipart/form-data"
					method="post"
					name="job-search-filter"
					id="job-search-filter"
					action=""
					class="border-t border-gray-200 lg:border-t-0"
				>
					<fieldset
						name="distance-fieldset"
						id="distance-fieldset"
						form="job-search-filter"
					>
						<legend
							class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
						>
							Distance from your location
						</legend>

						<!--START:()-->
						<div class="px-5 py-6 space-y-2">
							<!--START:()-->
							<div class="flex items-center">
								<input
									type="range"
									id="distance-range-input"
									name="distance-range-input"
									list="distance-range-values"
									value="33"
									step="1"
									min="0"
									max="100"
									class="w-full"
								/>
								<datalist id="distance-range-values">
									<option value="0" />
									<option value="10" />
									<option value="20" />
									<option value="30" />
									<option value="40" />
									<option value="50" />
									<option value="60" />
									<option value="70" />
									<option value="80" />
									<option value="90" />
									<option value="100" />
								</datalist>
								<label
									for="distance-range-input"
									class="ml-1 text-sm font-medium"
								>
									(x)Km
								</label>
							</div>

							<!--START:()-->

							<!--START:()-->
							<div class="pt-2">
								<button type="reset" class="text-xs text-gray-500 underline">
									Reset Distance
								</button>
							</div>
						</div>
					</fieldset>

					<!--START:()-->
					<div>
						<fieldset
							name="Location-fieldset"
							id="Location-fieldset"
							form="job-search-filter"
						>
							<legend
								class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
							>
								Location
							</legend>

							<!--START:()-->
							<div class="px-5 py-6 relative">
								<!--START:(TODO://change to search Location-fieldset in the
								DB)-->
								<Search_Input />
								<!--START:()-->
								<div class="pt-2">
									<button type="reset" class="text-xs text-gray-500 underline">
										Reset Location
									</button>
								</div>
							</div>
						</fieldset>
					</div>

					<!--START:()-->
					<div>
						<fieldset
							name="Category-fieldset"
							id="Category-fieldset"
							form="job-search-filter"
						>
							<legend
								class="block w-full px-5 py-3 text-xs font-medium bg-gray-50"
							>
								Category
							</legend>

							<!--START:()-->
							<div class="px-5 py-6 relative">
								<!--START:(TODO://change to search Location-fieldset in the
													DB)-->
								<!--START:()-->
								<div class="space-y-2">
									<!--START:()-->
									<div class="flex items-center">
										<input
											id="Retail-option"
											type="checkbox"
											name="Retail-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label for="Retail-option" class="ml-3 text-sm font-medium">
											Retail
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Transportation-option"
											type="checkbox"
											name="Transportation-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Transportation-option"
											class="ml-3 text-sm font-medium"
										>
											Transportation
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Hospitatlity-option"
											type="checkbox"
											name="Hospitatlity-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Hospitatlity-option"
											class="ml-3 text-sm font-medium"
										>
											Hospitatlity
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Food-Services-option"
											type="checkbox"
											name="Food-Services-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Food-Services-option"
											class="ml-3 text-sm font-medium"
										>
											Food Services
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Manufacturing-option"
											type="checkbox"
											name="Manufacturing-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label for="3+" class="ml-3 text-sm font-medium">
											Manufacturing
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Healthcare-Support-option"
											type="checkbox"
											name="Healthcare-Support-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Healthcare-Support-option"
											class="ml-3 text-sm font-medium"
										>
											Healthcare Support
										</label>
									</div>
									<div class="flex items-center">
										<input
											id="Childcare-option"
											type="checkbox"
											name="Childcare-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Childcare-option"
											class="ml-3 text-sm font-medium"
										>
											Childcare
										</label>
									</div>

									<!--START:()-->
									<div class="flex items-center">
										<input
											id="Construction-option"
											type="checkbox"
											name="Construction-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label
											for="Construction-option"
											class="ml-3 text-sm font-medium"
										>
											Construction
										</label>
									</div>

									<!--START:()-->
									<div class="flex items-center">
										<input
											id="Warehousing-option"
											type="checkbox"
											name="Warehousing-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label for="12+" class="ml-3 text-sm font-medium">
											Warehousing
										</label>
									</div>

									<!--START:()-->
									<div class="flex items-center">
										<input
											id="Cleaning-Services-option"
											type="checkbox"
											name="Cleaning-Services-option"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label for="16+" class="ml-3 text-sm font-medium">
											Cleaning Services
										</label>
									</div>

									<!--START:()-->
									<div class="pt-2">
										<button
											type="reset"
											class="text-xs text-gray-500 underline"
										>
											Reset Category options
										</button>
									</div>
								</div>
							</div>
						</fieldset>
					</div>

					<!--START:()-->
					<div class="flex justify-between px-5 py-3 border-t border-gray-200">
						<button
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
		class="flex flex-col pt-3 bg-slate-50 rounded-l-3xl overflow-y-scroll w-6/12"
	>
		<ul class="">
			<Msg_preview />Job data or information
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
	<section
		class="px-4 flex flex-col bg-indigo-100 rounded-r-3xl w-6/12 min-w-lg"
	>
		<!--START:()-->
		<!--START:()-->
		<div class="flex justify-center h-1/12 pt-3 relative">
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
		<!--END:()-->

		<!--START:()-->
		<div class="overflow-y-scroll">
			<!--START:()-->
			<div class="flex justify-between items-center h-48">
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
			</div>
			<!--START:()-->
			<section class="">
				<h1 class="font-bold text-slate-900 text-2xl">
					We need UI/UX designer
				</h1>
				<!-- svelte-ignore a11y-invalid-attribute -->

				<article class="mt-8 text-slate-500 leading-7 tracking-wider mr-3">
					<p>Hi Akhil,</p>
					<p>
						Design and develop enterprise-facing UI and consumer-facing UI as
						well as REST API backends.Work with Product Managers and User
						Experience designers to create an appealing user experience for
						desktop web and mobile web.
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
			<section class="mt-6 rounded-xl bg-slate-50 mb-3 mr-3">
				<textarea
					class="rounded-lg flex-1 appearance-none border-2 border-teal-400 border-dashed w-full py-2 px-4 bg-slate-50 text-slate-700 placeholder-amber-500 text-base focus:ring-indigo-600 focus:border-transparent shadow focus:outline-none focus:ring"
					placeholder="Type your reply here..."
					rows="3"
				/>
				<!--START:()-->
				<div class="flex items-center justify-between p-2">
					<label for="fileInput" class="h-6 w-6 text-slate-400 cursor-pointer">
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
					</label>
					<!-- TODO:Do servers side validation by making sure that you only get specific file extensions etc (file types, properties, sizes, content?) -->
					<input
						id="fileInput"
						type="file"
						class="hidden"
						accept=".pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
					/>

					<button
						class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-indigo-500 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
						>Reply</button
					>
				</div>
			</section>
			<!--END:()-->
		</div>
		<!--END:()-->
	</section>
</main>
