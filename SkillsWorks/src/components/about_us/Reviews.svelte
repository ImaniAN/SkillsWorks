<script>
	import Gold_star from '../comps/mock/Gold_star.svelte';
	import Slate_star from '../comps/mock/Slate_star.svelte';
</script>

<section class="px-4 py-8 mx-auto justify-center bg-amber-300">
	<!--START:()-->
	<div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 bg-slate-800">
		<h2 class="text-indigo-600 text-xl font-bold sm:text-2xl">
			Customer Reviews
		</h2>

		<!--START:()-->
		<div class="flex items-center mt-4">
			<p class="text-indigo-600 text-3xl font-medium">
				3.8
				<span class="sr-only text-indigo-600"> Average review score </span>
			</p>

			<!--START:()-->
			<div class="ml-4">
				<!--START:()-->
				<div class="flex -ml-1">
					<Gold_star />
					<Gold_star />
					<Gold_star />
					<Gold_star />
					<Slate_star />
				</div>

				<p class="mt-0.5 text-xs text-slate-500">Based on 4 reviews</p>
			</div>
		</div>

		<!--START:()-->
		<div class="grid grid-cols-1 mt-8 lg:grid-cols-2 gap-x-16 gap-y-12">
			<blockquote>
				<header class="sm:items-center sm:flex">
					<!--START:()-->
					<div class="flex -ml-1">
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Slate_star />
						<Slate_star />
					</div>

					<p class="text-indigo-600 mt-2 font-medium sm:ml-4 sm:mt-0">
						The best thing money can buy!
					</p>
				</header>

				<p class="mt-2 text-slate-50">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
					possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
					alias incidunt cum tempore aliquid aliquam error quisquam ipsam
					asperiores! Iste?
				</p>

				<footer class="mt-4">
					<p class="text-xs text-amber-500">John Doe - 12th January, 2024</p>
				</footer>
			</blockquote>

			<blockquote>
				<header class="sm:items-center sm:flex">
					<!--START:()-->
					<div class="flex -ml-1">
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Slate_star />
					</div>

					<p class="text-indigo-600 mt-2 font-medium sm:ml-4 sm:mt-0">
						The best thing money can buy!
					</p>
				</header>

				<p class="mt-2 text-slate-50">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
					possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
					alias incidunt cum tempore aliquid aliquam error quisquam ipsam
					asperiores! Iste?
				</p>

				<footer class="mt-4">
					<p class="text-xs text-amber-500">John Doe - 12th January, 2024</p>
				</footer>
			</blockquote>

			<blockquote>
				<header class="sm:items-center sm:flex">
					<!--START:()-->
					<div class="flex -ml-1">
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Slate_star />
					</div>

					<p class="text-indigo-600 mt-2 font-medium sm:ml-4 sm:mt-0">
						The best thing money can buy!
					</p>
				</header>

				<p class="mt-2 text-slate-50">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
					possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
					alias incidunt cum tempore aliquid aliquam error quisquam ipsam
					asperiores! Iste?
				</p>

				<footer class="mt-4">
					<p class="text-xs text-amber-500">John Doe - 12th January, 2024</p>
				</footer>
			</blockquote>

			<blockquote>
				<header class="sm:items-center sm:flex">
					<!--START:()-->
					<div class="flex -ml-1">
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Gold_star />
						<Slate_star />
					</div>

					<p class="text-indigo-600 mt-2 font-medium sm:ml-4 sm:mt-0">
						The best thing money can buy!
					</p>
				</header>

				<p class="mt-2 text-slate-50">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
					possimus fuga dolor rerum dicta, ipsum laboriosam est totam iusto
					alias incidunt cum tempore aliquid aliquam error quisquam ipsam
					asperiores! Iste?
				</p>

				<footer class="mt-4">
					<p class="text-xs text-amber-500">John Doe - 12th January, 2024</p>
				</footer>
			</blockquote>
		</div>
	</div>
</section>
