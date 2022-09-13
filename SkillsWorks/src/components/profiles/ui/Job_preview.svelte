<!-- This example requires Tailwind CSS v2.0+ -->
<div class="overflow-hidden bg-indigo-50 shadow sm:rounded-lg">
	<div class="px-4 py-5 sm:px-6">
		<h3 class="text-lg font-medium leading-6 text-slate-900">
			Job post Information
		</h3>
		<p class="mt-1 max-w-2xl text-sm text-slate-500">
			Job post details and application.
		</p>
	</div>
	<div class="border-t border-slate-200">
		<dl>
			<div
				class="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">Name of position</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					Margot Foster
				</dd>
			</div>
			<div
				class="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">Name of recruiter</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					Backend Developer
				</dd>
			</div>
			<div
				class="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">Email address</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					margotfoster@example.com
				</dd>
			</div>
			<div
				class="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">Salary expectation</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					$120,000
				</dd>
			</div>
			<div
				class="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">About</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
					cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
					Sit id mollit nulla mollit nostrud in ea officia proident. Irure
					nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
				</dd>
			</div>
			<div
				class="bg-indigo-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
			>
				<dt class="text-sm font-medium text-slate-500">Attachments</dt>
				<dd class="mt-1 text-sm text-slate-900 sm:col-span-2 sm:mt-0">
					<!-- svelte-ignore a11y-no-redundant-roles -->
					<ul
						role="list"
						class="divide-y divide-slate-200 rounded-md border border-slate-200"
					>
						<li
							class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
						>
							<div class="flex w-0 flex-1 items-center">
								<!-- Heroicon name: mini/paper-clip -->
								<svg
									class="h-5 w-5 flex-shrink-0 text-slate-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="ml-2 w-0 flex-1 truncate"
									>resume_back_end_developer.pdf</span
								>
							</div>
							<div class="ml-4 flex-shrink-0">
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="#"
									class="font-medium text-indigo-600 hover:text-indigo-500"
									>Download</a
								>
							</div>
						</li>
						<li
							class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
						>
							<div class="flex w-0 flex-1 items-center">
								<!-- Heroicon name: mini/paper-clip -->
								<svg
									class="h-5 w-5 flex-shrink-0 text-slate-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="ml-2 w-0 flex-1 truncate"
									>coverletter_back_end_developer.pdf</span
								>
							</div>
							<div class="ml-4 flex-shrink-0">
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="#"
									class="font-medium text-indigo-600 hover:text-indigo-500"
									>Download</a
								>
							</div>
						</li>
					</ul>
				</dd>
			</div>
		</dl>
	</div>
</div>
