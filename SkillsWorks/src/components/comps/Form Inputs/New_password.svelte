<label
	pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]{8})"
	title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
	class="block text-sm font-medium text-slate-700"
	for="form-new-password"
>
	Password
</label>
<input
	class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-4 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-400 bg-indigo-50 text-slate-700 placeholder-amber-500"
	id="form-new-password"
	type="password"
	name="new-password"
	autocomplete="new-password"
	required
	placeholder="******************"
/>
