/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		keyframes: {
			moveUp: {
				'0%': {bottom: '0', opacity: '0'},
				'10%': {bottom: '100px', opacity: '1'},
				'50%': {bottom: '200px'},
				'98%': {bottom: '520px', opacity: '0'},
				'100%': {bottom: '+100%', opacity: '0'}
			}
		},
		animation: {
			moveUp: 'moveUp 1s linear infinite'
		}
	  },
	},
	plugins: [],
  };