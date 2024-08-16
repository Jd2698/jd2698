import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory('#'),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/AboutMeView.vue')
		},
		{
			path: '/Skills',
			name: 'about',
			component: () => import('../views/SkillsView.vue')
		},
		{
			path: '/porfolio',
			name: 'porfolio',
			component: () => import('../views/PorfolioView.vue')
		}
	]
})

export default router
