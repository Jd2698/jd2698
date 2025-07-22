<script setup>
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Tecnologies from "./components/Tecnologies.vue";
import AboutMe from "./components/AboutMe.vue";
import NavComponent from "./components/NavComponent.vue";
</script>

<template>
  <header class="fixed top-0 w-full h-14 z-10 bg-zinc-800">
    <NavComponent />
  </header>

  <main class="px-4 max-w-4xl mt-24 mx-auto flex gap-24 flex-col">
    <AboutMe />
    <Tecnologies />
    <Experience />
    <Projects />
  </main>
</template>

<style>
* {
  font-family: system-ui, monospace, sans-serif;
  font-size: 19px;
}

#tecnologies,
#aboutMe,
#projects {
  scroll-margin-top: 100px;
}
</style>
