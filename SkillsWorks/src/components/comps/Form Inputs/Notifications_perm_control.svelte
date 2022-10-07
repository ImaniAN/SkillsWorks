<!--START:()-->
<div class="px-4 py-5 bg-indigo-50 space-y-6 sm:p-6">
	<fieldset>
		<legend class="sr-only">By Email</legend>
		<!--START:()-->
		<div class="text-base font-medium text-slate-900" aria-hidden="true">
			By Email
		</div>
		<!--END:()-->

		<!--START:()-->
		<div class="mt-4 space-y-4">
			<!--START:()-->
			<div class="flex items-start">
				<!--START:()-->
				<div class="flex items-center h-5">
					<input
						id="comments"
						name="comments"
						type="checkbox"
						checked
						class=" bg-red-200 border-dashed border-2 rounded border-teal-300 text-teal-300 ml-1 w-5 h-5 ease-linear transition-all duration-150"
					/>
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="ml-3 text-sm">
					<label for="comments" class="font-medium text-slate-700"
						>Reviews</label
					>
					<p class="text-slate-500">
						Get notified when someones reviews your profile or Resume / CV
					</p>
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->

			<!--START:()-->
			<div class="flex items-start">
				<!--START:()-->
				<div class="flex items-center h-5">
					<input
						id="candidates"
						name="candidates"
						type="checkbox"
						checked
						class=" bg-red-200 border-dashed border-2 rounded border-teal-300 text-teal-300 ml-1 w-5 h-5 ease-linear transition-all duration-150"
					/>
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="ml-3 text-sm">
					<label for="candidates" class="font-medium text-slate-700"
						>Job postings</label
					>
					<p class="text-slate-500">
						Get notified when a recruiter posts a job that matches your
						preferences.
					</p>
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->

			<!--START:()-->
			<div class="flex items-start">
				<!--START:()-->
				<div class="flex items-center h-5">
					<input
						id="offers"
						name="offers"
						type="checkbox"
						checked
						class=" bg-red-200 border-dashed border-2 rounded border-teal-300 text-teal-300 ml-1 w-5 h-5 ease-linear transition-all duration-150"
					/>
				</div>
				<!--END:()-->

				<!--START:()-->
				<div class="ml-3 text-sm">
					<label for="offers" class="font-medium text-slate-700"
						>Offers, Interviews and feedback</label
					>
					<p class="text-slate-500">
						Get notified when a recruiter reaches out and makes an offer.
					</p>
				</div>
				<!--END:()-->
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->
	</fieldset>
	<fieldset>
		<legend class="contents text-base font-medium text-slate-900"
			>Push Notifications</legend
		>
		<p class="text-sm text-slate-500">
			These are delivered via SMS to your mobile phone.
		</p>
		<!--START:()-->
		<div class="mt-4 space-y-4">
			<!--START:()-->
			<div class="flex items-center">
				<input
					id="push-everything"
					name="push-notifications"
					type="radio"
					checked
					class="focus:ring-indigo-500 h-4 w-4 text-teal-300 border-2 border-teal-300 border-dashed ease-linear transition-all duration-150"
				/>
				<label
					for="push-everything"
					class="ml-3 block text-sm font-medium text-slate-700"
				>
					Everything
				</label>
			</div>
			<!--END:()-->

			<!--START:()-->
			<div class="flex items-center">
				<input
					id="push-email"
					name="push-notifications"
					type="radio"
					class="focus:ring-indigo-500 h-4 w-4 text-teal-300 border-2 border-teal-300 border-dashed ease-linear transition-all duration-150"
				/>
				<label
					for="push-email"
					class="ml-3 block text-sm font-medium text-slate-700"
				>
					Same as email
				</label>
			</div>
			<!--END:()-->

			<!--START:()-->
			<div class="flex items-center">
				<input
					id="push-nothing"
					name="push-notifications"
					type="radio"
					class="focus:ring-indigo-500 h-4 w-4 text-teal-300 border-2 border-teal-300 border-dashed ease-linear transition-all duration-150"
				/>
				<label
					for="push-nothing"
					class="ml-3 block text-sm font-medium text-slate-700"
				>
					No push notifications
				</label>
			</div>
			<!--END:()-->
		</div>
		<!--END:()-->
	</fieldset>
</div>
<!--END:()-->
