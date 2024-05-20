import { withTV } from 'tailwind-variants/transformer';

const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-fira)', 'sans-serif'],
        titles: ['var(--font-barlow)', 'sans-serif'],
      },
      fontSize: {
        xl: '1.3125rem',
      },
      colors: {
        primary: '#371172',
        lightblue: '#EFEFF8',
      },
    },
  },
  plugins: [],
});

export default config;
