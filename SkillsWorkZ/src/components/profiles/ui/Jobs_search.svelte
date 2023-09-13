<script>
	import Applied_tab from '../ui/Sub_pills/Applied.svelte'; //Updated
	import In_arrers_tab from '../ui/Sub_pills/In_arrers.svelte'; //Updated
	import Liked_tab from '../ui/Sub_pills/Liked.svelte'; //Updated
	import Easy_apply_tab from '../ui/Sub_pills/Easy_apply.svelte'; //Updated
	import Recommended_tab from '../ui/Sub_pills/Recommended.svelte'; //Updated
	import Preview_tab from '../ui/Sub_pills/Preview.svelte'; //Updated
	import Search_Input from '../../comps/Form Inputs/Search_input.svelte';
</script>

<!-- This comp is for showing all the jobs that a candidate has applied for -->
<!--START:()-->
<div class="container mx-auto px-1 sm:px-8">
	<!--START:()-->
	<div class="py-8">
		<!--START:()-->
		<div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight">Job Search</h2>
			<!--START:()-->
			<div class="text-end">
				<form
					enctype="multipart/form-data"
					method="post"
					class="flex flex-col md:flex-row w-4/5 md:w-full md:space-x-3 space-y-3 md:space-y-0 justify-center"
				>
					<!--START:()-->
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Hide Applied</span>
							<input
								type="checkbox"
								class="bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								checked
							/>
						</label>
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="p-3 relative w-11/12">
						<Search_Input />
					</div>
					<!--END:()-->
				</form>
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->

		<!-- component -->
		<section class="container px-4 mx-auto">
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

				<div class="flex items-center mt-4 gap-x-3">
					<button
						class="flex items-center justify-center w-1/2 tracking-wide transition-colors duration-200 shrink-0 sm:w-auto gap-x-2 dark:hover:bg-blue-50 dark:bg-gray-800 text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
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
						class="flex items-center justify-center w-1/2 tracking-wide transition-colors duration-200 shrink-0 sm:w-auto gap-x-2 dark:hover:bg-blue-50 dark:bg-blue-600 text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
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
		</section>

		<!--START:()-->
		<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
			<!--START:()-->
			<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
				<table class="min-w-full leading-normal">
					<thead>
						<tr>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-400 text-slate-800 text-left text-sm uppercase font-normal"
								>Position
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-400 text-slate-800 text-left text-sm uppercase font-normal"
								>Recruiter
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-400 text-slate-800 text-left text-sm uppercase font-normal"
								>Date Posted
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-400 text-slate-800 text-left text-sm uppercase font-normal"
								>status
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-400 text-slate-800 text-left text-sm uppercase font-normal"
							/>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#" class="block relative">
											<img
												alt="profil"
												src="https://dummyimage.com/305x305"
												class="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</a>
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="ml-3">
										<p class="text-slate-900 whitespace-no-wrap">
											Some position in HR1
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Company0</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/11/2072</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Easy_apply_tab />
								<Recommended_tab />
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Preview_tab />
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#" class="block relative">
											<img
												alt="profil"
												src="https://dummyimage.com/305x305"
												class="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</a>
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="ml-3">
										<p class="text-slate-900 whitespace-no-wrap">
											Some position in HR1
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Company0</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/11/2072</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Applied_tab />
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Preview_tab />
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#" class="block relative">
											<img
												alt="profil"
												src="https://dummyimage.com/305x305"
												class="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</a>
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="ml-3">
										<p class="text-slate-900 whitespace-no-wrap">
											Some position in HR3
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Company1</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">12/09/2069</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Easy_apply_tab />
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Preview_tab />
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a href="#" class="block relative">
											<img
												alt="profil"
												src="https://dummyimage.com/305x305"
												class="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</a>
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="ml-3">
										<p class="text-slate-900 whitespace-no-wrap">
											Some position in HR2
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Company2</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">02/10/2018</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Liked_tab />
								<Easy_apply_tab />
								<Recommended_tab />
							</td>
							<td
								class="px-5 py-5 border-b border-teal-400 bg-indigo-50 text-sm"
							>
								<Preview_tab />
							</td>
						</tr>
					</tbody>
				</table>
				<!--START:()-->
				<div
					class="px-5 bg-indigo-500 py-5 flex flex-col xs:flex-row items-center xs:justify-between"
				>
					<!--START:()-->
					<div class="flex items-center">
						<button
							type="button"
							class="w-full p-4 border text-base rounded-l-xl text-slate-600 bg-indigo-200 hover:bg-slate-100"
						>
							<svg
								width="9"
								fill="currentColor"
								height="8"
								class=""
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
								/>
							</svg>
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-indigo-50 hover:bg-slate-100 "
						>
							1
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border text-base text-slate-600 bg-indigo-100 hover:bg-slate-100"
						>
							2
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border-t border-b text-base text-slate-600 bg-indigo-100 hover:bg-slate-100"
						>
							3
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border text-base text-slate-600 bg-indigo-100 hover:bg-slate-100"
						>
							4
						</button>
						<button
							type="button"
							class="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-slate-600 bg-indigo-200 hover:bg-slate-100"
						>
							<svg
								width="9"
								fill="currentColor"
								height="8"
								class=""
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
								/>
							</svg>
						</button>
					</div>
					<!--END:()-->
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
</div>
<!--END:()-->
