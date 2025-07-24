<script setup>
import { ref, onMounted } from "vue";
import DarkMode from "./DarkMode.vue";

const activeSection = ref("");

const isActive = (section) => {
  return activeSection.value === section;
};

onMounted(() => {
  observeSections();
});

const observeSections = () => {
  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.4,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.id) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  sections.forEach((section) => observer.observe(section));
};

const titles = [
  {
    section: "aboutMe",
    label: "Sobre mí",
  },
  {
    section: "tecnologies",
    label: "Habilidades",
  },
  {
    section: "projects",
    label: "Proyectos",
  },
];
</script>

<template>
  <nav
    class="flex justify-end gap-4 py-4 px-2 max-w-6xl mx-auto text-zinc-700/80 dark:text-[#9c9b9b]"
  >
    <DarkMode />

    <a
      v-for="item in titles"
      :href="`#${item.section}`"
      :class="{
        'text-emerald-500/90 dark:text-emerald-600/90': isActive(item.section),
      }"
      class="hover:text-emerald-600/90 dark:hover:text-emerald-500/90"
      >{{ item.label }}</a
    >
  </nav>
</template>

<style></style>
