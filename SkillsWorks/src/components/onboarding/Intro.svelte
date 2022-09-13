<script>
	import Faq from '../about_us/Faq.svelte';
	import Our_team from '../about_us/Our_team.svelte';
	import Reviews from '../about_us/Reviews.svelte';
	import Testimonial from '../about_us/Testimonial.svelte';
	import Contact_us from '../about_us/Contact_us.svelte'; //Updated
	import ContactUs from '../about_us/Contact_us.svelte';
</script>

<div>
	<!--<authNavbar /> -->
	<main>
		<div
			class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
		>
			<div
				class="absolute top-0 w-full h-full bg-center bg-cover"
				style="background-image: url(https://dummyimage.com/305x305);"
			>
				<span
					id="blackOverlay"
					class="w-full h-full absolute opacity-75 bg-black"
				/>
			</div>
			<div class="container relative mx-auto">
				<div class="items-center flex flex-wrap">
					<div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
						<div class="pr-12">
							<h1 class="text-indigo-50 font-semibold text-5xl">
								Your story starts with us.
							</h1>
							<p class="mt-4 text-lg text-slate-200">
								This is a simple example of a Landing Page you can build using
								Notus Svelte. It features multiple CSS components based on the
								Tailwind CSS design system.
							</p>
						</div>
					</div>
				</div>
			</div>
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

		<section class="pb-20 bg-blue-200 -mt-24">
			<div class="container mx-auto px-4">
				<div class="flex flex-wrap">
					<div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-indigo-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
								>
									<i class="fas fa-award" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Awarded Agency
								</h6>
								<p class="mt-2 mb-4 text-slate-500">
									Divide details about your product or agency work into parts. A
									paragraph describing a feature will be enough.
								</p>
							</div>
						</div>
					</div>

					<div class="w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-indigo-50 p-2 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
								>
									<i class="fas fa-retweet" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Free Revisions
								</h6>
								<p class="mt-2 mb-4 text-slate-500">
									Keep you user engaged by providing meaningful information.
									Remember that by this time, the user is curious.
								</p>
							</div>
						</div>
					</div>

					<div class="pt-6 w-full md:w-4/12 px-4 text-center">
						<div
							class="relative flex flex-col min-w-0 break-words bg-indigo-50 w-full mb-8 shadow-lg rounded-lg"
						>
							<div class="px-4 py-5 flex-auto">
								<div
									class="text-indigo-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
								>
									<i class="fas fa-fingerprint" />
								</div>
								<h6 class="text-xl text-slate-800 font-semibold">
									Verified Company
								</h6>
								<p class="mt-2 mb-4 text-slate-500">
									Write a few lines about each one. A paragraph describing a
									feature will be enough. Keep you user engaged!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="flex flex-wrap items-center mt-32">
					<div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
						<div
							class="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-indigo-50"
						>
							<i class="fas fa-user-friends text-xl" />
						</div>
						<h3
							class="text-3xl text-slate-500 mb-2 font-semibold leading-normal"
						>
							Working with us is a pleasure
						</h3>
						<p
							class="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600"
						>
							Don't let your uses guess by attaching tooltips and popoves to any
							element. Just make sure you enable them first via JavaScript.
						</p>
						<p
							class="text-lg font-light leading-relaxed mt-0 mb-4 text-slate-600"
						>
							The kit comes with three pre-built pages to help you get started
							faster. You can change the text and images and you're good to go.
							Just make sure you enable them first via JavaScript.
						</p>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" class="font-bold text-slate-700 mt-8">
							Check Notus Svelte!
						</a>
					</div>

					<div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
						<div
							class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-red-400"
						>
							<img
								alt="..."
								src="https://dummyimage.com/305x305"
								class="w-full align-middle rounded-t-lg"
							/>
							<blockquote class="relative p-8 mb-4">
								<svg
									preserveAspectRatio="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 583 95"
									class="absolute left-0 w-full block h-95-px -top-94-px"
								>
									<polygon
										points="-30,95 583,95 583,65"
										class="text-red-400 fill-current"
									/>
								</svg>
								<h4 class="text-xl font-bold text-indigo-50">
									Top Notch Services
								</h4>
								<p class="text-md font-light mt-2 text-indigo-50">
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

		<section class="relative py-20 bg-lime-200">
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
						class="text-lime-200 fill-current"
						points="2560 0 2560 100 0 100"
					/>
				</svg>
			</div>

			<div class="container mx-auto px-4 ">
				<div class="items-center flex flex-wrap">
					<div class="w-full md:w-4/12 ml-auto mr-auto px-4">
						<img
							alt="..."
							class="max-w-full rounded-lg shadow-lg"
							src="https://dummyimage.com/305x305"
						/>
					</div>
					<div class="w-full md:w-5/12 ml-auto mr-auto px-4 ">
						<div class="md:pr-12">
							<div
								class="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
							>
								<i class="fas fa-rocket text-xl" />
							</div>
							<h3 class="text-3xl text-slate-800 font-semibold">
								A growing company
							</h3>
							<p class="mt-4 text-lg leading-relaxed text-slate-500">
								The extension comes with three pre-built pages to help you get
								started faster. You can change the text and images and you're
								good to go.
							</p>
							<ul class="list-none mt-6">
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
											>
												<i class="fas fa-fingerprint" />
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">
												Carefully crafted components
											</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
											>
												<i class="fab fa-html5" />
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">Amazing page examples</h4>
										</div>
									</div>
								</li>
								<li class="py-2">
									<div class="flex items-center">
										<div>
											<span
												class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 mr-3"
											>
												<i class="far fa-paper-plane" />
											</span>
										</div>
										<div>
											<h4 class="text-slate-500">Dynamic components</h4>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-rose-200 pt-20 pb-8">
			<div class="container mx-auto px-4">
				<div class="flex flex-wrap justify-center text-center mb-24">
					<div class="w-full lg:w-6/12 px-4">
						<h2 class="text-4xl text-slate-800 font-semibold">
							Here are our heroes
						</h2>
						<p class="text-lg leading-relaxed m-4 text-slate-500">
							According to the National Oceanic and Atmospheric Administration,
							Ted, Scambos, NSIDClead scentist, puts the potentially record
							maximum.
						</p>
					</div>
					<Our_team />
				</div>
			</div>
		</section>

		<section class="pb-2 relative block bg-indigo-400">
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

			<div class="container mx-auto px-4 lg:pt-24 lg:pb-4">
				<div class="flex flex-wrap text-center justify-center">
					<div class="w-full lg:w-6/12 px-4">
						<h2 class="text-4xl font-semibold text-indigo-50">
							Build something
						</h2>
						<p class="text-lg leading-relaxed mt-4 mb-4 text-slate-800">
							Put the potentially record low maximum sea ice extent tihs year
							down to low ice. According to the National Oceanic and Atmospheric
							Administration, Ted, Scambos.
						</p>
					</div>
				</div>
				<div class="flex flex-wrap mt-12 justify-center">
					<div class="w-full lg:w-3/12 px-4 text-center">
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-indigo-50 inline-flex items-center justify-center"
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
					<div class="w-full lg:w-3/12 px-4 text-center">
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-indigo-50 inline-flex items-center justify-center"
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
					<div class="w-full lg:w-3/12 px-4 text-center">
						<div
							class="text-slate-800 p-3 w-12 h-12 shadow-lg rounded-full bg-indigo-50 inline-flex items-center justify-center"
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
				<ContactUs />
			</div>
		</section>
	</main>
	<!-- <Footer /> -->
</div>
