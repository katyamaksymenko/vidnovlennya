/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    top: {
      '-10p': '30%',
    },
    colors: {
      greyText: {
        50: '#D3D3D3'
      },
      mainBgBlack: '#101010',
      textBlack:'#ffffff',
      mainBgWhite: '#E3EDF6',
      textWhite: '#101010',
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
    sans: [
      'e-Ukraine',
      'sans-serif'
    ],
    'e-Ukraine Head': [
      'e-Ukraine Head',
      'sans-serif'
    ]
  },
  screens: {
    'lg-custom': '1240px',
    'xl-custom': '1440px',
    'xll-custom': '1380px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    'sm-custom': '375px'
  },
};
