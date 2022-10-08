<!-- This comp is for showing all the jobs that a candidate has applied for -->
<!--START:()-->
<div
	class="container mx-auto px-1 sm:px-8 max-w-4xl border-2 border-teal-400 border-dashed w-screen"
>
	<!--START:()-->
	<div class="py-8">
		<!--START:()-->
		<div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight text-indigo-400">Posted Ads</h2>
			<!--START:()-->
			<div class="text-end">
				<form
					class="flex flex-col md:flex-row w-4/5 md:w-full md:space-x-3 space-y-3 md:space-y-0 justify-center"
				>
					<!--START:()-->
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text text-indigo-400">Hide Completed ads</span>
							<input
								type="checkbox"
								class=" bg-red-200 border-dashed border-2 rounded border-teal-300 text-teal-300 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								checked
							/>
						</label>
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="relative w-4/5">
						<input
							type="text"
							id="&quot;form-subscribe-Filter"
							class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
							placeholder="Name of Job"
						/>
					</div>
					<!--END:()-->

					<button
						class="flex-shrink-0 px-4 py-2 text-base font-semibold text-indigo-50 bg-indigo-400 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
						type="submit"
						>Filter
					</button>
				</form>
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->

		<!--START:()-->
		<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
			<!--START:()-->
			<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
				<table class="min-w-full leading-normal">
					<thead>
						<tr>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-300 text-slate-800 text-left text-sm uppercase font-normal"
								>Position
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-300 text-slate-800 text-left text-sm uppercase font-normal"
								>Recruiter
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-300 text-slate-800 text-left text-sm uppercase font-normal"
								>Date Applied
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-300 text-slate-800 text-left text-sm uppercase font-normal"
								>status
							</th>
							<th
								scope="col"
								class="px-5 py-3 bg-indigo-50 border-b border-teal-300 text-slate-800 text-left text-sm uppercase font-normal"
							/>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
										<p class="text-slate-900 whitespace-no-wrap">Marcus coco</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Designer</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/11/2072</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-amber-700 opacity-50 rounded-full"
									/>
									<span class="relative">Still in progress ! </span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
										<p class="text-slate-900 whitespace-no-wrap">Jean marc</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Admin</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">12/09/2069</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-green-700 opacity-50 rounded-full"
									/>
									<span class="relative">Ad Succesfully fufuiled !</span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
											Marcus Huger Musovi
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">CTO</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/11/2069</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-amber-700 opacity-50 rounded-full"
									/>
									<span class="relative">Still in progress ! </span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
										<p class="text-slate-900 whitespace-no-wrap">Ecric marc</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">Developer</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">02/10/2018</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-green-700 opacity-50 rounded-full"
									/>
									<span class="relative">Ad Succesfully fufuiled !</span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
											Marcus Niyigena
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">CEO</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/01/2063</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-red-700 opacity-50 rounded-full"
									/>
									<span class="relative">Ad closed!</span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
											Julien Huger
										</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">User</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">23/09/2010</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-green-700 opacity-50 rounded-full"
									/>
									<span class="relative">Ad Succesfully fufuiled !</span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
						<tr>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!--START:()-->
								<div class="flex items-center">
									<!--START:()-->
									<div class="flex-shrink-0">
										<!-- svelte-ignore a11y-invalid-attribute -->
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
										<p class="text-slate-900 whitespace-no-wrap">John Doe</p>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">COO</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<p class="text-slate-900 whitespace-no-wrap">01/10/2032</p>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<span
									class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
								>
									<span
										aria-hidden="true"
										class="absolute inset-0 bg-red-700 opacity-50 rounded-full"
									/>
									<span class="relative">Ad closed!</span>
								</span>
							</td>
							<td
								class="px-5 py-5 border-b border-teal-300 bg-indigo-50 text-sm"
							>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<button
									type="submit"
									class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-slate-600 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
									>Preview</button
								>
							</td>
						</tr>
					</tbody>
				</table>
				<!--START:()-->
				<div
					class="px-5 bg-indigo-50 py-5 flex flex-col xs:flex-row items-center xs:justify-between"
				>
					<!--START:()-->
					<div class="flex items-center">
						<button
							type="button"
							class="w-full p-4 border text-base rounded-l-xl text-slate-600 bg-indigo-50 hover:bg-slate-100"
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
							class="w-full px-4 py-2 border text-base text-slate-600 bg-indigo-50 hover:bg-slate-100"
						>
							2
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border-t border-b text-base text-slate-600 bg-indigo-50 hover:bg-slate-100"
						>
							3
						</button>
						<button
							type="button"
							class="w-full px-4 py-2 border text-base text-slate-600 bg-indigo-50 hover:bg-slate-100"
						>
							4
						</button>
						<button
							type="button"
							class="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-slate-600 bg-indigo-50 hover:bg-slate-100"
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
