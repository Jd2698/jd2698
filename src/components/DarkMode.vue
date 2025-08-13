<script setup>
import { ref } from "vue";
import { FwbToggle } from "flowbite-vue";

const toggle = ref(true);

const onChange = () => {
  const body = document.getElementsByTagName("html")[0];

  body.classList.toggle("dark");
};
</script>

<template>
  <fwb-toggle
    v-model="toggle"
    :onchange="onChange"
    color="teal"
    size="sm"
    class="outline-none"
  />
</template>

<style>
nav input + span {
  @apply ring-0 !important;
  @apply bg-zinc-400/50 !important;
}
</style>
