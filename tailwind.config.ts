import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px", 
        "2xl": "1400px",
        "3xl": "1536px"
      },
    },
    extend: {
      fontFamily: {
       "druk": "var(--font-druk)"
      },
      fontSize: {
       
        'display-01': [
          ' calc(clamp(3.25rem, 6.5vw, 7rem) * .875)', 
          {
            lineHeight: '1', 
            letterSpacing: '-0.02em', 
            fontWeight: '500',
          },
        ],


        'display-02': [
          'calc(clamp(3rem, 5vw, 6rem) * .875)', 
          {
            lineHeight: '1', 
            letterSpacing: '-0.02em', 
            fontWeight: '500',
          },
        ],



        'heading-01': [
          'calc(clamp(3.25rem, 5vw, 4.5rem) * .75)', 
          {
            lineHeight: '1.065', 
            letterSpacing: '-0.02em', 
            fontWeight: '600',
          },
        ],
        'heading-02': [
          'calc(clamp(2.625rem, 0.375vw + 2.55rem, 3rem))', 
          {
            lineHeight: '1.065', 
            letterSpacing: '-0.02em', 
            fontWeight: '600',
          },
        ],
        'heading-03': [
          'calc(clamp(1.75rem, 0.25vw + 1.7rem, 2rem))', 
          {
            lineHeight: 'normal', 
            letterSpacing: '-0.02em', 
            fontWeight: '500',
          },
        ],
        'heading-04': [
          'calc(clamp(1.125rem, 0.125vw + 1.1rem, 1.25rem))', 
          {
            lineHeight: '1.15', 
            letterSpacing: '-0.02em', 
            fontWeight: '400', 
          },
        ],
        'paragraph-01': [
          'calc(clamp(1.125rem, 0.125vw + 1.1rem, 1.25rem))', 
          {
            lineHeight: '1.5', 
            letterSpacing: '-0.02em', 
            fontWeight: '300', 
          },
        ],
        'body-01': [
          'calc(clamp(1rem, 0.188vw + 0.963rem, 1.188rem))', 
          {
            lineHeight: '1.35', 
            letterSpacing: '-0.015em', 
            fontWeight: '300',
          },
        ],

        'body-02': [
          'calc(clamp(0.875rem, 0.125vw + 0.85rem, 1rem))', 
          {
            lineHeight: '1.25', 
            letterSpacing: '-0.015em', 
            fontWeight: '300',
          },
        ],


        'subtitle-01': [
          'calc(clamp(0.875rem, 1vw + 0.85rem, 1rem))', 
          {
            lineHeight: '1.15', 
            letterSpacing: '-0.005em', 
            fontWeight: '400', // Font weight for heading-01
          },
        ],

        'helper-01': [
          'calc(clamp(0.75rem, 0.125vw + 0.725rem, 0.875rem))', 
          {
            lineHeight: '1.15', 
            letterSpacing: '0.05em', 
            fontWeight: '400', // Font weight for heading-01
          },
        ],

        'helper-02': [
          'calc(clamp(0.625rem, 0.125vw + 0.6rem, 0.75rem))', 
          {
            lineHeight: '1.15', 
            letterSpacing: '0.05em', 
            fontWeight: '400', // Font weight for heading-01
          },
        ],

        

      },
      colors: {
        primary: {
          50: '#cdbaf3',
          100: '#b599ee',
          200: '#946be6',
          300: '#7f4ee1',
          400: '#810055',
          500: '#561fc5',
          600: '#43189a',
          700: '#341377',
          800: '#280e5b',
          900: '#1d162b',
          10: '#F9F2F6',
        },
        secondary: {
          50: '#f5b1dc',
          100: '#f18bcb',
          200: '#ea55b3',
          300: '#e635a5',
          400: '#e0028e',
          500: '#cc0281',
          600: '#9f0165',
          700: '#7b014e',
          800: '#5e013c',
          900: '#2b1624',
          10: '#fce6f4',
          20:'#707070',
          30:'#333'
        },
        neutral: {
          'ghost-white': '#faf7ff',
          'white': '#ffffff',
          'light-grey': '#e4e4e4',
          'mid-grey': '#d3d3d3',
          'dark-grey': '#808080',
          'black': '#080708',
          'darkest-grey': '#333333',
        },
        tertiary: {
          400: '#00f8c4',
          10: '#e1f2ef',
        },
      },
      spacing: {
        0: "0",
        1: "4px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
        8: "64px",
        10: "80px",
        12: "96px",
        14: "112px",
        16: "128px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1536px",
      },
      keyframes: {
        "gradient-background-1": {
          "from, 50%, to": {
            opacity: "1",
          },
          "33.333%, 50%": {
            opacity: "0",
          },
        },
        "gradient-foreground-1": {
          "from, 50%, to": {
            opacity: "0",
          },
          "66.667%, 83.333%": {
            opacity: "1",
          },
        },
        "gradient-background-2": {
          "from, 58.333%, 91.667%, to": {
            opacity: "1",
          },
          "66.667%, 83.333%": {
            opacity: "0",
          },
        },
        "gradient-foreground-2": {
          "from, 50%, to": {
            opacity: "0",
          },
          "33.333%, 50%": {
            opacity: "1",
          },
        },
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: "1",
          },
          "66.667%, 83.333%": {
            opacity: "0",
          },
        },
        "gradient-foreground-3": {
          "from, 50%, to": {
            opacity: "0",
          },
          "66.667%, 83.333%": {
            opacity: "1",
          },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "slide-left-infinite": "slide-left 15s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-background-1": "gradient-background-1 8s infinite",
        "gradient-foreground-1": "gradient-foreground-1 8s infinite",
        "gradient-background-2": "gradient-background-2 8s infinite",
        "gradient-foreground-2": "gradient-foreground-2 8s infinite",
        "gradient-background-3": "gradient-background-3 8s infinite",
        "gradient-foreground-3": "gradient-foreground-3 8s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
