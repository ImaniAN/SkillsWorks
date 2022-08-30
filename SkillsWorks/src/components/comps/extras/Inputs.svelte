<label
	class="relative block p-3 border-2 border-fuchsia-300 rounded-lg"
	for="name"
>
	<input
		class="w-full px-0 pt-3.5 pb-0 text-sm placeholder-transparent border-none focus:ring-0 peer"
		id="name"
		required
		type="text"
		placeholder="Name"
	/>

	<span
		class="absolute text-xs font-medium text-slate-500 transition-all left-3 peer-focus:text-xs peer-focus:top-3 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm"
	>
		Name
	</span>
</label>

<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
	<label
		class="relative block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
		for="grid-zip"
	>
		Zip
	</label>
	<input
		class="relative block rounded-lg  flex-1 appearance-none border-2 border-fuchsia-300 border-dashed w-full py-2 px-4 bg-white text-slate-700 placeholder-slate-400 shadow-sm text-base  focus:ring-2 focus:ring-indigo-600 focus:"
		id="grid-zip"
		type="text"
		placeholder="xxxx"
	/>
</div>

<div class="w-11/12 md:w-2/3 px-4 py-2 mb-5 md:mb-1">
	<label
		class="border-2 border-fuchsia-300 border-dashed relative block pt-4 mb-2 rounded-lg w-full bg-white shadow-sm peer tracking-wide text-rose-400 text-xs font-bold"
		for="*name of input*"
	>
		<input
			id="org"
			class="text-sm placeholder-transparent focus:ring-0 peer"
			required
			type="text"
			placeholder="org"
			autocomplete="org"
		/>

		<span
			class="absolute text-xs font-medium text-slate-500 transition-all left-3 peer-focus:text-xs peer-focus:top-1 peer-focus:translate-y-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm"
		>
			*org input*
		</span>
	</label>

	<label
		class="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
		for="grid-first-name"
	>
		First Name
	</label>
	<input
		class=" rounded-lg border-transparent flex-1 appearance-none border-2 border-fuchsia-300 border-dashed w-full py-2 px-4 bg-white text-slate-700 placeholder-slate-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
		id="grid-first-name"
		type="text"
		placeholder="Jane"
	/>
</div>
