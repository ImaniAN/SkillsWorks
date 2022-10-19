<script>
	import Faq from '../about_us/Faq.svelte';
	import Our_team from '../about_us/Our_team.svelte';
	import Reviews from '../about_us/Reviews.svelte';
	import Testimonial from '../about_us/Testimonial.svelte';
	import Contact_Us from '../about_us/Contact_us.svelte'; //Updated
</script>

<!--START:()-->
<div>
	<!--<authNavbar /> -->
	<main>
		<!--START:()-->
		<div
			class="relative pt-16 pb-32 flex content-center items-center justify-center"
		>
			<!--START:()-->
			<div
				class="absolute top-0 w-full h-full bg-center bg-cover"
				style="background-image: url(https://dummyimage.com/305x305);"
			>
				<span
					id="blackOverlay"
					class="w-full h-full absolute opacity-75 bg-slate-700"
				/>
			</div>
			<!--START:()-->
			<div class="container relative mx-auto">
				<!--START:()-->
				<div class="items-center flex flex-wrap">
					<!--START:()-->
					<div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
						<!--START:()-->
						<div class="pr-12">
							<h1 class="text-amber-300 font-semibold text-5xl">
								Your story starts with us.
							</h1>
							<p class="mt-4 text-lg text-slate-100">
								This is a simple example of a Landing Page you can build using
								Svelte. It features multiple CSS components based on the
								Tailwind CSS design system.
							</p>
						</div>
					</div>
				</div>
			</div>
			<!--START:()-->
			<div
				class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						class="text-slate-200 fill-current"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
		</div>

		<section class="pb-20 bg-indigo-50 -mt-24">
			<!--START:()-->
			<div class="container mx-auto px-4">
				<!--START:()-->
				<div class="flex flex-wrap">
					<!--START:()-->
					<div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
						<!--START:()-->
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<!--START:()-->
							<div class="px-4 py-5 flex-auto">
								<!--START:()-->
								<div
									class="text-slate-800 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-amber-300"
								>
									<i class="fas fa-award" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Awarded Agency
								</h6>
								<p class="mt-2 mb-4 text-slate-800">
									Divide details about your product or agency work into parts. A
									paragraph describing a feature will be enough.
								</p>
							</div>
						</div>
					</div>

					<!--START:()-->
					<div class="w-full md:w-4/12 px-4 text-center">
						<!--START:()-->
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<!--START:()-->
							<div class="px-4 py-5 flex-auto">
								<!--START:()-->
								<div
									class="text-slate-800 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-400"
								>
									<i class="fas fa-retweet" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Free Revisions
								</h6>
								<p class="mt-2 mb-4 text-slate-800">
									Keep you user engaged by providing meaningful information.
									Remember that by this time, the user is curious.
								</p>
							</div>
						</div>
					</div>

					<!--START:()-->
					<div class="pt-6 w-full md:w-4/12 px-4 text-center">
						<!--START:()-->
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<!--START:()-->
							<div class="px-4 py-5 flex-auto">
								<!--START:()-->
								<div
									class="textslate-800 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-indigo-500"
								>
									<i class="fas fa-fingerprint" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Verified Company
								</h6>
								<p class="mt-2 mb-4 text-slate-800">
									Write a few lines about each one. A paragraph describing a
									feature will be enough. Keep you user engaged!
								</p>
							</div>
						</div>
					</div>
				</div>

				<!--START:()-->
				<div class="flex flex-wrap items-center mt-1">
					<!--START:()-->
					<div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
						<!--START:()-->
						<div
							class="text-slate-800 bg-indigo-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full "
						>
							<i class="fas fa-user-friends text-xl" />
						</div>
						<h3
							class="text-3xl text-indigo-500 mb-2 font-semibold leading-normal"
						>
							Working with us is a pleasure
						</h3>
						<p
							class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-700"
						>
							Don't let your uses guess by attaching tooltips and popoves to any
							element. Just make sure you enable them first via JavaScript.
						</p>
						<p
							class="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-700"
						>
							The kit comes with three pre-built pages to help you get started
							faster. You can change the text and images and you're good to go.
							Just make sure you enable them first via JavaScript.
						</p>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="font-bold text-indigo-500 mt-8">
							Check SkillsWorkZ!
						</a>
					</div>

					<!--START:()-->
					<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
						<!--START:()-->
						<div
							class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-900"
						>
							<img
								alt="..."
								src="https://dummyimage.com/305x305"
								class="w-full align-middle rounded-t-lg"
							/>
							<blockquote class="relative p-8 mb-4">
								<h4 class="text-xl font-bold text-indigo-500">
									Top Notch Services
								</h4>
								<p class="text-md font-light mt-2 text-slate-100">
									The Arctic Ocean freezes every winter and much of the sea-ice
									then thaws every summer, and that process will continue
									whatever happens.
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="relative py-20 bg-emerald-200">
			<!--START:()-->
			<div
				class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						class="text-emerald-200 fill-current"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>

			<!--START:()-->
			<div class="container mx-auto px-4">
				<!--START:()-->
				<div class="items-center flex flex-wrap">
					<!--START:()-->
					<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
						<img
							alt="..."
							class="max-w-full rounded-lg shadow-lg"
							src="https://dummyimage.com/305x305"
						/>
					</div>
					<!--START:()-->
					<div class="w-full md:w-5/12 ml-auto mr-auto px-4">
						<!--START:()-->
						<div class="md:pr-12">
							<!--START:()-->
							<div
								class="text-slate-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-amber-300"
							>
								<i class="fas fa-rocket text-xl" />
							</div>
							<h3 class="text-3xl text-slate-800 font-semibold">
								A growing company
							</h3>
							<p class="mt-4 text-lg leading-relaxed text-slate-800">
								The extension comes with three pre-built pages to help you get
								started faster. You can change the text and images and you're
								good to go.
							</p>
							<ul class="list-none mt-6">
								<li class="py-2">
									<!--START:()-->
									<div class="flex items-center">
										<!--START:()-->
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-800 bg-amber-300 mr-3"
											>
												<i class="fas fa-fingerprint" />
											</span>
										</div>
										<!--START:()-->
										<div>
											<h4 class="text-slate-800">
												Carefully crafted components
											</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<!--START:()-->
									<div class="flex items-center">
										<!--START:()-->
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-800 bg-amber-300 mr-3"
											>
												<i class="fab fa-html5" />
											</span>
										</div>
										<!--START:()-->
										<div>
											<h4 class="text-slate-800">Amazing page examples</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<!--START:()-->
									<div class="flex items-center">
										<!--START:()-->
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-800 bg-amber-300 mr-3"
											>
												<i class="far fa-paper-plane" />
											</span>
										</div>
										<!--START:()-->
										<div>
											<h4 class="text-slate-800">Dynamic components</h4>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-teal-400 pt-20 pb-8 relative block">
			<!--START:()-->
			<div
				class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						class="text-teal-400 fill-current"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>
			<div class="container mx-auto px-4">
				<!--START:()-->
				<div class="flex flex-wrap justify-center text-center mb-24">
					<!--START:()-->
					<div class="w-full lg:w-6/12 px-4">
						<h2 class="text-4xl text-slate-800 font-semibold">
							Here are our heroes
						</h2>
						<p class="text-lg leading-relaxed m-4 text-slate-200">
							According to the National Oceanic and Atmospheric Administration,
							Ted, Scambos, NSIDClead scentist, puts the potentially record
							maximum.
						</p>
					</div>
					<Our_team />
				</div>
			</div>
		</section>

		<section class="relative block">
			<!--START:()-->
			<div
				class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
				style="transform: translateZ(0);"
			>
				<svg
					class="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						class="text-indigo-400 fill-current"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>

			<!--START:()-->
			<div class="bg-indigo-400 container mx-auto px-4 lg:pt-10 lg:pb-2">
				<!--START:()-->
				<div class="flex flex-wrap text-center justify-center">
					<!--START:()-->
					<div class="w-full lg:w-6/12 px-4">
						<h2 class="text-4xl font-semibold text-teal-400">
							Build something
						</h2>
						<p class="text-lg leading-relaxed mt-4 mb-4 text-slate-200">
							Put the potentially record low maximum sea ice extent tihs year
							down to low ice. According to the National Oceanic and Atmospheric
							Administration, Ted, Scambos.
						</p>
					</div>
				</div>
				<!--START:()-->
				<div class="flex flex-wrap mt-12 justify-center">
					<!--START:()-->
					<div class="w-full lg:w-3/12 px-4 text-center">
						<!--START:()-->
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-teal-400 inline-flex items-center justify-center"
						>
							<i class="fas fa-medal text-xl" />
						</div>
						<h6 class="text-xl mt-5 font-semibold text-indigo-50">
							Excelent Services
						</h6>
						<p class="mt-2 mb-4 text-slate-800">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
					<!--START:()-->
					<div class="w-full lg:w-3/12 px-4 text-center">
						<!--START:()-->
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-teal-400 inline-flex items-center justify-center"
						>
							<i class="fas fa-poll text-xl" />
						</div>
						<h5 class="text-xl mt-5 font-semibold text-indigo-50">
							Grow your market
						</h5>
						<p class="mt-2 mb-4 text-slate-800">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
					<!--START:()-->
					<div class="w-full lg:w-3/12 px-4 text-center">
						<!--START:()-->
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-teal-400 inline-flex items-center justify-center"
						>
							<i class="fas fa-lightbulb text-xl" />
						</div>
						<h5 class="text-xl mt-5 font-semibold text-indigo-50">
							Launch time
						</h5>
						<p class="mt-2 mb-4 text-slate-800">
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</div>
				</div>
				<section class="py-2 mb-2 text-slate-300 bg-slate-800">
					<!--START:()-->
					<div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
						<!--START:()-->
						<div class="max-w-lg mx-auto text-center">
							<h2 class="text-3xl font-bold sm:text-4xl text-teal-400">
								Kickstart your marketing
							</h2>

							<p class="mt-4 text-amber-300">
								This is Lorem ipsum place holder Text!!!, dolor sit amet
								consectetur adipisicing elit. Consequuntur aliquam doloribus
								nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe
								laborum.
							</p>
						</div>

						<!--START:()-->
						<div
							class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
						>
							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>

							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>

							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>

							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>

							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>

							<a
								class="block p-8 border border-gray-800 shadow-2xl transition rounded-xl hover:shadow-teal-500 hover:border-teal-500"
								href="/services/digital-campaigns"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-teal-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M12 14l9-5-9-5-9 5 9 5z" />
									<path
										d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
									/>
								</svg>

								<h3 class="mt-4 text-xl font-bold text-amber-300">
									Digital campaigns
								</h3>

								<p class="mt-1 text-sm">
									This is Lorem ipsum place holder Text!!! dolor sit amet
									consectetur adipisicing elit. Ex ut quo possimus adipisci
									distinctio alias voluptatum blanditiis laudantium.
								</p>
							</a>
						</div>

						<!--START:()-->
						<div class="mt-12 text-center">
							<a
								class="inline-flex items-center px-8 py-3 mt-8 text-white bg-teal-600 border border-teal-600 rounded hover:bg-transparent active:text-teal-500 focus:outline-none focus:ring"
								href="/get-started"
							>
								<span class="text-sm font-medium"> Get Started </span>

								<svg
									class="w-5 h-5 ml-3"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</section>

				<Contact_Us />
			</div>
		</section>
	</main>
</div>
