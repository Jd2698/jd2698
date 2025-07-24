<script setup>
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Tecnologies from "./components/Tecnologies.vue";
import AboutMe from "./components/AboutMe.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<template>
  <NavComponent />

  <main class="px-4 max-w-4xl mt-24 mx-auto flex gap-24 flex-col">
    <AboutMe />
    <Tecnologies />
    <Experience />
    <Projects />
  </main>
</template>
