<script setup>
import IconEmail from "@/components/icons/IconEmail.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import IconGitHub from "./icons/IconGitHub.vue";

const titles = [
  {
    ulr: "mailto:j.delgado2698@gmail.com",
    icon: "email",
  },
  {
    ulr: "https://github.com/Jd2698",
    label: "Jd2698",
    icon: "git",
  },
  {
    ulr: "https://wa.link/geywjs",
    label: "3186460704",
    icon: "whatsapp",
  },
];
</script>
<template>
  <section id="aboutMe" class="text-black dark:text-white">
    <img
      src="../../public/images/me.png"
      class="size-44 border-2 object-contain rounded-full transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,.2)]"
      alt="me"
    />

    <div>
      <h2 class="mt-4 text-lg tracking-widest">¡Hola! Soy Jamer</h2>
      <p class="mt-2 text-sm leading-6">
        Soy tecnólogo en Análisis y Desarrollo de Software, apasionado por crear
        aplicaciones web que sean tanto funcionales como escalables. Me encanta
        resolver problemas y aprender constantemente en el camino. He trabajado
        en varios proyectos, tanto personales como profesionales, donde he
        aplicado buenas prácticas, pruebas unitarias y manejo de bases de datos.
      </p>
      <p class="mt-2 text-sm leading-6">
        Disfruto mucho trabajar en equipo y colaborar en ambientes donde siempre
        hay algo nuevo por aprender.
      </p>
    </div>

    <section class="mt-7 flex flex-wrap gap-3">
      <a
        v-for="item in titles"
        :href="item.ulr"
        target="_blank"
        class="py-2 px-3 flex items-center gap-2 rounded-xl transition-colors outline-none bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-700/70 dark:focus:bg-zinc-700/70 hover:bg-zinc-400/70 focus:bg-zinc-400/70"
      >
        <IconGitHub v-if="item.icon == 'git'" class="h-5 fill-current" />
        <IconEmail v-if="item.icon == 'email'" class="h-5 fill-current" />
        <IconWhatsapp v-if="item.icon == 'whatsapp'" class="h-5 fill-current" />

        <span v-if="item.label" class="text-xs">{{ item.label }}</span>
      </a>
    </section>
  </section>
</template>
