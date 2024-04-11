/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#38b6ff",
				secondary: "#222"
			},
			borderWidth: {
				3: '3px'
			},
			width: {
				68: '17rem'
			}
		},
	},
	plugins: [],
}
