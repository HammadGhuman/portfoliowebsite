/** @type {import('tailwindcss').Config} */
module.exports = {
  // daisyui: {
  //   themes: ["light"],
  // },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#DF5858',
        secondary:'#4400a6',
        dark:'#000000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern-mobile': "url('/HeroMobile.svg')",
          'logo' : "url('/logo.png')",
          'logoMob' : "url('/logoMob.png')",
          'hero-pattern-desktop': "url('/new.svg')",
          'contactUsLeft': "url('/contactUsMob.svg')",
          'close' : "url('/Close.png')",
          'hamburger' : "url('/hamburger.png')",
          'wave' : "url('/wave.svg')",
          'wave2' : "url('/waveb.svg')",
          'recommendation' : "url('/recommendation.svg')"
        },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}
