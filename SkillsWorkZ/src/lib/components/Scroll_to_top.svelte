<script>
	export let buttonVisibleOnPX = 100;
	let hidden = true;

	const goStart = () => {
		document.body.scrollIntoView();
	};

	const scrollElement = () => {
		return document.documentElement || document.body;
	};

	const handleOnScroll = () => {
		if (scrollElement().scrollTop > buttonVisibleOnPX) {
			hidden = false;
		} else {
			hidden = true;
		}
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="text-slate-50 bg-slate-900 border-2 border-teal-400 border-dashed focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:text-indigo-900 focus:bg-indigo-50 hover:border-2 hover:border-dashed hover:border-slate-900 hover:text-slate-900 hover:bg-teal-400 px-3 py-2 rounded-md text-sm font-medium back_to_start"
	on:click={goStart}
	class:hidden
>
	Back To Top
</div>

<style>
	.back_to_start {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		padding: 5px;
		font-weight: 700;
		border-radius: 6px;
	}

	.back_to_start.hidden {
		opacity: 0;
		visibility: hidden;
	}
</style>