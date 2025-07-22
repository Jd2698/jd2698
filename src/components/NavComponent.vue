<script setup>
import { ref, onMounted } from "vue";

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
  <nav class="flex justify-end gap-4 py-4 px-2 max-w-6xl mx-auto">
    <a
      v-for="item in titles"
      :href="`#${item.section}`"
      :class="{ 'text-emerald-500/90': isActive(item.section) }"
      class="text-[#9c9b9b] hover:text-[#d8d8d8]"
      >{{ item.label }}</a
    >
  </nav>
</template>

<style></style>
