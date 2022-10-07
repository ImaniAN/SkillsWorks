<script>
	import Flaotees from '../../ui/Flaotees.svelte';
	import Banner from '../../ui/Banner.svelte';
	import Add_anoda from '../../../comps/Form Inputs/Add_anoda.svelte';
	import Notifications_perm_control from '../../../comps/Form Inputs/Notifications_perm_control.svelte';
	import Beneifts_Info from '../../../comps/Form Inputs/Beneifts_info.svelte';
	import Big_checkbox from '../../../comps/Form Inputs/Big_checkbox.svelte';
	import Countries_input from '../../../comps/Form Inputs/Countries_input.svelte';
	import City_input from '../../../comps/Form Inputs/City.svelte';
	import CRUD_save from '../../../comps/Form Inputs/CRUD_save.svelte';
	import Currency_input from '../../../comps/Form Inputs/Currency.svelte';
	import Degree_expo from '../../../comps/Form Inputs/Degree_expo.svelte';
	import Insti_name from '../../../comps/Form Inputs/Insti_name.svelte';
	import Level_of_exp from '../../../comps/Form Inputs/Level_of_exp.svelte';
	import Num_pos_ava from '../../../comps/Form Inputs/Num_pos_ava.svelte';
	import Emp_type from '../../../comps/Form Inputs/Emp_type.svelte';
	import Extra_options from '../../../comps/Form Inputs/Extra_options.svelte';
	import Posi_name from '../../../comps/Form Inputs/Posi_name.svelte';
	import Red_line from '../../../comps/Form Inputs/Red_line.svelte';
	import Renumeration from '../../../comps/Form Inputs/Renumeration.svelte';
	import Roles_duties_res from '../../../comps/Form Inputs/Roles_duties_res.svelte';
	import SA_langs from '../../../comps/Form Inputs/SA_langs.svelte';
	import Stream_job from '../../../comps/Form Inputs/Stream_job.svelte';
	import Sinority from '../../../comps/Form Inputs/Sinority.svelte';
	import Sub_options from '../../../comps/Form Inputs/Subs_options.svelte';
	import Sex_iden from '../../../comps/Form Inputs/Sex_iden.svelte';
	import Yrs_of_exp from '../../../comps/Form Inputs/Yrs_of_exp.svelte';
</script>

