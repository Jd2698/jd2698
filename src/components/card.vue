<template>
	<div class="mx-auto p-5 w-4/6 sm:w-full shadow-[0_0_5px_5px_rgba(15,15,15,.3)] space-y-4 rounded  overflow-hidden">
		<h2 class="text-sm">
			<slot name="title"></slot>
		</h2>
		<div class="flex flex-col items-center rounded-xl overflow-hidden">
			<h2 class="p-3">
				<slot name="tool"></slot>
			</h2>
			<div class="">
				<slot name="icon"></slot>
			</div>
		</div>
	</div>
</template>