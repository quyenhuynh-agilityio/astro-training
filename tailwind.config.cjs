module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFAC12',
        secondary: '#979797',
        accent: '#E4E4E4',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      spacing: {
        tiny: '10px',
        base: '15px',
        md: '17px',
        '2md': '20px',
        '3md': '42px',
        lg: '50px',
        '2lg': '80px',
      },
      height: {
        10: '10px',
      },
    },
  },
  plugins: [],
};
