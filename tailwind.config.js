/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      header01: ["3.5rem", "3.745rem"],
      header02: ["3.125rem", "3.5rem"],
      header03: ["2.5rem", "3rem"],
      header04: ["2rem", "2.5rem"],
      header05: ["1.5rem", "1.98rem"],
      header06: ["1.25rem", "1.725rem"],
      body01: ["1rem, 1.5rem"],
      label01: ["0.75rem", "1.0125rem"],
    },
    extend: {
      colors: {
        lime: {
          DEFAULT: "#DAF14F",
          dark: "#99A939",
        },
        olive: {
          DEFAULT: "#93A814",
          dark: "#A4BD0B",
        },
        BG: {
          primary: {
            DEFAULT: "#F9F5E9",
            dark: "#2C2923",
          },
          secondary: {
            DEFAULT: "#F2ECDB",
            dark: "#413E36",
          },
          tertiary: {
            DEFAULT: "#E3D8C3",
            dark: "#585142",
          },
        },
        Label: {
          primary: {
            DEFAULT: "#5F5A42",
            dark: "#E6E2CD",
          },
        },
      },
      spacing: {
        "gutter-x-0.5": "min(1.5625vw,1.25rem)", //20px
        "gutter-x": "min(3.125vw,2.5rem)", //40px
        "gutter-x-2": "min(6.25vw,5rem)", //80px
        "gutter-y-0.5": "min(1.5625vw,1.25rem)",
        "gutter-y": "min(3.125vw,2.5rem)",
        "gutter-y-2": "min(6.25vw,5rem)",
      },
      gridTemplateColumns: {
        custom: "min(48.9vw,626px) 1fr", // カスタムグリッドテンプレートを定義
      },
      fontFamily: {
        sortsMillGoudy: ['"Sorts Mill Goudy"', "serif"],
        ptSans: ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-header01": {
          fontSize: theme("fontSize.header01"),
          fontFamily: theme("fontFamily.sortsMillGoudy"),
        },
        ".text-header02": {
          fontSize: theme("fontSize.header02"),
          fontFamily: theme("fontFamily.sortsMillGoudy"),
        },
        ".text-header03": {
          fontSize: theme("fontSize.header03"),
          fontFamily: theme("fontFamily.sortsMillGoudy"),
        },
        ".text-body01": {
          fontSize: theme("fontSize.body01"),
          fontFamily: theme("fontFamily.ptSans"),
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
