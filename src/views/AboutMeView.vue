<script setup>
	import IconEmail from "@/components/icons/IconEmail.vue";
	import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
</script>
<template>
	<main class="w-4/6 p-2 md:w-[600px] mx-auto">

		<div class="grid gap-4 md:grid-cols-3 md:shadow-[0_0_5px_5px_rgba(15,15,15,.3)] rounded-md overflow-hidden">

			<img src="/images/Me.jpg" alt="me" class="m-auto w-40 h-40 rounded-sm md:w-full md:h-full md:rounded-none object-cover">

			<div class="md:col-span-2 p-2">
				<h1 class="text-xs">SOBRE MÍ</h1>
				<h2 class="mt-4 text-lg tracking-widest">¡Hola! me llamo Jamer</h2>
				<p class="mt-2 text-sm leading-loose">
					Vivo en Cali y soy aprendiz del SENA en el tecnólogo de Análisis y Desarrollo de Software del Centro CEAI. Me va bastante bien en el desarrollo de sitios web y el frontend, pero tengo un gran interés en el backend, la parte de la lógica y la creación de servidores.
				</p>
				<p class="mt-2 text-sm leading-loose">
					Disfruto trabajar en equipo y en un ambiente empático, ya que me gusta ayudar a las personas y aprender en el proceso.
				</p>
			</div>
		</div>

		<section class="mt-7 flex flex-col items-start gap-3">
			<a href="mailto:j.delgado2698@gmail.com" target="_blank" class="flex gap-3 items-center">
				<IconEmail class="h-5 text-zinc-200 fill-current" />
				<span>j.delgado2698@gmail.com</span>
			</a>

			<a href="https://wa.link/geywjs" target="_blank" class="flex gap-3 items-center">
				<IconWhatsapp class="h-5 text-zinc-200 fill-current" />
				<span>3186460704</span>
			</a>
		</section>
	</main>
</template>
