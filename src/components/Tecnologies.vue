<script setup>
import IconButton from "./IconButton.vue";
import IconAngular from "./icons/IconAngular.vue";
import IconJava from "./icons/IconJava.vue";
import IconJs from "./icons/IconJs.vue";
import IconLaravel from "./icons/IconLaravel.vue";
import IconMySql from "./icons/IconMySql.vue";
import IconNestJS from "./icons/IconNestJS.vue";
import IconPHP from "./icons/IconPHP.vue";
import IconTailwind from "./icons/IconTailwind.vue";
import IconTs from "./icons/IconTs.vue";
import IconDocker from "./icons/IconDocker.vue";
import IconPostgres from "./icons/IconPostgres.vue";
import IconVue from "./icons/IconVue.vue";
import IconReact from "./icons/IconReact.vue";
import IconHTML from "./icons/IconHTML.vue";
import IconNode from "./icons/IconNode.vue";
import IconCSS from "./icons/IconCSS.vue";

const tecnologies = {
  frontend: [
    { title: "HTML", icon: IconHTML },
    { title: "CSS", icon: IconCSS },
    { title: "JavaScript", icon: IconJs },
    { title: "TypeScript", icon: IconTs },
    { title: "TailwindCSS", icon: IconTailwind },
    { title: "Angular", icon: IconAngular },
    { title: "React", icon: IconReact },
    { title: "Vue.js", icon: IconVue },
  ],
  backend: [
    { title: "Java", icon: IconJava },
    { title: "PHP", icon: IconPHP },
    { title: "Node.js", icon: IconNode },
    { title: "NestJS", icon: IconNestJS },
    { title: "Laravel", icon: IconLaravel },
    { title: "MySQL", icon: IconMySql },
    { title: "PostgreSQL", icon: IconPostgres },
    { title: "Docker", icon: IconDocker },
  ],
};
</script>

<template>
  <section
    id="tecnologies"
    class="opacity-0 space-y-3 text-zinc-800 dark:text-white"
  >
    <h2 class="w-full text-2xl font-semibold text-emerald-500/90">
      Tecnologías
    </h2>

    <div class="flex justify-around">
      <div class="w-2/5 flex flex-wrap gap-3 justify-center">
        <h3 class="w-full font-bold text-center tracking-wide">Frontend</h3>

        <IconButton
          v-for="(item, index) in tecnologies.frontend"
          :key="item.title + index"
          :text="item.title"
        >
          <component :is="item.icon" class="w-4" />
        </IconButton>
      </div>

      <div class="w-2/5 flex flex-wrap gap-3 justify-center">
        <h3 class="w-full font-bold text-center tracking-wide">Backend</h3>

        <IconButton
          v-for="(item, index) in tecnologies.backend"
          :key="item.title + index"
          :text="item.title"
        >
          <component :is="item.icon" class="w-4" />
        </IconButton>
      </div>
    </div>
  </section>
</template>
