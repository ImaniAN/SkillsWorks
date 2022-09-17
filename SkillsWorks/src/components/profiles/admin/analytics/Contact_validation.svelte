<script>
	import Flaotees from '../../ui/Flaotees.svelte';
	import Banner from '../../ui/Banner.svelte';
	import Menu from '../../ui/F_Menu.svelte';
	import Resume from '../../candidate/resume/Resume.svelte';
	import Candi_info from '../../candidate/Candidate.svelte';
</script>

<div class="flex justify-center">
	<div class="bg-indigo-200 bg-opacity-70">
		<div class="min-h-full">
			<Banner />
			<header class="bg-indigo-50 shadow">
				<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 class="text-3xl tracking-tight font-bold text-slate-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<!-- Replace with your content -->
					<div class="relative min-h-screen flex ">
						<div
							class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto bg-slate-50"
						>
							<div
								class="w-11/12 h-full sm:hidden md:flex flex-auto items-end justify-end overflow-hidden bg-yellow-200 text-indigo-50 bg-no-repeat bg-cover relative"
							>
								<div
									class="absolute bg-gradient-to-b from-white to-indigo-900 opacity-25 inset-0 z-0"
								/>
								<div class="w-full z-10 mb-1">
									<div class="leading-tight mb-1">
										<Candi_info />
										<Resume />
									</div>
									<!--END:()-->
								</div>
								<!--END:()-->
								<!---remove custom style-->
								<ul class="squares max-w-sm:hidden">
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
									<li />
								</ul>

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

<!-- component -->
<style>
	/*remove custom style*/
	.squares {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.squares li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: indigo;
		animation: animate 25s linear infinite;
		bottom: -320px;
	}
	.squares li:nth-child(1) {
		left: 3%;
		width: 99px;
		height: 99px;
		animation-delay: 3, 14s;
		animation-duration: 30s;
	}

	.squares li:nth-child(2) {
		left: 26%;
		width: 114px;
		height: 114px;
		animation-delay: 3, 14s;
		animation-duration: 10s;
	}

	.squares li:nth-child(3) {
		left: 39%;
		width: 133px;
		height: 133px;
		animation-delay: 3, 14s;
		animation-duration: 20s;
	}

	.squares li:nth-child(4) {
		left: 48%;
		width: 88px;
		height: 88px;
		animation-delay: 3, 14s;
		animation-duration: 11s;
	}

	.squares li:nth-child(5) {
		left: 55%;
		width: 55px;
		height: 55px;
		animation-delay: 3, 14s;
		animation-duration: 32s;
	}

	.squares li:nth-child(6) {
		left: 69%;
		width: 99px;
		height: 99px;
		animation-delay: 3, 14s;
		animation-duration: 33s;
	}

	.squares li:nth-child(7) {
		left: 62%;
		width: 88px;
		height: 88px;
		animation-delay: 3, 14s;
		animation-duration: 34s;
	}

	.squares li:nth-child(8) {
		left: 19%;
		width: 69px;
		height: 69px;
		animation-delay: 3, 14s;
		animation-duration: 21s;
	}

	.squares li:nth-child(9) {
		left: 2%;
		width: 82px;
		height: 82px;
		animation-delay: 3, 14s;
		animation-duration: 22s;
	}

	.squares li:nth-child(10) {
		left: 5%;
		width: 50px;
		height: 50px;
		animation-delay: 3, 14s;
		animation-duration: 23s;
	}

	.squares li:nth-child(11) {
		left: 39%;
		width: 314px;
		height: 314px;
		animation-delay: 3, 14s;
		animation-duration: 24s;
	}

	.squares li:nth-child(12) {
		left: 42%;
		width: 20px;
		height: 20px;
		animation-delay: 3, 14s;
		animation-duration: 12s;
	}

	.squares li:nth-child(13) {
		left: 33%;
		width: 153px;
		height: 153px;
		animation-delay: 3, 14s;
		animation-duration: 13s;
	}
	.squares li:nth-child(14) {
		left: 12%;
		width: 222px;
		height: 222px;
		animation-delay: 3, 14s;
		animation-duration: 14s;
	}

	.squares li:nth-child(15) {
		left: 55%;
		width: 55px;
		height: 55px;
		animation-delay: 3, 14s;
		animation-duration: 15s;
	}
	.squares li:nth-child(16) {
		left: 44%;
		width: 33px;
		height: 33px;
		animation-delay: 3, 14s;
		animation-duration: 25s;
	}

	.squares li:nth-child(17) {
		left: 77%;
		width: 77px;
		height: 77px;
		animation-delay: 3, 14s;
		animation-duration: 26s;
	}
	.squares li:nth-child(18) {
		left: 88%;
		width: 217px;
		height: 217px;
		animation-delay: 3, 14s;
		animation-duration: 17s;
	}

	.squares li:nth-child(19) {
		left: 90%;
		width: 238px;
		height: 238px;
		animation-delay: 3, 14s;
		animation-duration: 27s;
	}
	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-3000px) rotate(900deg);
			opacity: 0;
			border-radius: 99%;
		}
	}
</style>
