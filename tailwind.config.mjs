/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#38b6ff",
				secondary: "#212223",
				tertiary: "#1b71b8"
			},
			borderWidth: {
				3: '3px'
			},
			width: {
				68: '17rem'
			},
			boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
		},
	},
	plugins: [],
}
