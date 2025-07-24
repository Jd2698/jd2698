<script setup>
const tecnologies = [
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "Laravel",
  "NestJS",
  "Angular",
  "React",
  "Vue",
  "MySql",
  "Postgres",
  "MongoDB",
  "Docker",
  "Git - GitHub",
];
</script>

<template>
  <section
    id="tecnologies"
    class="flex flex-wrap gap-3 text-black dark:text-white"
  >
    <h2 class="w-full text-2xl font-semibold text-emerald-500/90">
      Tecnologías
    </h2>

    <span
      v-for="tecnology in tecnologies"
      class="text-sm py-2 px-3 rounded-md cursor-default outline-none transition-colors bg-zinc-300 hover:bg-zinc-400/70 focus:bg-zinc-400/70 dark:bg-zinc-600 dark:hover:bg-zinc-600/70 dark:focus:bg-zinc-600/70"
    >
      {{ tecnology }}
    </span>
  </section>
</template>
