/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        brand: {
          light: '#e6f4ea',
          DEFAULT: '#22c55e', // Green for the transition from green to white
          dark: '#166534',
        }
      }
    },
	},
	plugins: [],
}
