<script>
	import Flaotees from '../../ui/Flaotees.svelte';
	import Banner from '../../ui/Banner.svelte';
	import Menu from '../../ui/F_Menu.svelte';
	import Resume from '../../candidate/resume/Resume.svelte';
	import Candi_info from '../../candidate/Candidate.svelte';
</script>

<!--START:()-->
<div class="flex justify-center">
	<!--START:()-->
	<div class="bg-indigo-200 bg-opacity-70">
		<!--START:()-->
		<div class="min-h-full">
			<Banner />
			<header class="bg-indigo-50 shadow">
				<!--START:()-->
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl tracking-tight font-bold text-slate-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<!--START:()-->
				<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<!-- Replace with your content -->
					<!--START:()-->
					<div class="relative min-h-screen flex ">
						<!--START:()-->
						<div
							class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto bg-slate-50"
						>
							<!--START:()-->
							<div
								class="w-11/12 h-full sm:hidden md:flex flex-auto items-end justify-end overflow-hidden bg-yellow-200 text-indigo-50 bg-no-repeat bg-cover relative"
							>
								<!--START:()-->
								<div
									class="absolute bg-gradient-to-b from-white to-indigo-900 opacity-25 inset-0 z-0"
								/>
								<!--START:()-->
								<div class="w-full z-10 mb-1">
									<!--START:()-->
									<div class="leading-tight mb-1">
										<Candi_info />
										<Resume />
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
								<!---remove custom style-->
								<Flaotees />
								<!--END:()-->
							</div>
							<!--END:()-->
						</div>
						<!--END:()-->
						<!-- /End replace -->
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
