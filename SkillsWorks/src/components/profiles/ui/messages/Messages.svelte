<script>
	import Search_Input from '../../../comps/Form Inputs/Search_input.svelte';
	import Msg_preview from '../../../comps/Messages/Msg_preview.svelte';
</script>

<!-- component -->
<main class="flex w-full h-full shadow-lg rounded-3xl">
	<section class="flex flex-col w-2/12 bg-indigo-50 rounded-l-3xl">
		<!--START:()-->
		<div
			class="w-16 mx-auto mt-12 mb-20 p-4 bg-indigo-500 rounded-2xl text-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
				/>
			</svg>
		</div>
		<nav class="relative flex flex-col py-4 items-center">
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="relative w-16 p-4 bg-indigo-500 text-indigo-50 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-dashed hover:border-teal-400 hover:text-indigo-800 hover:bg-indigo-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
					/>
				</svg>
				<span
					class="absolute -top-2 -right-2 bg-red-600 h-6 w-6 p-2 flex justify-center items-center text-indigo-50 rounded-full"
					>88</span
				>
			</a>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="w-16 p-4 border-2 border-dashed border-teal-400 text-slate-700 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-none hover:text-indigo-50 hover:bg-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="w-16 p-4 border-2 border-dashed border-teal-400 text-slate-700 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-none hover:text-indigo-50 hover:bg-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="w-16 p-4 border-2 border-dashed border-teal-400 text-slate-700 rounded-2xl mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-none hover:text-indigo-50 hover:bg-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="w-16 p-4 border-2 border-dashed border-teal-400 text-slate-700 rounded-2xl mb-24 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-none hover:text-indigo-50 hover:bg-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</a>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<a
				href="#"
				class="w-16 p-4 border-2 border-dashed border-teal-400 text-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-none hover:text-indigo-50 hover:bg-indigo-500"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			</a>
		</nav>
	</section>

	<section class="flex flex-col pt-3 w-4/12 bg-slate-50 overflow-y-scroll">
		<div class="mt-3 mr-3 px-3 relative">
			<Search_Input />
		</div>

		<ul class="mt-6">
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
			<li class="py-5 px-3 bg-indigo-500 text-indigo-50">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="flex justify-between items-center">
					<h3 class="text-lg text-slate-900 font-semibold">Akhil Gautam</h3>
					<p class="text-md">23m ago</p>
				</a>
				<!--START:()-->
				<div class="text-md">You have been invited!</div>
			</li>
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
			<Msg_preview />
		</ul>
	</section>
	<section class="w-6/12 px-4 flex flex-col bg-indigo-100 rounded-r-3xl">
		<!--START:()-->
		<div class="flex justify-between items-center h-48 mb-8">
			<!--START:()-->
			<div class="flex space-x-4 items-center">
				<!--START:()-->
				<div class="h-12 w-12 rounded-full overflow-hidden">
					<img
						alt="#"
						src="https://dummyimage.com/305x305"
						loading="lazy"
						class="h-full w-full object-cover"
					/>
				</div>
				<!--START:()-->
				<div class="flex flex-col">
					<h3 class="font-semibold text-slate-900 text-lg">Akhil Gautam</h3>
					<p class="text-light text-slate-400">akhil.gautam123@gmail.com</p>
				</div>
			</div>
			<!--START:()-->
			<div>
				<ul class="flex text-slate-900 space-x-4">
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
							/>
						</svg>
					</li>
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</li>

					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
							/>
						</svg>
					</li>
					<li class="w-6 h-6">
						<svg
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
					</li>
					<li class="w-6 h-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</div>
		<section>
			<h1 class="font-bold text-slate-900 text-2xl">We need UI/UX designer</h1>
			<!-- svelte-ignore a11y-invalid-attribute -->

			<article class="mt-8 text-slate-500 leading-7 tracking-wider">
				<p>Hi Akhil,</p>
				<p>
					Design and develop enterprise-facing UI and consumer-facing UI as well
					as REST API backends.Work with Product Managers and User Experience
					designers to create an appealing user experience for desktop web and
					mobile web.
				</p>
				<footer class="mt-12">
					<p>Thanks & Regards,</p>
					<p>Alexandar</p>
				</footer>
			</article>
			<ul class="flex space-x-4 mt-12">
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-indigo-600 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-blue-800 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-teal-400 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
						/>
					</svg>
				</li>
				<li
					class="w-10 h-10 border-2 border-dashed border-teal-400 rounded-lg p-1 cursor-pointer transition duration-200 text-amber-500 hover:bg-blue-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
							d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
						/>
					</svg>
				</li>
			</ul>
		</section>
		<section class="mt-6 rounded-xl bg-slate-50 mb-3">
			<textarea
				class="rounded-lg flex-1 appearance-none border-2 border-teal-400 border-dashed w-full py-2 px-4 bg-slate-50 text-slate-700 placeholder-slate-400 text-base focus:ring-indigo-600 focus:border-transparent shadow focus:outline-none focus:ring"
				placeholder="Type your reply here..."
				rows="3"
			/>
			<!--START:()-->
			<div class="flex items-center justify-between p-2">
				<button class="h-6 w-6 text-slate-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
						/>
					</svg>
				</button>
				<button
					class="text-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 bg-indigo-500 hover:border-2 hover:border-dashed hover:border-teal-600 hover:text-indigo-900 hover:bg-indigo-50 px-3 py-2 rounded-md text-sm font-medium"
					>Reply</button
				>
			</div>
		</section>
	</section>
</main>
