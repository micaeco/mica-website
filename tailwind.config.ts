import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#29334D',
          50: '#8A9AC0',
          100: '#7B8DB7',
          200: '#5E74A6',
          300: '#4A5C85',
          400: '#384565',
          500: '#29334D',
          600: '#1A2030',
          700: '#0B0D14',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          DEFAULT: '#00F2DD',
          50: '#B3FFF7',
          100: '#9EFFF5',
          200: '#75FFF1',
          300: '#4CFFED',
          400: '#23FFE9',
          500: '#00F2DD',
          600: '#00BAA9',
          700: '#008276',
          800: '#004A43',
          900: '#001210',
        },
        tertiary: {
          DEFAULT: '#D5FFF3',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#D5FFF3',
          600: '#A2FFE2',
          700: '#6FFFD0',
          800: '#3CFFBF',
          900: '#09FFAD',
        },
        accent: {
          DEFAULT: '#F39E15',
          50: '#FCECD8',
          100: '#FBE3C5',
          200: '#F9D29E',
          300: '#F7C077',
          400: '#F5AF50',
          500: '#F39E15',
          600: '#CB8107',
          700: '#965F05',
          800: '#613D03',
          900: '#2C1C01',
        },
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(gray|red|orange|yellow|green|teal|blue|indigo|purple|pink)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /(bg|text|border)-(primary|secondary|tertiary|accent)/,
    },
  ],
  future: { hoverOnlyWhenSupported: true },
  plugins: [],
};
export default config;