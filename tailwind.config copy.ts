import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
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
      fontSize: {
        'display': ['52px', '64px'],
        'heading': ['28px', '36px'],
        'paragraph': ['16px', '24px'],
        'body': ['16px', '24px'],
        'label': ['14px', '18px'],
        'helper-text': ['12px', '16px'], 
      },
      letterSpacing: {
       
      },
      gradientColorStops: {
        "gradient-1-start": "#007CF0",
        "gradient-1-end": "#00DFD8",
        "gradient-2-start": "#7928CA",
        "gradient-2-end": "#FF0080",
        "gradient-3-start": "#FF4D4D",
        "gradient-3-end": "#F9CB28",
      },
      colors: {
        primary: {
          50: '#cdbaf3',
          100: '#b599ee',
          200: '#946be6',
          300: '#7f4ee1',
          400: '#5f22d9',
          500: '#561fc5',
          600: '#43189a',
          700: '#341377',
          800: '#280e5b',
          900: '#1d162b',
          10: '#efe9fb',
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
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-foreground-1": {
          "from, 16.667%, to": {
            opacity: "1",
          },
          "33.333%, 83.333%": {
            opacity: "0",
          },
        },
        "gradient-background-1": {
          "from, 16.667%, to": {
            opacity: "0",
          },
          "25%, 91.667%": {
            opacity: "1",
          },
        },
        "gradient-foreground-2": {
          "from, to": {
            opacity: "0",
          },
          "33.333%, 50%": {
            opacity: "1",
          },
          "16.667%, 66.667%": {
            opacity: "0",
          },
        },
        "gradient-background-2": {
          "from, to": {
            opacity: "1",
          },
          "33.333%, 50%": {
            opacity: "0",
          },
          "25%, 58.333%": {
            opacity: "1",
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
        "gradient-background-3": {
          "from, 58.333%, 91.667%, to": {
            opacity: "1",
          },
          "66.667%, 83.333%": {
            opacity: "0",
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


