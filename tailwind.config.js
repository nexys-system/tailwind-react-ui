const colors = require("tailwindcss/colors");
const themeDefault = require("tailwindcss/defaultTheme");

///* purge: {
// enabled: true,
// content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
//},*/

module.exports = {
  darkMode: "class",
  // purge: {
  //   enabled: true,
  //   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  //   options: {
  //     safelist: [/primary/, /secondary/, /info/, /warning/, /success/, /error/],
  //   },
  // },
  variants: {
    height: ["responsive", "hover", "focus"],
    /*https://tailwindcss.com/docs/hover-focus-and-other-states#disabled*/
    extend: {
      opacity: ["disabled"],
    },
    width: ["hover", "focus"],
  },
  theme: {
    minWidth: {
      64: "16rem",
    },
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
        secondary: {
          ...colors.gray,
          DEFAULT: colors.gray["500"],
        },
        success: {
          ...colors.green,
          DEFAULT: colors.green["500"],
        },
        warning: {
          ...colors.amber,
          DEFAULT: colors.amber["500"],
        },
        error: {
          ...colors.rose,
          DEFAULT: colors.rose["500"],
        },
        info: {
          ...colors.blue,
          DEFAULT: colors.blue["500"],
        },
        white: {
          ...colors.white,
          DEFAULT: colors.white,
        },
        black: {
          ...colors.black,
          DEFAULT: colors.black,
        },
      },
    },
    colors: {
      ...colors,
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
