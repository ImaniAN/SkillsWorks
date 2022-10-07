<!--START:()-->
<div>
	<!--svelte-ignore a11y-label-has-associated-control -->
	<div
		class="mt-1 flex justify-center px-6 py-16 border-2 border-teal-300 border-dashed rounded-md"
	>
		<!--START:()-->
		<div class="space-y-1 text-center">
			<svg
				class="mx-auto h-12 w-12 text-amber-500 py "
				stroke="currentColor"
				fill="none"
				viewBox="0 0 48 48"
				aria-hidden="true"
			>
				<path
					d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<!--START:()-->
			<div class="flex text-sm text-slate-900">
				<label
					for="file-upload"
					class="relative cursor-pointer bg-indigo-50 rounded-md font-medium text-amber-500 hover:text-amber-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
				>
					<span>Upload a document</span>
					<input
						id="file-upload"
						name="file-upload"
						type="file"
						class="sr-only"
					/>
				</label>
				<p class="pl-1">
					or drag and drop, which is not working I have to fix at some point and
					time...
				</p>
			</div>
			<!--END:()-->

			<p class="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
	<!--START:()-->
	<div
		class="mt-1 text-center cursor-pointer flex font-medium text-amber-500 hover:text-amber-700 justify-center px-1 py-1 border-2 border-teal-300 border-dashed rounded-md"
	>
		Eish sohn... There is nothing here...
	</div>
	<!--END:()-->
</div>
<!--END:()-->
