/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFAC12',
        secondary: '#979797',
        accent: '#E4E4E4',
        bodyBg: '#F5F5F5',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        tiny: '10px',
        base: '15px',
        md: '17px',
        '2md': '20px',
        '3md': '24px',
        '4md': '42px',
        lg: '50px',
        '2lg': '80px',
      },
      spacing: {
        30: '30px',
        60: '60px',
        80: '80px',
        150: '150px',
        177: '177px',
      },
      height: {
        10: '10px',
        34: '34px',
        250: '250px',
        266: '266px',
        350: '350px',
        450: '450px',
        557: '557px',
      },
      width: {
        106: '106px',
        169: '169px',
        267: '267px',
        336: '336px',
        604: '604px',
      },
      maxWidth: {
        336: '336px',
      },
    },
  },
  plugins: [],
};
