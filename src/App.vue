<script setup>
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Tecnologies from "./components/Tecnologies.vue";
import AboutMe from "./components/AboutMe.vue";
import NavComponent from "./components/NavComponent.vue";
import { onMounted } from "vue";

onMounted(() => {
  const elements = document.querySelectorAll("#tecnologies");
  elements.forEach((element) => observer.observe(element));
});

const options = { threshold: 0.1 }; // 10% del elemento

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("remove-opacity");
    }
  });
}, options);
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
<style>
.remove-opacity {
  animation: 1.1s forwards animation-translate;
}

@keyframes animation-translate {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
