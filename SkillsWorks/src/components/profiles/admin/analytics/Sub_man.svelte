<script>
	// @ts-ignore
	import Free_tab from '../../ui/Sub_pills/Free.svelte'; //Updated
	import In_arrers_tab from '../../ui/Sub_pills/In_arrers.svelte'; //Updated
	import Premium_tab from '../../ui/Sub_pills/Premium.svelte'; //Updated
	import Pro_tab from '../../ui/Sub_pills/Pro.svelte'; //Updated
	import Unvalidated_tab from '../../ui/Sub_pills/Unvalidated.svelte'; //Updated
	import Preview_tab from '../../ui/Sub_pills/Preview.svelte'; //Updated
	import Search_Input from '../../../comps/Form Inputs/Search_input.svelte';
</script>

<!-- This comp is for showing all the jobs that a candidate has applied for -->
<!--START:()-->
<div class="container mx-auto px-1 sm:px-8">
	<!--START:()-->
	<div class="py-8">
		<!--START:()-->
		<div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight">Subscription Managment</h2>
			<!--START:()-->
			<div class="text-end">
				<form
					class="flex flex-col md:flex-row w-4/5 md:w-full md:space-x-3 space-y-3 md:space-y-0 justify-center"
				>
					<!--START:()-->
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text">Hide Free Subscriptions</span>
							<input
								type="checkbox"
								class=" bg-red-200 border-dashed border-2 rounded border-teal-400 text-teal-400 ml-1 w-5 h-5 ease-linear transition-all duration-150"
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
								>Date Subscribed
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
								<Free_tab />
								<Unvalidated_tab />
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
								<Pro_tab />
								<In_arrers_tab />
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
								<Premium_tab />
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
