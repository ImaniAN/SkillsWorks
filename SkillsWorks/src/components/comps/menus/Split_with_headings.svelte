<!--START:()-->
<div class="flow-root">
	<nav class="flex flex-col space-y-2">
		<!--START:()-->
		<div>
			<strong class="block text-xs font-medium text-slate-400 uppercase">
				General
			</strong>

			<ul class="mt-2">
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
					>
						Profile
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Team
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Projects
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Meetings
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Calendar
					</a>
				</li>
			</ul>
		</div>
		<!--END:()-->

		<!--START:()-->
		<div>
			<strong class="block text-xs font-medium text-slate-400 uppercase">
				Support
			</strong>

			<ul class="mt-1">
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Update
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Help
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Settings
					</a>
				</li>
			</ul>
		</div>
		<!--END:()-->

		<!--START:()-->
		<div>
			<strong class="block text-xs font-medium text-slate-400 uppercase">
				Profile
			</strong>

			<ul class="mt-1">
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Details
					</a>
				</li>

				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						href="#"
						class="block px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
					>
						Subscription
					</a>
				</li>

				<li>
					<form method="post" action="/logout">
						<button
							type="submit"
							class="block w-full px-4 py-2 text-sm font-medium text-left text-slate-500 rounded-lg hover:bg-slate-100 hover:text-slate-700"
						>
							Logout
						</button>
					</form>
				</li>
			</ul>
		</div>
		<!--END:()-->
	</nav>
</div>
<!--END:()-->
