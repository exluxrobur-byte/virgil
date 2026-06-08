import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        blue: '#0434E5',
        white: '#FFFFFF',
        black: '#111111',
        muted: '#555555',
        dim: '#E5E5E5',
        card: '#F7F7F7',
      },
      fontFamily: {
        sans: ['var(--font-syncopate)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display':  ['clamp(56px, 8vw, 110px)', { lineHeight: '1.0', fontWeight: '900', letterSpacing: '-0.025em' }],
        'headline': ['clamp(28px, 4vw, 52px)',  { lineHeight: '1.05', fontWeight: '800' }],
        'label':    ['10px',  { lineHeight: '1', fontWeight: '700', letterSpacing: '0.20em' }],
        'body':     ['15px',  { lineHeight: '1.65', fontWeight: '400' }],
        'mono':     ['11px',  { letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
};
export default config;
