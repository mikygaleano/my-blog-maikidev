/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		keyframes: {
			moveParticles: {
				'0%': {opacity: '0.02'},
				'50%': {opacity: '0.05'},
				'100%': {opacity: '1'}
			},
			backgroundGradientKeyframes: {
				'0%': { color: '#ffff00' },
				'50%': { color: '#7f00b2' },
				'100%': { color: '#ffff81' },
			  },		
		},
		animation: {
			moveParticles: 'moveParticles 1s linear infinite1s linear infinite',
			backgroundGradientAnimation: 'backgroundGradientKeyframes 3s linear infinite',
		},
		fontFamily: {
			'BlackStormBlack': ['MyFont', 'sans-serif'],
		  }
	  },
	},
	plugins: [],
	fontFamily: {
		'MyFont': ['public/fonts/ZilapBlackStormBlack-6wYD.ttf'], // Reemplaza con la URL de tu fuente
	  }
  };