<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="text-sm py-2 px-3 flex gap-2 rounded-xl cursor-default outline-none transition-colors bg-zinc-200/90 hover:bg-zinc-300/70 focus:bg-zinc-400/70 dark:bg-zinc-700/60 dark:hover:bg-zinc-700/25 dark:focus:bg-zinc-600/70"
  >
    <slot></slot>
    <span class="font-semibold">{{ text }}</span>
  </button>
</template>
