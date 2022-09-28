<!--START:()-->
<div class="navbar bg-base-100 sticky">
	<!--START:()-->
	<div class="navbar-start">
		<!--START:()-->
		<div class="dropdown">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a>Contact Us</a>
				</li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a>About Us</a>
				</li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a>FAQs</a>
				</li>
				<li tabindex="0">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="#" class="justify-between">
						Blog
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path
								d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
							/>
						</svg>
					</a>
					<ul class="p-2">
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a>Personal</a>
						</li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a>Fashion</a>
						</li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a>Lifestyle</a>
						</li>
						<!-- svelte-ignore a11y-missing-attribute -->
						<li>
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a>News</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<!--END:()-->

		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="btn btn-ghost normal-case text-xl">Home</a>
	</div>
	<!--END:()-->

	<!--START:()-->
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<!-- svelte-ignore a11y-missing-attribute -->
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a>Contact Us</a>
			</li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a>About Us</a>
			</li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a>FAQs</a>
			</li>
			<li tabindex="0">
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a>
					Blog
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
					>
						<path
							d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
						/>
					</svg>
				</a>
				<ul class="p-2">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a>Personal</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a>Fashion</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a>Lifestyle</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a>News</a>
					</li>
					<li />
				</ul>
			</li>
			<!-- svelte-ignore a11y-missing-attribute -->
		</ul>
	</div>
	<!--END:()-->

	<!--START:()-->
	<div class="navbar-end">
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="btn">Sign In</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="btn">Sign Up</a>
	</div>
	<!--END:()-->
</div>

<!--END:()-->
<style>
	div.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
	}
</style>
