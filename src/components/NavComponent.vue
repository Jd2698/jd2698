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
  const sections = document.querySelectorAll("#aboutMe, #skill, #projects");
  const options = {
    root: null,
    threshold: [0.3, 0.6],
    rootMargin: "0px 0px -10% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    const visibleEntry = [...entries]
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleEntry) {
      activeSection.value = visibleEntry.target.id;
    }
  }, options);

  sections.forEach((section) => observer.observe(section));
};

const titles = [
  {
    section: "aboutMe",
    label: "Sobre mí",
  },
  {
    section: "skill",
    label: "Experiencia",
  },
  {
    section: "projects",
    label: "Proyectos",
  },
];
</script>

<template>
  <header class="fixed top-0 w-full min-h-14 z-10 bg-neutral-200 dark:bg-zinc-800">
    <nav
      class="flex justify-end items-center gap-2 sm:gap-4 py-4 px-2 max-w-6xl mx-auto text-zinc-700/80 dark:text-[#9c9b9b]">
      <DarkMode />

      <a v-for="item in titles" :key="item.section" :href="`#${item.section}`" :class="{
        'text-emerald-700 dark:text-emerald-500': isActive(
          item.section
        ),
      }" class="font-bold">{{ item.label }}</a>
    </nav>
  </header>
</template>

<style></style>
