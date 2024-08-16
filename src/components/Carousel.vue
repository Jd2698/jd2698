<script setup>
	import { FwbCarousel } from "flowbite-vue";
	defineProps(["pictures"]);
</script>
<template>
	<div class="space-y-2">
		<h2 class="max-w-3xl mx-auto">
			<slot name="title"></slot>
		</h2>
		<fwb-carousel no-indicators :pictures="pictures" slide class="max-w-3xl h-[200px] sm:h-[300px] md:h-[400px] mx-auto container-carousel z-0" />
	</div>
</template>
<style>
.container-carousel > div {
	height: 100% !important;
}
.container-carousel > div > div > img {
	height: 100% !important;
	object-fit: contain;
	object-position: top;
}
.container-carousel > button > span {
	background: #222222d7;
}
.container-carousel > button:hover span {
	background: #000000d7 !important;
}
</style>