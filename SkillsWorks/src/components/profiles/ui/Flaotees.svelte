<div class="relative min-h-screen flex ">
	<div
		class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto bg-white"
	>
		<div
			class="w-11-12 h-full hidden md:flex flex-auto items-end justify-end p-10 pr-20 overflow-hidden bg-blue-900 text-white bg-no-repeat bg-cover relative"
		>
			<div
				class="absolute bg-gradient-to-b from-indigo-100 to-blue-600 opacity-75 inset-0 z-0"
			/>
			<div class="w-full z-10 mb-10">
				<div
					class="sm:text-4xl xl:text-5xl  text-slate-800 font-bold leading-tight mb-6"
				>
					Reference: Call to action
				</div>
				<!--END:()-->

				<div class="sm:text-sm xl:text-md text-slate-900 font-normal">
					What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
					and typesetting industry Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s when an unknown printer took a galley
					of type and scrambled it to make a type specimen book it has?
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->
			<!---remove custom style-->
			<ul class="squares">
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
		</div>
		<!--END:()-->
	</div>
	<!--END:()-->
</div>
<!--END:()-->

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
		background: orangered;
		animation: animate 25s linear infinite;
		bottom: -150px;
	}
	.squares li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.squares li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.squares li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.squares li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.squares li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.squares li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.squares li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.squares li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.squares li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.squares li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}
	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
