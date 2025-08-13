<script setup>
import { ref, onMounted } from "vue";
import DarkMode from "./DarkMode.vue";

onMounted(() => {
  observeSections();
});

const activeSection = ref("");

const isActive = (section) => {
  return activeSection.value === section;
};

const observeSections = () => {
  const sections = document.querySelectorAll(
    "#aboutMe, #tecnologies, #projects"
  );
  const options = {
    root: null,
    threshold: 0.4,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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
  <header
    class="fixed top-0 w-full min-h-14 z-10 bg-neutral-200 dark:bg-zinc-800"
  >
    <nav
      class="flex justify-end items-center gap-2 sm:gap-4 py-4 px-2 max-w-6xl mx-auto text-zinc-700/80 dark:text-[#9c9b9b]"
    >
      <DarkMode />

      <a
        v-for="item in titles"
        :href="`#${item.section}`"
        :class="{
          'text-emerald-500/90 dark:text-emerald-600/90': isActive(
            item.section
          ),
        }"
        class="hover:text-emerald-600/90 dark:hover:text-emerald-500/90"
        >{{ item.label }}</a
      >
    </nav>
  </header>
</template>

<style></style>
