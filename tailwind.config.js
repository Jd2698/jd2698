/** @type {import('tailwindcss').Config} */
import plugin from 'flowbite/plugin'

export default {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
		// './node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: [plugin]
}
