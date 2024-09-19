<script setup>
	import Carousel from "@/components/Carousel.vue";

	const appointmentsPictures = [
		{ src: "images/appointments/1.welcome.png", alt: "Image 1" },
		{ src: "images/appointments/2.login.png", alt: "Image 2" },
		{ src: "images/appointments/3.dashboard.png", alt: "Image 3" },
		{ src: "images/appointments/4.appointments.png", alt: "Image 4" },
		{
			src: "images/appointments/5.appointments-info.png",
			alt: "Image 5",
		},
		{
			src: "images/appointments/6.appointment-form.png",
			alt: "Image 6",
		},
		{ src: "images/appointments/8.user-form.png", alt: "Image 7" },
		{
			src: "images/appointments/12.specialty-form.png",
			alt: "Image 8",
		},
		{ src: "images/appointments/13.client.png", alt: "Image 9" },
	];

	const ecommercePictures = [
		{ src: "images/ecommerce/home.png", alt: "Image 1" },
		{ src: "images/ecommerce/cart.png", alt: "Image 2" },
		{ src: "images/ecommerce/product.png", alt: "Image 3" },
		{ src: "images/ecommerce/user-modal.png", alt: "Image 4" },
	];

	const javaEcommercePictures = [
		{ src: "images/ecommerce-java/1.login.png", alt: "Image 1" },
		{ src: "images/ecommerce-java/2.general.png", alt: "Image 2" },
		{ src: "images/ecommerce-java/3.profile.png", alt: "Image 3" },
		{ src: "images/ecommerce-java/4.users.png", alt: "Image 4" },
		{
			src: "images/ecommerce-java/6.users_form2.png",
			alt: "Image 6",
		},
		{ src: "images/ecommerce-java/7.products.png", alt: "Image 7" },
		{ src: "images/ecommerce-java/8.tables.png", alt: "Image 8" },
		{ src: "images/ecommerce-java/9.orders.png", alt: "Image 9" },
		{
			src: "images/ecommerce-java/10.orders_history.png",
			alt: "Image 10",
		},
	];
</script>

<template>
	<div class="w-5/6 sm:max-w-6xl mx-auto space-y-10 py-4">
		<Carousel :pictures="appointmentsPictures">
			<template #title>
				Gestión de citas médicas desarrollado con Laravel 10 e Inertia.js junto con Vue 3
			</template>
		</Carousel>

		<Carousel :pictures="ecommercePictures">
			<template #title>
				Ecommerce básico desarrollado con Laravel 9 y Vue 3
			</template>
		</Carousel>

		<Carousel :pictures="javaEcommercePictures">
			<template #title>
				Gestión de un ecommerce desarrollado con Java 17 como parte del proyecto del SENA
			</template>
		</Carousel>
	</div>
</template>