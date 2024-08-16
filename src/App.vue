<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import IconGitHub from "./components/icons/IconGitHub.vue";
</script>

<template>
	<header class="mb-6 w-full h-14 fixed z-10 bg-zinc-800">
		<nav class="flex justify-end gap-4 py-4 px-2 max-w-6xl mx-auto">
			<a href="https://github.com/Jd2698" target="_blank">
				<IconGitHub class=" h-7 text-white fill-current" />
			</a>
			<RouterLink to="/">Sobre mí</RouterLink>
			<RouterLink to="/skills">Habilidades</RouterLink>
			<RouterLink to="/porfolio">Porfolio</RouterLink>
		</nav>
	</header>

	<RouterView class="pt-20" />
</template>

<style >
nav a {
	color: #9c9b9b;
}
nav a.router-link-exact-active {
	color: #d8d8d8;
}
</style>