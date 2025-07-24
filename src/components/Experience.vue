<script setup>
const experiences = [
  {
    header: "Full Stack Developer, DreamCode oct.2024 - apr.2025",
    title: "Plataforma Web de Gestión de Horas y Facturación",
    body: " Durante mis prácticas en DreamCode, participé en el desarrollo de una plataforma web destinada a registrar las horas trabajadas por los ingenieros en diferentes proyectos, lo que facilitaba el cálculo y la facturación a los clientes. Trabajé en la creación de módulos tanto de backend como de frontend, implementé migraciones, integré APIs y realicé pruebas para garantizar la calidad del código. Además, colaboré estrechamente con el equipo, aplicando metodologías ágiles (SCRUM) para optimizar las entregas y mejorar continuamente el proyecto.",
    tecnologies: [
      "NestJS",
      "TypeORM",
      "Angular",
      "PrimeNG",
      "Redux",
      "Postgres",
    ],
  },
];
</script>

<template>
  <section>
    <div class="flex gap-2 items-center my-2 text-emerald-500/90">
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
          d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
        />
      </svg>

      <h2 class="text-2xl font-semibold">Experiencia</h2>
    </div>

    <ol class="relative m-auto border-s border-zinc-950 dark:border-gray-200">
      <li v-for="(item, index) in experiences" :key="index" class="mb-10 ms-4">
        <div
          class="absolute w-3 h-3 border border-black bg-zinc-800 dark:bg-gray-200 rounded-full mt-1.5 -start-1.5 dark:border-white"
        ></div>
        <time
          class="mb-1 text-sm font-normal leading-none text-zinc-600 dark:text-gray-400"
          >{{ item.header }}</time
        >
        <h3 class="text-lg font-semibold text-zinc-800 dark:text-gray-200">
          {{ item.title }}
        </h3>
        <p
          class="my-4 text-sm font-normal leading-6 text-zinc-900 dark:text-gray-300"
        >
          {{ item.body }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tecnology of item.tecnologies"
            class="text-xs py-2 px-3 rounded-md cursor-default transition-colors outline-none bg-zinc-200 text-black dark:text-white hover:bg-zinc-300 focus:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700/70 dark:focus:bg-zinc-700/70"
          >
            {{ tecnology }}
          </span>
        </div>
      </li>
    </ol>
  </section>
</template>
