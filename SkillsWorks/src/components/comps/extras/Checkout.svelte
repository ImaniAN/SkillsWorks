<section>
	<h1 class="sr-only">Checkout</h1>

	<div class="relative mx-auto max-w-screen-2xl">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="py-12 bg-slate-50 md:py-24">
				<div class="max-w-lg px-4 mx-auto lg:px-8">
					<div class="flex items-center">
						<span class="w-10 h-10 bg-blue-900 rounded-full" />

						<h2 class="ml-4 font-medium">BambooYou</h2>
					</div>
					<!--END:()-->

					<div class="mt-8">
						<p class="text-2xl font-medium tracking-tight">R99.99</p>
						<p class="mt-1 text-sm text-slate-500">For the purchase of</p>
					</div>
					<!--END:()-->

					<div class="mt-12">
						<div class="flow-root">
							<ul class="-my-4 divide-y divide-slate-200">
								<li class="flex items-center justify-between py-4">
									<div class="flex items-start">
										<img
											class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
											src="https://dummyimage.com/305x305"
											alt=""
										/>

										<div class="ml-4">
											<p class="text-sm">Vibrant Trainers</p>

											<dl class="mt-1 space-y-1 text-xs text-slate-500">
												<div>
													<dt class="inline">Color:</dt>
													<dd class="inline">Blue</dd>
												</div>
												<!--END:()-->

												<div>
													<dt class="inline">Size:</dt>
													<dd class="inline">UK 10</dd>
												</div>
												<!--END:()-->
											</dl>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<div>
										<p class="text-sm">
											R49.99
											<small class="text-slate-500">x1</small>
										</p>
									</div>
									<!--END:()-->
								</li>

								<li class="flex items-center justify-between py-4">
									<div class="flex items-start">
										<img
											class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
											src="https://dummyimage.com/305x305"
											alt=""
										/>

										<div class="ml-4">
											<p class="text-sm">Vibrant Trainers</p>

											<dl class="mt-1 space-y-1 text-xs text-slate-500">
												<div>
													<dt class="inline">Color:</dt>
													<dd class="inline">Blue</dd>
												</div>
												<!--END:()-->

												<div>
													<dt class="inline">Size:</dt>
													<dd class="inline">UK 10</dd>
												</div>
												<!--END:()-->
											</dl>
										</div>
										<!--END:()-->
									</div>
									<!--END:()-->

									<div>
										<p class="text-sm">
											R25
											<small class="text-slate-500">x2</small>
										</p>
									</div>
									<!--END:()-->
								</li>
							</ul>
						</div>
						<!--END:()-->
					</div>
					<!--END:()-->
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->

			<div class="py-12 bg-indigo-50 md:py-24">
				<div class="max-w-lg px-4 mx-auto lg:px-8">
					<form class="grid grid-cols-6 gap-4">
						<div class="col-span-3">
							<label class="block mb-1 text-sm text-slate-600" for="first_name">
								First Name
							</label>

							<input
								class="rounded-lg shadow-sm border-red-300 w-full text-sm p-2.5"
								type="text"
								id="frst_name"
							/>
						</div>
						<!--END:()-->

						<div class="col-span-3">
							<label class="block mb-1 text-sm text-slate-600" for="last_name">
								Last Name
							</label>

							<input
								class="rounded-lg shadow-sm border-red-300 w-full text-sm p-2.5"
								type="text"
								id="last_name"
							/>
						</div>
						<!--END:()-->

						<div class="col-span-6">
							<label class="block mb-1 text-sm text-slate-600" for="email">
								Email
							</label>

							<input
								class="rounded-lg shadow-sm border-red-300 w-full text-sm p-2.5"
								type="email"
								placeholder="Your email (example@gmail.com)"
								required
								name="email"
								id="email"
							/>
						</div>
						<!--END:()-->

						<div class="col-span-6">
							<label class="block mb-1 text-sm text-slate-600" for="phone">
								Phone
							</label>

							<input
								class="rounded-lg shadow-sm border-red-300 w-full text-sm p-2.5"
								type="tel"
								id="phone"
								placeholder="+27 000 000 000"
							/>
						</div>
						<!--END:()-->

						<fieldset class="col-span-6">
							<legend class="block mb-1 text-sm text-slate-600">
								Card Details
							</legend>

							<div class="-space-y-px bg-indigo-50 rounded-lg shadow-sm">
								<div>
									<label class="sr-only" for="card-number">Card Number</label>

									<input
										class="border-red-300 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5 placeholder-slate-400"
										type="text"
										name="card-number"
										id="card-number"
										placeholder="Card number"
									/>
								</div>
								<!--END:()-->

								<div class="flex -space-x-px">
									<div class="flex-1">
										<label class="sr-only" for="card-expiration-date">
											Expiration Date
										</label>

										<input
											class="border-red-300 relative rounded-bl-lg w-full focus:z-10 text-sm p-2.5 placeholder-slate-400"
											type="text"
											name="card-expiration-date"
											id="card-expiration-date"
											placeholder="MM / YY"
										/>
									</div>
									<!--END:()-->

									<div class="flex-1">
										<label class="sr-only" for="card-cvc">CVC</label>

										<input
											class="border-red-300 relative rounded-br-lg w-full focus:z-10 text-sm p-2.5 placeholder-slate-400"
											type="text"
											name="card-cvc"
											id="card-cvc"
											placeholder="CVC"
										/>
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->
						</fieldset>

						<fieldset class="col-span-6">
							<legend class="block mb-1 text-sm text-slate-600">
								Billing Address
							</legend>

							<div class="-space-y-px bg-indigo-50 rounded-lg shadow-sm">
								<div>
									<label class="sr-only" for="country">Country</label>

									<select
										class="border-red-300 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
										id="country"
										name="country"
									>
										<option>England</option>
										<option>Wales</option>
										<option>Scotland</option>
										<option>France</option>
										<option>Belgium</option>
										<option>Japan</option>
									</select>
								</div>
								<!--END:()-->

								<div>
									<label class="sr-only" for="postal-code">
										ZIP/Post Code
									</label>

									<input
										class="border-red-300 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-slate-400"
										type="text"
										name="postal-code"
										id="postal-code"
										autocomplete="postal-code"
										placeholder="ZIP/Post Code"
									/>
								</div>
								<!--END:()-->
							</div>
							<!--END:()-->
						</fieldset>

						<div class="col-span-6">
							<button
								class="rounded-lg bg-black text-sm p-2.5 text-indigo-50 w-full block"
								type="submit"
							>
								Pay Now
							</button>
						</div>
						<!--END:()-->
					</form>
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
</section>
