<!--START:()-->
<div class="inline-flex items-stretch bg-indigo-50 border rounded-md">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		href="/edit"
		class="px-4 py-2 text-sm text-slate-600 hover:text-slate-700 hover:bg-slate-50 rounded-l-md"
	>
		Edit
	</a>

	<!--START:()-->
	<div class="relative">
		<button
			type="button"
			class="inline-flex items-center justify-center h-full px-2 text-slate-600 border-l border-teal-100 hover:text-slate-700 rounded-r-md hover:bg-slate-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

		<!--START:()-->
		<div
			class="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-indigo-50 border border-teal-100 rounded-md shadow-lg"
			role="menu"
		>
			<!--START:()-->
			<div class="flow-root py-2">
				<!--START:()-->
				<div class="-my-2 divide-y divide-slate-100">
					<!--START:()-->
					<div class="p-2">
						<strong
							class="block p-2 text-xs font-medium text-slate-400 uppercase"
						>
							General
						</strong>

						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-700"
							role="menuitem"
						>
							View on Storefront
						</a>

						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-700"
							role="menuitem"
						>
							View Warehouse Info
						</a>

						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-700"
							role="menuitem"
						>
							Duplicate Product
						</a>

						<!-- svelte-ignore a11y-invalid-attribute -->
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="#"
							class="block px-4 py-2 text-sm text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-700"
							role="menuitem"
						>
							Unpublish Product
						</a>
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="p-2">
						<strong
							class="block p-2 text-xs font-medium text-slate-400 uppercase"
						>
							Danger Zone
						</strong>

						<form method="post" action="#" name="" id="">
							<button
								type="submit"
								class="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg hover:bg-red-50"
								role="menuitem"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
									/>
								</svg>

								Delete Product
							</button>
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
</div>
<!--END:()-->
