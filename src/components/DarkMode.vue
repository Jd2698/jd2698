<script setup>
import { ref } from "vue";
import { FwbToggle } from "flowbite-vue";

const toggle = ref(false);

const onChange = () => {
  const body = document.getElementsByTagName("body")[0];

  body.classList.toggle("dark");
  body.classList.toggle("bg-[#202020]");
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
