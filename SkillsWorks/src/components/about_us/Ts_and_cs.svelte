<script>
	import Flaotees from '../profiles/ui/Flaotees.svelte';
</script>

<!--START:()-->
<div class="relative min-h-screen flex">
	<!--START:()-->
	<div
		class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-indigo-50"
	>
		<!--START:()-->
		<div
			class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end p-10 pr-20 overflow-hidden bg-blue-900 text-indigo-50 bg-no-repeat bg-cover relative"
			style="background-image: url(https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);"
		>
			<!--START:()-->
			<div
				class="absolute bg-gradient-to-b from-indigo-100 to-blue-600 opacity-75 inset-0 z-0"
			/>
			<!--START:()-->
			<div class="w-full z-10 mb-10">
				<!--START:()-->
				<div
					class="sm:text-4xl xl:text-5xl text-slate-800 font-bold leading-tight mb-6"
				>
					Reference: Call to action
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="sm:text-sm xl:text-md text-slate-900 font-normal">
					What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
					and typesetting industry Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s when an unknown printer took a galley
					of type and scrambled it to make a type specimen book it has?
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->

			<!---remove custom style-->
			<Flaotees />
		</div>
		<!--END:()-->

		<!--START:()-->
		<div
			class="md:flex md:items-center md:justify-cente sm:w-auto md:h-full w-4/5 xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-indigo-50"
		>
			<!--START:()-->
			<div class="max-w-md w-full space-y-8">
				<!--START:()-->
				<div class="mb-10 text-center">
					<h3 class="font-semibold text-2xl text-slate-800">Sign Up</h3>
					<p class="text-slate-500">Please register your account.</p>
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="flex">
					<!--START:()-->
					<div class="w-full md:w-1/2 px-0.5 mb-6 md:mb-0">
						<button
							type="submit"
							class="w-full flex items-center justify-center bg-red-500 hover:bg-red-400 text-slate-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
						>
							Google
							<svg
								class="w-4 ml-2"
								fill="#fff"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z"
								/>
							</svg>
						</button>
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<button
							type="submit"
							class="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-slate-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
						>
							Facebook
							<svg
								class="w-4 ml-2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="#fff"
									fill-rule="evenodd"
									d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"
								/>
							</svg>
						</button>
					</div>
					<!--END:()-->
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="flex items-center justify-center space-x-2 my-5">
					<span class="h-px w-16 bg-amber-500" />
					<span class="text-slate-500 font-normal text-center"
						>or continue with</span
					>
					<span class="h-px w-16 bg-amber-500" />
				</div>
				<!--END:()-->

				<form class="w-full max-w-lg">
					<!--START:()-->
					<div class="flex flex-wrap -mx-3 mb-4">
						<!--START:()-->
						<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-first-name"
							>
								First Name
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-first-name"
								type="text"
								placeholder="Jane"
							/>
						</div>
						<!--END:()-->

						<!--START:()-->
						<div class="w-full md:w-1/2 px-3">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-last-name"
							>
								Last Name
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-last-name"
								type="text"
								placeholder="Doe"
							/>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="flex flex-wrap -mx-3 mb-4">
						<!--START:()-->
						<div class="w-full px-3">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-email"
							>
								Email
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-email"
								type="email"
								placeholder="Your email (example@gmail.com)"
								required
								name="email"
							/>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="flex flex-wrap -mx-3 mb-4">
						<!--START:()-->
						<div class="w-full px-3">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-password"
							>
								Password
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-password"
								type="password"
								name="password"
								required
								placeholder="******************"
							/>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="flex flex-wrap -mx-3 mb-4">
						<!--START:()-->
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-city"
							>
								City
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-city"
								type="text"
								placeholder="Wakanda"
							/>
						</div>
						<!--END:()-->

						<!--START:()-->
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-province"
							>
								Province
							</label>
							<!--START:()-->
							<div class="relative">
								<select
									class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
									id="province"
								>
									<option value="" disabled selected hidden>Select...</option>
									<option>+27</option>
								</select>
								<!--START:()-->
								<div
									class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700"
								>
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path
											d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
										/>
									</svg>
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->

						<!--START:()-->
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block text-sm font-medium text-slate-700"
								for="grid-zip"
							>
								Zip
							</label>
							<input
								class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 border-teal-300 bg-indigo-50 text-slate-700 placeholder-slate-400"
								id="grid-zip"
								type="text"
								placeholder="xxxx"
							/>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->

					<!--START:()-->
					<div class="space-y-6 mt-6">
						<!--START:()-->
						<div class="flex items-center justify-between">
							<!--START:()-->
							<div class="flex items-center">
								<input
									id="remember_me"
									checked
									name="remember_me"
									type="checkbox"
									class=" bg-red-200 border-dashed border-2 rounded border-teal-300 text-teal-300 ml-1 w-5 h-5 ease-linear transition-all duration-150"
								/>
								<label
									for="remember_me"
									class="ml-2 block text-sm text-slate-800"
								>
									Remember me
								</label>
							</div>
							<!--END:()-->

							<!--START:()-->
							<div class="text-sm text-right">
								<!-- svelte-ignore a11y-invalid-attribute -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a href="#" class="text-blue-300 hover:text-blue-500">
									Forgot your password?
								</a>
								<!-- TODORemeber to href to the Forgot your password Pages -->
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->

						<!--START:()-->
						<div>
							<button
								type="submit"
								class="w-full flex justify-center bg-blue-300 hover:bg-blue-500 text-slate-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
							>
								Sign In
							</button>
						</div>
						<!--END:()-->

						<!--START:()-->
						<div class="flex items-center justify-center space-x-2 my-5">
							<span class="h-px w-16 bg-amber-500" />
							<span class="text-slate-500 font-normal text-center">OR</span>
							<span class="h-px w-16 bg-amber-500" />
						</div>
						<!--END:()-->

						<!--START:()-->
						<div>
							<button
								type="submit"
								class="w-full flex justify-center bg-green-300 hover:bg-green-500 text-slate-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
							>
								Sign Up
							</button>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->
				</form>

				<!--START:()-->
				<div class="pt-6 text-center text-slate-400 text-xs">
					<span>
						Copyright © 2069-2069
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							href="https://github.com/Fathom-Growth-Solutions"
							rel=""
							target="_blank"
							title="Fathom Growth Solutions"
							class="text-blue-300 hover:text-blue-500 "
							>Fathom Growth Solutions</a
						>
					</span>
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
