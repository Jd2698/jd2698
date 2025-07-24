<script setup>
import { FwbCarousel } from "flowbite-vue";
defineProps(["pictures"]);
</script>
<template>
  <div class="space-y-4">
    <h2>
      <slot name="title"></slot>
    </h2>
    <fwb-carousel
      no-indicators
      :pictures="pictures"
      slide
      class="max-w-2xl mx-auto z-0"
    />
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

button span {
  @apply bg-emerald-700/60 !important;
}

button span svg {
  @apply text-white !important;
}
</style>
