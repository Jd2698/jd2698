<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps(["project"]);

const config = {
  height: 200,
  itemsToShow: 1,
  gap: 5,
  autoplay: Math.random() * (5000 - 4000) + 4000, // entre 4000 y 5000
  wrapAround: true, // infinito
  pauseAutoplayOnHover: true,
};

</script>

<template>
  <div class="sm:space-y-4">
    <h2 v-if="project.title">
      {{ project.title }}
    </h2>

    <Carousel class="max-w-2xl mx-auto z-0" v-bind="config"  v-bind:key="project.title">
        <Slide v-for="image in project.pictures" :key="image.alt">
          <img :src="image.src" :alt="image.alt" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
  </div>
</template>

<style>
  .carousel {
    @apply h-[200px] sm:h-[300px] md:h-[400px];
  }
</style>