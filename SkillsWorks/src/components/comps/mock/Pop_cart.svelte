<!--START:()-->
<div
	class="block p-10 sm:px-12 border-2 border-black bg-amber-50 rounded-b-xl shadow-[0_4px_0_0_rgba(0,0,0,1)] max-w-sm w-screen"
	aria-modal="true"
	aria-label="Item added to your cart"
	role="dialog"
	tabindex="-1"
>
	<!--START:()-->
	<div class="flex items-start justify-between">
		<h2 class="flex items-center text-slate-700">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				/>
			</svg>

			<span class="ml-2 text-sm"> Item added to your cart </span>
		</h2>

		<button
			class="-mt-6 -mr-6 transition-transform sm:-mr-8 hover:scale-110"
			type="button"
			aria-label="Close"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>
	<!--END:()-->

	<!--START:()-->
	<div class="flex items-start pt-8 pb-12">
		<img
			class="object-cover w-16 h-20 border-2 border-black rounded-lg"
			src="https://dummyimage.com/305x305"
			alt="Basic Tee"
		/>

		<!--START:()-->
		<div class="ml-4">
			<h3 class="text-sm">Basic Tee 6-Pack</h3>

			<dl class="mt-1 space-y-1 text-xs text-slate-500">
				<!--START:()-->
				<div>
					<dt class="inline">Size:</dt>
					<dd class="inline">XXS</dd>
				</div>
				<!--END:()-->

				<!--START:()-->
				<div>
					<dt class="inline">Color:</dt>
					<dd class="inline">White</dd>
				</div>
				<!--END:()-->
			</dl>
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->

	<!--START:()-->
	<div class="space-y-4 text-center">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			class="block p-4 text-sm border-2 border-black rounded-full hover:ring-1 hover:ring-black shadow-[0_4px_0_0_rgba(0,0,0,1)] font-medium"
			href="/cart"
		>
			View my cart (2)
		</a>

		<form enctype="multipart/form-data" method="post" action="#" name="" id="">
			<button
				class="block w-full p-4 text-sm font-medium rounded-full text-amber-50 bg-red-900 hover:ring-1 hover:ring-red-900"
				type="submit"
			>
				Check out
			</button>
		</form>

		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			class="inline-block text-sm tracking-wide underline underline-offset-4 hover:text-2xl/75"
			href="/collections/all"
		>
			Continue shopping
		</a>
	</div>
	<!--END:()-->
</div>
<!--END:()-->
