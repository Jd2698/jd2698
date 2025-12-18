<script setup>
import { FwbButton, FwbTooltip } from "flowbite-vue";
import IconNestJS from "./icons/IconNestJS.vue";
import IconAngular from "./icons/IconAngular.vue";
import IconPostgres from "./icons/IconPostgres.vue";
import IconPrimeNG from "./icons/IconPrimeNG.vue";
import IconTypeORM from "./icons/IconTypeORM.vue";
import IconRedux from "./icons/IconRedux.vue";

import IconLaravel from "./icons/IconLaravel.vue";
import IconMySQL from "./icons/IconMySql.vue";
import IconVue from "./icons/IconVue.vue";
import IconFirebase from "./icons/IconFirebase.vue";

const experiences = [
  {
    header: "Desarrollador Backend · Panthera Hub (sep. 2025 – dic. 2025)",
    body: "Participé como desarrollador backend en una aplicación en producción, realizando refactorización de módulos, desarrollo de nuevos servicios y gestión de migraciones de base de datos. Además, apoyé la corrección de bugs en frontend e integré notificaciones push mediante Firebase para la aplicación móvil, contribuyendo a la mejora continua del sistema.",
    tecnologies: [
      { title: "Laravel", icon: IconLaravel },
      { title: "MySQL", icon: IconMySQL },
      { title: "Firebase", icon: IconFirebase },
      { title: "Vue", icon: IconVue },
    ],
  },
  {
    header: "Desarrollador Full Stack · DreamCode (oct. 2024 – abr. 2025)",
    title: "Plataforma Web de Gestión de Horas y Facturación",
    body: "Durante mis prácticas en DreamCode, participé en el desarrollo de una plataforma web destinada a registrar las horas trabajadas por los ingenieros en diferentes proyectos, lo que facilitaba el cálculo y la facturación a los clientes. Trabajé en la creación de módulos tanto de backend como de frontend, implementé migraciones, integré APIs y realicé pruebas para garantizar la calidad del código. Además, colaboré estrechamente con el equipo, aplicando metodologías ágiles (SCRUM) para optimizar las entregas y mejorar continuamente el proyecto.",
    tecnologies: [
      { title: "NestJS", icon: IconNestJS },
      { title: "TypeORM", icon: IconTypeORM },
      { title: "Angular", icon: IconAngular },
      { title: "PrimeNG", icon: IconPrimeNG },
      { title: "Redux", icon: IconRedux },
      { title: "PostgreSQL", icon: IconPostgres },
    ],
  },
];
</script>

<template>
  <section id="experiences">
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
        <h3 v-if="item.title" class="text-lg font-semibold text-zinc-800 dark:text-gray-200">
          {{ item.title }}
        </h3>
        <p
          class="my-4 text-sm font-normal leading-6 text-zinc-900 dark:text-gray-300"
        >
          {{ item.body }}
        </p>

        <div class="flex flex-wrap items-center gap-2">
          <span class="dark:text-gray-200">Tecnologías: </span>
          <fwb-tooltip v-for="tecnology of item.tecnologies" v-bind:key="tecnology.title">
            <template #trigger>
              <fwb-button>
                <component :is="tecnology.icon" class="w-4" />
              </fwb-button>
            </template>
            <template #content>
              <span class="text-xs">{{ tecnology.title }}</span>
            </template>
          </fwb-tooltip>
        </div>
      </li>
    </ol>
  </section>
</template>

<style>
.fwb-tooltip button {
  @apply size-10 p-0 bg-zinc-200/50 rounded-full flex justify-center items-center;
  @apply dark:bg-zinc-700/50;
}

.fwb-tooltip button:hover {
  @apply bg-zinc-300;
  @apply dark:bg-zinc-800;
}
</style>
