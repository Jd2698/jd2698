<script setup>
	import card from "../components/card.vue";

	import iconJs from "../components/icons/IconJs.vue";
	import iconJava from "../components/icons/IconJava.vue";
	import iconTailwind from "../components/icons/IconTailwind.vue";
	import IconLaravel from "../components/icons/IconLaravel.vue";
	import iconGitHub from "../components/icons/IconGitHub.vue";
	import iconVue from "../components/icons/IconVue.vue";
	import IconMySql from "../components/icons/IconMySql.vue";

	const iconStyles = "fill-current h-24 sm:h-28 rounded-xl ";
</script>

<template>
	<main class="max-w-6xl mx-auto px-6 pb-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center">

		<card>
			<template #title>Programming Language</template>
			<template #tool>JavaScript</template>
			<template #icon>
				<iconJs :class="iconStyles  + 'text-[#f7df1e]'" />
			</template>
		</card>

		<card>
			<template #title>Programming Language</template>
			<template #tool>Java</template>
			<template #icon>
				<iconJava :class="iconStyles" />
			</template>
		</card>

		<card>
			<template #title>PHP Framework</template>
			<template #tool>Laravel</template>
			<template #icon>
				<iconLaravel :class="iconStyles  + 'text-[#f55247]'" />
			</template>
		</card>

		<card>
			<template #title>JavaScript Framework</template>
			<template #tool>Vue.js</template>
			<template #icon>
				<iconVue :class="iconStyles + 'text-[#42b883]'" />
			</template>
		</card>

		<card>
			<template #title>CSS Framework</template>
			<template #tool>Tailwindcss</template>
			<template #icon>
				<iconTailwind :class="iconStyles + 'text-[#38BDF8]'" />
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
				<iconGitHub :class="iconStyles" />
			</template>
		</card>

	</main>
</template>
