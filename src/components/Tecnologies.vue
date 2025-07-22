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
  <section id="tecnologies" class="flex flex-wrap gap-3">
    <h2 class="w-full text-2xl font-semibold text-emerald-500/90">
      Tecnologías
    </h2>

    <span
      v-for="tecnology in tecnologies"
      class="text-sm py-2 px-3 rounded-md cursor-default bg-zinc-600 transition-colors hover:bg-zinc-600/70 focus:bg-zinc-600/70 outline-none"
    >
      {{ tecnology }}
    </span>
  </section>
</template>
