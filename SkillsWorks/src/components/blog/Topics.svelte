<section class="bg-indigo-50 w-full">
	<!--START:()-->
	<div class="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
		<!--START:()-->
		<div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
			<!--START:()-->
			<div class="lg:sticky lg:top-4">
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
						enctype="multipart/form-data"
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
									<button type="reset" class="text-xs text-gray-500 underline">
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

										<label for="3+" class="ml-3 text-sm font-medium">
											3+
										</label>
									</div>

									<!--START:()-->
									<div class="flex items-center">
										<input
											id="8+"
											type="checkbox"
											name="age[8+]"
											class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
										/>

										<label for="8+" class="ml-3 text-sm font-medium">
											8+
										</label>
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
											class="text-xs text-gray-500 underline"
										>
											Reset Age
										</button>
									</div>
								</div>
							</fieldset>
						</div>

						<!--START:()-->
						<div
							class="flex justify-between px-5 py-3 border-t border-gray-200"
						>
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

			<!--START:()-->
			<div class="lg:col-span-3">
				<!--START:()-->
				<div class="flex items-center justify-between">
					<p class="text-sm text-gray-500">
						<span class="hidden sm:inline"> Showing>>>> </span>
						Topic.TopicSubcategotory.BlogTititle
					</p>
				</div>

				<!--START:()-->
				<div class="justify-center max-w-7xl mx-auto p-2">
					<!-- Replace with your content -->
					<!--START:()-->
					<div
						class="px-2 py-2 relative min-h-screen justify-center rounded-lg border-double border-4 border-sky-500"
					>
						<nav class="justify-center" aria-label="Breadcrumb">
							<ol
								role=""
								class="flex items-center text-sm text-indigo-500 space-x-1"
							>
								<li>
									<a
										class="block transition-colors hover:text-slate-700"
										href="/"
									>
										<span class="sr-only"> Home </span>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/>
										</svg>
									</a>
								</li>
								<li>
									<a
										class="block transition-colors hover:text-gray-700"
										href="/products/plain-tee"
									>
										Blog Home page
									</a>
								</li>

								<li>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</li>

								<li>
									<a
										class="block transition-colors hover:text-gray-700"
										href="/collections/shirts"
									>
										Topic level 0
									</a>
								</li>

								<li>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</li>

								<li>
									<a
										class="block transition-colors hover:text-gray-700"
										href="/products/plain-tee"
									>
										Topic level 1
									</a>
								</li>
								<li>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-4 h-4"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</li>
								<li>
									<a
										class="block transition-colors hover:text-gray-700"
										href="/products/plain-tee"
									>
										Topic level 2
									</a>
								</li>
							</ol>
						</nav>

						<!--START:()-->
						<div class=" max-w-7xl mx-auto p-2">
							<!-- Replace with your content -->
							<!--START:()-->
							<div
								class=" relative min-h-screen flex rounded-lg border-4 border-dashed border-slate-200 "
							>
								<section class="overflow-scroll">
									<!--START:()-->
									<div
										class="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8"
									>
										<!--START:()-->
										<div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
											<!--START:()-->
											<div class="relative z-10 lg:py-16">
												<!--START:()-->
												<div class="relative h-64 sm:h-80 lg:h-full">
													<img
														class="absolute inset-0 object-cover w-full h-full"
														src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
														alt="Indoors house"
													/>
												</div>
											</div>

											<!--START:()-->
											<div class="relative flex items-center bg-indigo-100">
												<span
													class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-indigo-100 lg:block lg:-left-16"
												/>

												<!--START:()-->
												<div class="p-8 sm:p-16 lg:p-24">
													<h2 class="text-2xl font-bold sm:text-3xl">
														This is Lorem ipsum place holder Text!!! dolor sit
														amet, consectetur adipisicing elit. Tempore,
														debitis.
													</h2>

													<p class="mt-4 text-gray-600">
														This is Lorem ipsum place holder Text!!! dolor sit
														amet, consectetur adipisicing elit. Aliquid,
														molestiae! Quidem est esse numquam odio deleniti,
														beatae, magni dolores provident quaerat totam eos,
														aperiam architecto eius quis quibusdam fugiat dicta.
													</p>

													<a
														class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-500 border border-teal-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
														href="/contact"
													>
														Get in Touch
													</a>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
