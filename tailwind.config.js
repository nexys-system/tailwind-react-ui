const colors = require("tailwindcss/colors");
const themeDefault = require("tailwindcss/defaultTheme");

///* purge: {
// enabled: true,
// content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
//},*/

module.exports = {
  darkMode: "class",

  variants: {
    height: ["responsive", "hover", "focus"],
    /*https://tailwindcss.com/docs/hover-focus-and-other-states#disabled*/
    extend: {
      opacity: ["disabled"],
    },
    width: ["hover", "focus"],
  },
  theme: {
    extend: {
      brightness: ["hover", "focus"],
      transitionProperty: {
        height: "max-height",
        width: "width",
      },
      animation: {
        ping100: "ping 1s infinite 100ms",
        ping200: "ping 1s infinite 200ms",
        ping300: "ping 1s infinite 300ms",
      },
      colors: {
        primary: {
          ...colors.sky,
          DEFAULT: colors.sky["500"],
        },
      },
    },
    colors: {
      ...colors,
      success: {
        DEFAULT: "#83c5be",
      },
      bgPrimary: {
        DEFAULT: "hsla(288, 20%, 75%, 1)",
        dark: "#756878",
      },

      bgSecondary: {
        DEFAULT: "hsla(197, 65%, 42%, 1)",
        dark: "#507a8b",
      },
    },

    boxShadow: {
      ...themeDefault.boxShadow,
      white: "0 3px 3px rgba(189, 182, 181)",
      whiteMd: "0 5px 5px rgba(189, 182, 181)",
      primary: "0 3px 3px rgba(56, 189, 248)",
    },
    shadows: {
      ...themeDefault.shadows,
      white: "0 3px 3px rgba(189, 182, 181)",
      whiteMd: "0 5px 5px rgba(189, 182, 181)",
      primary: "3px 3px 3px 3px rgba(56, 189, 248)",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
