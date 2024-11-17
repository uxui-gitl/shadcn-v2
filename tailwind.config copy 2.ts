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

       

    
        'heading-01': 'calc(clamp(3.25rem, 5vw, 4.5rem) * .75))',

       
        
      },
      letterSpacing: {
        'display-01': '-0.015em',
        'heading-01': '-0.012em',
        'paragraph-01': '-0.005em',
        'body-01': '-0.005em',
        'label-01': '0em',
        'helper-text-01': '0em',
        'tabs-heading-01': '-0.012em',
        'sm-display-01': '-0.015em',
        'sm-heading-01': '-0.012em',
        'sm-paragraph-01': '-0.005em',
        'sm-body-01': '-0.005em',
        'sm-label-01': '0em',
        'sm-helper-text-01': '0em',
        'md-display-01': '-0.015em',
        'md-heading-01': '-0.012em',
        'md-paragraph-01': '-0.005em',
        'md-body-01': '-0.005em',
        'md-label-01': '0em',
        'md-helper-text-01': '0em',
        'lg-display-01': '-0.015em',
        'lg-heading-01': '-0.012em',
        'lg-paragraph-01': '-0.005em',
        'lg-body-01': '-0.005em',
        'lg-label-01': '0em',
        'lg-helper-text-01': '0em',
        'xl-display-01': '-0.015em',
        'xl-heading-01': '-0.012em',
        'xl-paragraph-01': '-0.005em',
        'xl-body-01': '-0.005em',
        'xl-label-01': '0em',
        'xl-helper-text-01': '0em',
        '2xl-display-01': '-0.015em',
        '2xl-heading-01': '-0.012em',
        '2xl-paragraph-01': '-0.005em',
        '2xl-body-01': '-0.005em',
        '2xl-label-01': '0em',
        '2xl-helper-text-01': '0em',
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
      lineHeight: {
        'display-01': '1',
        'heading-01': '1.2',
        'heading-02': '1.35',
        'subtitle-01': '1.5',
        'paragraph-01': '1.25',
        'body-01': '1.6',
        'label-01': '1.4',
        'helper-text-01': '1.3',
        'tabs-heading-01': '1.2',
        'sm-display-01': '1',
        'sm-heading-01': '1.5',
        'sm-paragraph-01': '1.6',
        'sm-body-01': '1.6',
        'sm-label-01': '1.4',
        'sm-helper-text-01': '1.3',
        'md-display-01': '1',
        'md-heading-01': '1.5',
        'md-paragraph-01': '1.6',
        'md-body-01': '1.6',
        'md-label-01': '1.4',
        'md-helper-text-01': '1.3',
        'lg-display-01': '1',
        'lg-heading-01': '1.5',
        'lg-paragraph-01': '1.6',
        'lg-body-01': '1.6',
        'lg-label-01': '1.4',
        'lg-helper-text-01': '1.3',
        'xl-display-01': '1',
        'xl-heading-01': '1.5',
        'xl-paragraph-01': '1.6',
        'xl-body-01': '1.6',
        'xl-label-01': '1.4',
        'xl-helper-text-01': '1.3',
        '2xl-display-01': '1',
        '2xl-heading-01': '1.5',
        '2xl-paragraph-01': '1.6',
        '2xl-body-01': '1.6',
        '2xl-label-01': '1.4',
        '2xl-helper-text-01': '1.3',
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
