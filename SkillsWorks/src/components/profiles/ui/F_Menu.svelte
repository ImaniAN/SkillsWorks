<!--START:()-->
<div class="flex flex-col justify-between h-screen bg-indigo-50 border-r">
	<!--START:()-->
	<div class="px-4 py-6">
		<!--START:()-->
		<div class="relative">
			<label class="sr-only" for="search"> Search </label>

			<input
				class="rounded-lg border-transparent flex-1 appearance-none border-2 border-teal-600 border-dashed bg-indigo-50 text-indigo-600 placeholder-indigo-300 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-10 pl-4 w-4/5"
				id="search"
				type="search"
				placeholder="Search Here BruV..."
			/>

			<button
				class="border-2 border-dashed border-teal-600 absolute p-2 text-indigo-600 transition -translate-y-1/2 rounded-md hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-slate-50 hover:bg-indigo-500 top-1/2 right-1"
				type="button"
				aria-label="Submit Search"
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
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</div>
		<!--END:()-->
		<nav class="flex flex-col mt-6 space-y-1">
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-700 bg-indigo-100 rounded-lg"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 opacity-75"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>

				<span class="ml-3 text-sm font-medium"> General </span>
			</a>

			<details class="group">
				<summary
					class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg cursor-pointer hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 opacity-75"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>

					<span class="ml-3 text-sm font-medium"> Teams </span>

					<span
						class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</summary>

				<nav class="mt-1.5 ml-8 flex flex-col">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
							/>
						</svg>

						<span class="ml-3 text-sm font-medium"> Banned Users </span>
					</a>

					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>

						<span class="ml-3 text-sm font-medium"> Calendar </span>
					</a>
				</nav>
			</details>

			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 opacity-75"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
					/>
				</svg>

				<span class="ml-3 text-sm font-medium"> Billing </span>
			</a>

			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 opacity-75"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>

				<span class="ml-3 text-sm font-medium"> Invoices </span>
			</a>

			<details class="group">
				<summary
					class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg cursor-pointer hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 opacity-75"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
						/>
					</svg>

					<span class="ml-3 text-sm font-medium"> Account </span>

					<span
						class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</summary>

				<nav class="mt-1.5 ml-8 flex flex-col">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>

						<span class="ml-3 text-sm font-medium"> Details </span>
					</a>

					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-dashed focus:text-indigo-900 focus:bg-indigo-50 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 opacity-75"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>

						<span class="ml-3 text-sm font-medium"> Security </span>
					</a>

					<form enctype="multipart/form-data" method="post" action="/logout">
						<button
							type="submit"
							class="flex items-center w-full px-4 py-2 text-slate-500 rounded-lg hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-5 h-5 opacity-75"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
								/>
							</svg>

							<span class="ml-3 text-sm font-medium"> Logout </span>
						</button>
					</form>
				</nav>
			</details>
		</nav>
	</div>
	<!--END:()-->

	<!--START:()-->
	<div class="sticky inset-x-0 bottom-0 border-t border-teal-100">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="#"
			class="flex items-center p-4 bg-indigo-50 hover:bg-slate-50 shrink-0"
		>
			<img
				class="object-cover w-10 h-10 rounded-full"
				src="https://dummyimage.com/305x305"
				alt="Simon Lewis"
			/>

			<!--START:()-->
			<div class="ml-1.5">
				<p class="text-xs">
					<strong class="block font-medium">Simon Lewis</strong>

					<span> simonlewis@fakemail.com </span>
				</p>
			</div>
			<!--END:()-->
		</a>
	</div>
	<!--END:()-->
</div>
<!--END:()-->
