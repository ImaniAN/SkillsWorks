<div class="bg-lightblue py-20 px-4">
	<div class="mx-auto max-w-6xl flex flex-col md:flex-row">
		<div
			class="hidden md:flex flex-auto items-start justify-end p-10 pr-20 overflow-hidden bg-no-repeat bg-cover relative"
		>
			<h2 class="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
				Frequently Asked Questions
			</h2>
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

		<dl class="w-full md:w-2/3">
			<dt class="mb-4">
				<h3 class="text-xl font-semibold">
					We already have ongoing projects. Will Valohai easily integrate with
					them?
				</h3>
			</dt>
			<dd class="mb-16">
				<p>
					Running existing machine learning projects in Valohai is very simple!
					Integration only requires adding a valohai.yaml configuration file.
					Moving projects in and out of Valohai is easy – the integration is
					only the configuration file.
				</p>
			</dd>
			<dt class="mb-4">
				<h3 class="text-xl font-semibold">
					How do you compare to other data science platforms?
				</h3>
			</dt>
			<dd class="mb-16">
				<p>
					We don't. Valohai isn't a data science platform; it&#x27;s a Machine
					Learning Management Platform that handles the whole ML pipeline from
					feature extraction, to training of your model and to deploying it into
					production in a reproducible manner. Data science platforms offer
					hosted notebooks and AutoML solutions.
				</p>
			</dd>
			<dt class="mb-4">
				<h3 class="text-xl font-semibold">
					Does Valohai charge for computation?
				</h3>
			</dt>
			<dd class="mb-16">
				<p>
					Depends. Most of our customers use their own cloud and thus pay for
					usage according to their own agreements. Valohai doesn&#x27;t charge
					anything on top of the per-user license fee. If you don&#x27;t have a
					cloud provider, you can use our AWS, GCP and Azure accounts, and
					we&#x27;ll only charge you for what you use.
				</p>
			</dd>
		</dl>
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
		background: #93c5fd;
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
