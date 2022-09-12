<div class="flex items-center -space-x-4 hover:space-x-1">
	<button
		class="z-10 block p-4 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring"
		type="button"
	>
		<svg
			class="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/>
		</svg>
	</button>

	<button
		class="z-20 block p-4 text-blue-700 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
		type="button"
	>
		<svg
			class="w-4 h-4"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
			/>
		</svg>
	</button>

	<button
		class="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
		type="button"
	>
		<svg
			class="w-4 h-4"
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
	</button>
</div>
<!--END:()-->

<div
	class="inline-flex items-center overflow-hidden text-indigo-50 bg-blue-600 rounded"
>
	<button
		class="p-3 bg-blue-600 focus:outline-none focus:bg-blue-700 active:bg-blue-500"
		type="button"
	>
		<span class="sr-only"> Prev </span>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-4 h-4"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	<span class="w-px h-4 bg-indigo-50/25" />

	<button
		class="p-3 bg-blue-600 focus:outline-none focus:bg-blue-700 active:bg-blue-500"
		type="button"
	>
		<span class="sr-only"> Next </span>

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
	</button>
</div>
<!--END:()-->

<div class="inline-flex items-center -space-x-px text-xs rounded-md">
	<label class="relative" for="sort">
		<span class="sr-only"> Sort </span>

		<select
			class="py-3 pl-5 pr-10 text-xs font-medium border-red-300 rounded-l-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-slate-50 focus:ring-0"
			id="sort"
			name="sort"
		>
			<option> Sort By </option>
			<option value="name-asc"> Name, Asc </option>
			<option value="name-desc"> Name, Desc </option>
			<option value="date-asc"> Date, Asc </option>
			<option value="name-desc"> Date, Desc </option>
		</select>
	</label>

	<button
		class="px-5 py-3 font-medium border hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-slate-50 active:opacity-75"
		type="button"
	>
		Download
	</button>

	<button
		class="px-5 py-3 font-medium border rounded-r-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-slate-50 active:opacity-75"
		type="button"
	>
		Export
	</button>
</div>
<!--END:()-->
