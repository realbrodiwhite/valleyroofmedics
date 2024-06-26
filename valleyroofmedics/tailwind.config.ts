import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './images/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
    // Add other directories as needed
  ],
  theme: {
    extend: {
      colors: {
        // Customize your color palette here
      },
      spacing: {
        // Customize your spacing scale here
      },
    },
  },
  plugins: [],
};

export default config;