<!--START:()-->
<div class="relative min-h-screen flex">
	<!--START:()-->
	<div
		class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto"
	>
		<!--START:()-->
		<div
			class="w-11/12 h-full sm:hidden md:flex flex-auto items-end justify-end overflow-hidden
			 text-indigo-50 bg-no-repeat bg-cover relative"
		>
			<!--START:()-->
			<div
				class="absolute bg-gradient-to-b from-emerald-200 to-emerald-50 opacity-90 inset-0"
			/>
			<!--START:()-->
			<div class="w-full z-10">
				<!--START:()-->
				<div class="leading-tight">
					<!-- Comp Start -->
					<!--START:()-->
					<div class="flex justify-center">
						<!--START:()-->
						<div class="px-8 py-4 border">
							<!--START:()-->
							<div class="lg:flex lg:items-center lg:justify-between">
								<!--START:()-->
								<div class="flex-1 min-w-0">
									<h2
										class="text-2xl font-bold leading-7 text-slate-900 sm:text-3xl sm:tracking-tight sm:truncate"
									>
										*interview Questions* (e.g *CEO*)
									</h2>
									<!--START:()-->
									<div
										class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
									>
										<!--START:()-->
										<div class="mt-2 flex items-center text-sm text-slate-900">
											<!-- Heroicon name: solid/briefcase -->
											<svg
												class="flex-shrink-0 mr-1.5 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
													clip-rule="evenodd"
												/>
												<path
													d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
												/>
											</svg>
											Full-time / Seasonal
										</div>
										<!--END:()-->

										<!--START:()-->
										<div class="mt-2 flex items-center text-sm text-slate-900">
											<!-- Heroicon name: solid/location-marker -->
											<svg
												class="flex-shrink-0 mr-1.5 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
													clip-rule="evenodd"
												/>
											</svg>
											Remote / Hybrid
										</div>
										<!--END:()-->

										<!--START:()-->
										<div class="mt-2 flex items-center text-sm text-slate-900">
											<!-- Heroicon name: solid/currency-dollar -->
											<svg
												class="flex-shrink-0 mr-1.5 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
												/>
												<path
													fill-rule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
													clip-rule="evenodd"
												/>
											</svg>
											R12 000 &ndash; R14 000
										</div>
										<!--END:()-->

										<!--START:()-->
										<div class="mt-2 flex items-center text-sm text-slate-900">
											<!-- Heroicon name: solid/calendar -->
											<svg
												class="flex-shrink-0 mr-1.5 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clip-rule="evenodd"
												/>
											</svg>
											Joined on January 9, 2069
										</div>
										<!--END:()-->

										<!--END:()-->
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->

								<!--START:()-->
								<div class="mt-5 flex lg:mt-0 lg:ml-4">
									<!--START:()-->
									<span class="hidden sm:block">
										<button
											type="button"
											class="inline-flex items-center px-4 py-2 border-2 border-teal-300 border-dashed rounded-md shadow-sm text-sm font-medium text-slate-700 bg-indigo-50 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<!-- Heroicon name: solid/pencil -->
											<svg
												class="-ml-1 mr-2 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
												/>
											</svg>
											Edit
										</button>
									</span>
									<!--END:()-->

									<!--START:()-->
									<span class="hidden sm:block ml-3">
										<button
											type="button"
											class="inline-flex items-center px-4 py-2 border-2 border-teal-300 border-dashed rounded-md shadow-sm text-sm font-medium text-slate-700 bg-indigo-50 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<!-- Heroicon name: solid/link -->
											<svg
												class="-ml-1 mr-2 h-5 w-5 text-amber-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
													clip-rule="evenodd"
												/>
											</svg>
											View
										</button>
									</span>
									<!--END:()-->

									<!--START:()-->
									<span class="sm:ml-3">
										<button
											type="button"
											class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-50 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											<!-- Heroicon name: solid/check -->
											<svg
												class="-ml-1 mr-2 h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
											Publish
										</button>
									</span>
									<!--END:()-->

									<!--START:()-->
									<div class="ml-3 relative sm:hidden">
										<button
											type="button"
											class="inline-flex items-center px-4 py-2 border-2 border-teal-300 border-dashed rounded-md shadow-sm text-sm font-medium text-slate-700 bg-indigo-50 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											id="mobile-menu-button"
											aria-expanded="false"
											aria-haspopup="true"
										>
											More
											<!-- Heroicon name: solid/chevron-down -->
											<svg
												class="-mr-1 ml-2 h-5 w-5 text-brown-500"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>

										<!--
  Dropdown menu, show/hide based on menu state.

  Entering: "transition ease-out duration-200"
   From: "transform opacity-0 scale-95"
   To: "transform opacity-100 scale-100"
  Leaving: "transition ease-in duration-75"
   From: "transform opacity-100 scale-100"
   To: "transform opacity-0 scale-95"
 -->
										<!--START:()-->
										<div
											class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-indigo-50 ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="mobile-menu-button"
											tabindex="-1"
										>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<a
												href="#"
												class="block px-4 py-2 text-sm text-slate-700"
												role="menuitem"
												tabindex="-1"
												id="mobile-menu-item-0">Edit</a
											>
											<!-- svelte-ignore a11y-invalid-attribute -->
											<a
												href="#"
												class="block px-4 py-2 text-sm text-slate-700"
												role="menuitem"
												tabindex="-1"
												id="mobile-menu-item-1">View</a
											>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->

							<br />
							<!--END:()-->

							<!--START: Red line shandis-->
							<!--START:()-->
							<Red_line />
							<!--END: Red line shandis-->

							<!-- Work Experience information Start -->

							<!--START:()-->
							<div class="mt-10 sm:mt-0">
								<!--START:()-->
								<div class="md:grid md:grid-cols-3 md:gap-6">
									<!--START:()-->
									<div class="md:col-span-1">
										<!--START:()-->
										<div class="px-4 sm:px-0">
											<h3 class="text-lg font-medium leading-6 text-slate-900">
												Job Poster information
											</h3>
											<p class="mt-1 text-sm text-slate-900">
												Please make sure that all your references are
												contactable.
											</p>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="mt-5 md:mt-0 md:col-span-2">
										<!--START:()-->
										<div class="shadow sm:rounded-md sm:overflow-hidden">
											<!--START:()-->
											<div class="px-4 py-5 bg-indigo-50 space-y-6 sm:p-6">
												<!--START:()-->
												<form action="#" method="POST">
													<!--TODO:FIX THIS FUCKING single/double FORM PROBLEM wtf-->
													<div class="grid grid-cols-6 gap-6">
														<!-- here -->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Insti_name />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Posi_name />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Sinority />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Yrs_of_exp />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<SA_langs />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Level_of_exp />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-2">
															<Emp_type />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-4">
															<Roles_duties_res />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-6">
															<Beneifts_Info />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-2">
															<Renumeration />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-2">
															<Currency_input />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-2">
															<label
																for="still-studying"
																class="block text-sm font-medium text-slate-700"
																>Negotiable ?</label
															>
															<Big_checkbox />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Num_pos_ava />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Stream_job />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<City_input />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 sm:col-span-3 lg:col-span-3">
															<Countries_input />
														</div>
														<!--END:()-->
													</div>
													<!--END:()-->

													<!--END:()-->
												</form>
											</div>
											<!--END:()-->
										</div>
										<!--END:()-->

										<!--START:()-->
										<Red_line />
										<!--END:()-->

										<!-- </form> -->
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->

							<!--START:()-->
							<div class="mt-10 sm:mt-0">
								<!--START:()-->
								<div class="md:grid md:grid-cols-3 md:gap-6">
									<!--START:()-->
									<div class="md:col-span-1">
										<!--START:()-->
										<div class="px-4 sm:px-0">
											<h3 class="text-lg font-medium leading-6 text-slate-900">
												Extra job requirements for that specific job ad
											</h3>
											<p class="mt-1 text-sm text-slate-900">
												You might need to add more information to put behind a
												pay wall.
											</p>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="mt-5 md:mt-0 md:col-span-2">
										<!--START:()-->
										<div class="shadow overflow-hidden sm:rounded-md">
											<!--START:()-->
											<div class="px-4 py-5 bg-indigo-50 sm:p-6">
												<!--START:()-->
												<div class="grid grid-cols-6 gap-6">
													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-3">
														<Yrs_of_exp />
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-3">
														<SA_langs />
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-6 lg:col-span-2">
														<label
															for="qualfication-name"
															class="block text-sm font-medium text-slate-700"
															>Min_edu: Name of qualfication</label
														>
														<input
															type="text"
															placeholder=""
															name="qualfication-name"
															id="qualfication-name"
															class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
														/>
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-2">
														<label
															for="quantity"
															class="block text-sm font-medium text-slate-700"
															>Min age? (between 18 and 65):</label
														>
														<input
															type="number"
															id="quantity"
															name="quantity"
															class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
															min="18"
															max="65"
														/>
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-2">
														<Sex_iden />
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-2">
														<label
															for="still-studying"
															class="block text-sm font-medium text-slate-700"
															>Willing to travel?</label
														>
														<Big_checkbox />
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-2">
														<label
															for="still-studying"
															class="block text-sm font-medium text-slate-700"
															>Willing to do something?</label
														>
														<Big_checkbox />
													</div>
													<!--END:()-->

													<!--START:()-->
													<div class="col-span-6 sm:col-span-3 lg:col-span-2">
														<label
															for="still-studying"
															class="block text-sm font-medium text-slate-700"
															>Has disability?</label
														>
														<Big_checkbox />
													</div>
													<!--END:()-->
												</div>

												<!--START: Red line shandis-->
												<Red_line />
												<!--END: Red line shandis-->

												<!--START:()-->
												<div class=""><Extra_options /></div>
												<!--END:()-->
											</div>
											<!--END:()-->

											<!--START:()-->
											<div class="px-4 py-3 bg-amber-500 text-right sm:px-6">
												<Add_anoda />
												<CRUD_save />
											</div>
											<!--END:()-->

											<!--END:()-->
										</div>
										<!-- </form> -->

										<!--END:()-->
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->

							<!-- ... END -->

							<!--START: Red line shandis-->
							<!--START:()-->
							<Red_line />
							<!--END:()-->
							<!--END: Red line shandis-->

							<!-- Skills, compenticies and abilities Start -->

							<!--START:()-->
							<div class="mt-10 sm:mt-0">
								<!--START:()-->
								<div class="md:grid md:grid-cols-3 md:gap-6">
									<!--START:()-->
									<div class="md:col-span-1">
										<!--START:()-->
										<div class="px-4 sm:px-0">
											<h3 class="text-lg font-medium leading-6 text-slate-900">
												Job Ad Type
											</h3>
											<p class="mt-1 text-sm text-slate-900">
												Your capabilites and talents.
											</p>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="mt-5 md:mt-0 md:col-span-2">
										<form action="#" method="POST">
											<!--START:()-->
											<div class="shadow overflow-hidden sm:rounded-md">
												<!--START:()-->
												<div class="px-4 py-5 bg-indigo-50 sm:p-6">
													<!--START:()-->
													<div class="grid grid-cols-6 gap-6">
														<!--START:()-->
														<div class="col-span-6 lg:col-span-2">
															<label
																for="skill-name"
																class="block text-sm font-medium text-slate-700"
																>Name of Subscription type</label
															>
															<Sub_options />
														</div>
														<!--END:()-->

														<!--START:()-->
														<div class="col-span-6 lg:col-span-4">
															<Degree_expo />
														</div>
														<!--END:()-->
													</div>
													<!--END:()-->
												</div>
												<!--END:()-->
												<!--START:()-->
												<div class="px-4 py-3 bg-amber-500 text-right sm:px-6">
													<Add_anoda />
													<CRUD_save />
												</div>
												<!--END:()-->
											</div>
											<!--END:()-->
										</form>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->

							<!--END:()-->

							<!--START: Red line shandis-->
							<Red_line />
							<!--END: Red line shandis-->

							<!--START:()-->
							<div class="mt-10 sm:mt-0">
								<!--START:()-->
								<div class="md:grid md:grid-cols-3 md:gap-6">
									<!--START:()-->
									<div class="md:col-span-1">
										<!--START:()-->
										<div class="px-4 sm:px-0">
											<h3 class="text-lg font-medium leading-6 text-slate-900">
												Notifications
											</h3>
											<p class="mt-1 text-sm text-slate-900">
												Decide which communications you'd like to receive and
												how.
											</p>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<!--START:()-->
									<div class="mt-5 md:mt-0 md:col-span-2">
										<form action="#" method="POST">
											<!--START:()-->
											<div class="shadow overflow-hidden sm:rounded-md">
												<!--START:()-->
												<Notifications_perm_control />
												<!--END:()-->

												<!--START:()-->
												<div class="px-4 py-3 bg-amber-500 text-right sm:px-6">
													<CRUD_save />
												</div>
												<!--END:()-->
											</div>
											<!--END:()-->
										</form>
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

					<!--END:()-->
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->
			<!---remove custom style-->
			<Flaotees />
			<!--END:()-->
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
	<!-- /End replace -->
</div>
