<script setup>
	import card from "../components/card.vue";

	import IconJs from "../components/icons/IconJs.vue";
	import IconJava from "../components/icons/IconJava.vue";
	import IconPHP from "../components/icons/IconPHP.vue";
	import IconTailwind from "../components/icons/IconTailwind.vue";
	import IconLaravel from "../components/icons/IconLaravel.vue";
	import IconNestJS from "../components/icons/IconNestJS.vue";
	import IconGitHub from "../components/icons/IconGitHub.vue";
	import IconVue from "../components/icons/IconVue.vue";
	import IconAngular from "../components/icons/IconAngular.vue";
	import IconMySql from "../components/icons/IconMySql.vue";
	import IconTypeScript from "../components/icons/IconTs.vue";

	const iconStyles = "fill-current h-24 sm:h-28 rounded-xl ";
</script>

<template>
	<main class="max-w-6xl mx-auto px-6 pb-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center">

		<card>
			<template #title>Programming Language</template>
			<template #tool>JavaScript</template>
			<template #icon>
				<IconJs :class="iconStyles  + 'text-[#f7df1e]'" />
			</template>
		</card>

		<card>
			<template #title>Programming Language</template>
			<template #tool>TypeScript</template>
			<template #icon>
				<IconTypeScript :class="iconStyles  + 'text-[#3178C6]'" />
			</template>
		</card>

		<!-- <card>
			<template #title>Programming Language</template>
			<template #tool>Java</template>
			<template #icon>
				<IconJava :class="iconStyles" />
			</template>
		</card> -->

		<!-- <card>
			<template #title>Programming Language</template>
			<template #tool>PHP</template>
			<template #icon>
				<IconPHP :class="iconStyles + 'text-[#777BB4]'" />
			</template>
		</card> -->

		<card>
			<template #title>Node.js Backend Framework</template>
			<template #tool>NestJS</template>
			<template #icon>
				<IconNestJS :class="iconStyles  + 'text-[#E0234E]'" />
			</template>
		</card>
		
		<card>
			<template #title>PHP Backend Framework</template>
			<template #tool>Laravel</template>
			<template #icon>
				<IconLaravel :class="iconStyles  + 'text-[#f55247]'" />
			</template>
		</card>


		<card>
			<template #title>JavaScript Frontend Framework</template>
			<template #tool>Vue.js</template>
			<template #icon>
				<IconVue :class="iconStyles + 'text-[#42b883]'" />
			</template>
		</card>

		<card>
			<template #title>TypeScript Frontend Framework</template>
			<template #tool>Angular</template>
			<template #icon>
				<IconAngular :class="iconStyles + 'text-[#E52030]'" />
			</template>
		</card>

		<card>
			<template #title>CSS Framework</template>
			<template #tool>Tailwindcss</template>
			<template #icon>
				<IconTailwind :class="iconStyles + 'text-[#38BDF8]'" />
			</template>
		</card>

		<card>
			<template #title>SQL Database</template>
			<template #tool>MySQL</template>
			<template #icon>
				<IconMySql :class="iconStyles  + 'text-[#00758f]'" />
			</template>
		</card>

		<card>
			<template #title>Version Control System</template>
			<template #tool>Git - GitHub</template>
			<template #icon>
				<IconGitHub :class="iconStyles" />
			</template>
		</card>

	</main>
</template>
