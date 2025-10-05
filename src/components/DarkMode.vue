<script setup>
import { ref, onMounted } from "vue";
import { FwbToggle } from "flowbite-vue";

const toggle = ref(false);

// Función para aplicar el tema
const applyTheme = (isDark) => {
  document.documentElement.classList.toggle("dark", isDark);
  toggle.value = isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Inicializar tema antes de que se monte el componente para evitar parpadeos
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

onMounted(() => {
  if (savedTheme) {
    applyTheme(savedTheme === "dark");
  } else {
    // Detectar preferencia del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(mediaQuery.matches);
  }
});

const onChange = () => {
  applyTheme(toggle.value);
};
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="hidden sm:block text-yellow-500 dark:text-gray-400"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </span>

    <label for="dark-mode-toggle" class="sr-only">Cambiar modo oscuro</label>
    <fwb-toggle
      id="dark-mode-toggle"
      v-model="toggle"
      :onchange="onChange"
      color="teal"
      size="sm"
      class="outline-none w-full"
      aria-label="Cambiar entre modo claro y oscuro"
    />

    <span
      class="hidden sm:block text-gray-400 dark:text-blue-300"
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </span>
  </div>
</template>

<style>
/* para esconder un span que no se usa dentro del toggle */
#dark-mode-toggle span:nth-of-type(2) {
  @apply hidden !important;
}

/* Estilos para el toggle */
nav input + span {
  @apply ring-0 !important;
  @apply bg-zinc-400/50 !important;
}

/* Transición suave para cambios de tema */
html {
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Asegurar que los elementos con colores específicos también tengan transición */
*,
*::before,
*::after {
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
}
</style>
