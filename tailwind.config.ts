import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#9acd32',
        background: '#f1f5f9',
        white: '#ffffff',
        blue: '#1e90ff',
        mainColorOpacity30: '#9acd324d',
      },
    },
  },
  plugins: [],
};
export default config;
