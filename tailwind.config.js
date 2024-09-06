/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      greyText: {
        50: '#D3D3D3'
      },
      mainBg: '#151515',
      blueBg: '#2969F6',
      greyBg: '#393939',
      footerText: '#666666',
      startYellow: '#E0FC52',
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554'
      }
    }
  },
  fontFamily: {
    body: [
      'e-Ukraine',

    ],
    sans: [
      'e-Ukraine',
      'sans-serif',

    ]
  }
};
