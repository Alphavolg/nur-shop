import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f9d5e5',
        rose: '#c84f86',
        plum: '#3e1c2c',
        gold: '#f4d1dc',
        cream: '#fffafc',
        soft: '#fdf2f7'
      },
      boxShadow: {
        soft: '0 20px 50px rgba(200, 79, 134, 0.12)',
      }
    },
  },
  plugins: [],
};

export default config;
