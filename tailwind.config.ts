import type { Config } from "tailwindcss";
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
        "geg-headline": ["geg-headline", "sans-serif"],
  
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
            lineHeight: '1.065', 
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
        purple: {
          10:"#F9F2F6",
          50: "#FFDBF3",
          100: "#FFB3E6",
          200: "#FF66CC",
          300: "#FF1AB3",
          400: "#CC0088",
          500: "#810055",
          600: "#660044",
          700: "#4D0033",
          800: "#330022",
          900: "#190011",
         
        },

       grey: {
      10: "#F1F1ED",
      50: "#F5F5F5",
      100: "#E8E8E8",
      200: "#D1D1D1",
      300: "#BABABA",
      400: "#A3A3A3",
      500: "#8F8F8F",
      600: "#707070",
      700: "#616161",
      800: "#4A4A4A",
      900: "#333333",

    },
        neutral: {
          'white': '#FFFFFF',
          'black': '#000000',       },
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
