/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f7f2',
          100: '#ccefe4',
          200: '#99dfc9',
          300: '#66cfae',
          400: '#33bf93',
          500: '#00af78', // Main brand color - adjusted to match logo
          600: '#008c60',
          700: '#006948',
          800: '#004630',
          900: '#002318',
          950: '#00110c',
        },
        secondary: {
          50: '#f0f7fa',
          100: '#e1eff5',
          200: '#c3dfeb',
          300: '#a5cfe1',
          400: '#87bfd7',
          500: '#69afcd', // Complementary blue
          600: '#548ca4',
          700: '#3f697b',
          800: '#2a4652',
          900: '#152329',
          950: '#0a1114',
        },
        accent: {
          50: '#fdf2f2',
          100: '#fbe5e5',
          200: '#f7cccc',
          300: '#f3b2b2',
          400: '#ef9999',
          500: '#eb7f7f', // Softer red accent
          600: '#bc6666',
          700: '#8d4c4c',
          800: '#5e3333',
          900: '#2f1919',
          950: '#170d0d',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        light: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.600)',
        'neon-lg': '0 0 10px theme(colors.primary.400), 0 0 30px theme(colors.primary.600)',
        'neon-accent': '0 0 5px theme(colors.accent.400), 0 0 20px theme(colors.accent.600)',
      },
    },
  },
  plugins: [],
};