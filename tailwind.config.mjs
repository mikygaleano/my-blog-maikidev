/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		keyframes: {
			moveParticles: {
				'0%': {opacity: '0'},
				'10%': {opacity: '1'},	
			}
		},
		animation: {
			moveParticles: 'moveParticles 1s linear infinite'
		}
	  },
	},
	plugins: [],
  };