<script>
	import Flaotees from '../profiles/ui/Flaotees.svelte';
	import Pricing_plan from '../profiles/ui/Sub_plans.svelte';
</script>

<!--START:()-->
<div class="bg-indigo-300 text-yellow-500 mb-auto py-auto w-full py-2 px-2">
	<h2 class="md:hidden p-2 text-center z-10 w-full md:w-2/3 text-5xl font-extrabold">
		Frequently Asked Questions
	</h2>
	<!--START:()-->
	<div class="mx-auto max-w-6xl flex flex-col md:flex-row">
		<!--START:()-->
		<div
			class="w-1/3 hidden md:flex flex-auto items-start justify-end p-10 pr-20 overflow-hidden bg-no-repeat bg-cover relative"
		>
			<h2 class="z-10 mr-8 w-full md:w-2/3 text-5xl font-extrabold">
				F.requently A.sked Q.uestionZ
			</h2>
			<!---remove custom style-->
			<Flaotees />
		</div>
		<!--END:()-->

		<!--START:()-->
		<div class="w-2/3 space-y-2">
			<!--START:()-->
			<details class="p-6 border-l-4 border-yellow-500 bg-slate-300 group">
				<summary class="flex items-center justify-between cursor-pointer">
					<h5 class="text-lg font-medium text-yellow-500">
						Questions about Prices and Subscriptions etc...
					</h5>

					<span
						class="flex-shrink-0 ml-1.5 p-1.5 text-yellow-500 bg-white rounded-full sm:p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</summary>

				<!--START:()-->
				<div class="mt-4 leading-relaxed">
					<Pricing_plan />
				</div>
				<!--END:()-->
			</details>
			<!--END:()-->

			<!--START:()-->
			<details class="p-6 border-l-4 border-yellow-500 bg-slate-300 group">
				<summary class="flex items-center justify-between cursor-pointer">
					<h5 class="text-lg font-medium text-yellow-500">
						Lorem ipsum dolor sit amet consectetur adipisicing?
					</h5>

					<!--START:()--><span
						class="flex-shrink-0 ml-1.5 p-1.5 text-yellow-500 bg-white rounded-full sm:p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</summary>
				<!--END:()-->

				<p class="mt-4 leading-relaxed text-rose-400">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
					veritatis molestias culpa in, recusandae laboriosam neque aliquid
					libero nesciunt voluptate dicta quo officiis explicabo consequuntur
					distinctio corporis earum similique!
				</p>
			</details>
			<!--END:()-->

			<!--START:()-->
			<details class="p-6 border-l-4 border-yellow-500 bg-slate-300 group">
				<summary class="flex items-center justify-between cursor-pointer">
					<h5 class="text-lg font-medium text-yellow-500">
						Lorem ipsum dolor sit amet consectetur adipisicing?
					</h5>

					<span
						class="flex-shrink-0 ml-1.5 p-1.5 text-yellow-500 bg-white rounded-full sm:p-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</summary>

				<p class="mt-4 leading-relaxed text-rose-400">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
					veritatis molestias culpa in, recusandae laboriosam neque aliquid
					libero nesciunt voluptate dicta quo officiis explicabo consequuntur
					distinctio corporis earum similique!
				</p>
			</details>
			<!--END:()-->
		</div>
	</div>
	<!--END:()-->
</div>
<!--END:()-->
