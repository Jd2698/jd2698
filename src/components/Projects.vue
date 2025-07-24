<script setup>
import Carousel from "@/components/Carousel.vue";

const appointmentsPictures = [
  { src: "images/appointments/1.welcome.webp", alt: "Image 1" },
  { src: "images/appointments/2.login.webp", alt: "Image 2" },
  { src: "images/appointments/3.dashboard.webp", alt: "Image 3" },
  { src: "images/appointments/4.appointments.webp", alt: "Image 4" },
  {
    src: "images/appointments/5.appointments-info.webp",
    alt: "Image 5",
  },
  {
    src: "images/appointments/6.appointment-form.webp",
    alt: "Image 6",
  },
  { src: "images/appointments/8.user-form.webp", alt: "Image 7" },
  {
    src: "images/appointments/12.specialty-form.webp",
    alt: "Image 8",
  },
  { src: "images/appointments/13.client.webp", alt: "Image 9" },
];

const ecommercePictures = [
  { src: "images/ecommerce/home.webp", alt: "Image 1" },
  { src: "images/ecommerce/cart.webp", alt: "Image 2" },
  { src: "images/ecommerce/product.webp", alt: "Image 3" },
  { src: "images/ecommerce/user-modal.webp", alt: "Image 4" },
];

const javaEcommercePictures = [
  { src: "images/ecommerce-java/1.login.webp", alt: "Image 1" },
  { src: "images/ecommerce-java/2.general.webp", alt: "Image 2" },
  { src: "images/ecommerce-java/3.profile.webp", alt: "Image 3" },
  { src: "images/ecommerce-java/4.users.webp", alt: "Image 4" },
  {
    src: "images/ecommerce-java/6.users_form2.webp",
    alt: "Image 6",
  },
  { src: "images/ecommerce-java/7.products.webp", alt: "Image 7" },
  { src: "images/ecommerce-java/8.tables.webp", alt: "Image 8" },
  { src: "images/ecommerce-java/9.orders.webp", alt: "Image 9" },
  {
    src: "images/ecommerce-java/10.orders_history.webp",
    alt: "Image 10",
  },
];

const projects = [
  {
    title:
      "Gestión de citas médicas desarrollado con Laravel 10 e Inertia.js junto con Vue 3",
    pictures: appointmentsPictures,
  },
  {
    title: "Ecommerce básico desarrollado con Laravel 9 y Vue 3",
    pictures: ecommercePictures,
  },
  {
    title:
      "Gestión de un ecommerce desarrollado con Java 17 como parte de un proyecto del SENA",
    pictures: javaEcommercePictures,
  },
];
</script>

<template>
  <section id="projects" class="text-black dark:text-white">
    <div class="flex gap-2 items-center mb-2 text-emerald-500/90">
      <svg
        class="size-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
        />
      </svg>

      <h2 class="text-2xl font-semibold">Proyectos</h2>
    </div>

    <div class="space-y-14 mb-4">
      <carousel v-for="item in projects" :pictures="item.pictures">
        <template #title>
          {{ item.title }}
        </template>
      </carousel>
    </div>
  </section>
</template>
