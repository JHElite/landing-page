import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
// import tailwindCssAnimated from "tailwindcss-animated";
import tailwindCssIntersect from "tailwindcss-intersect";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const COMMON_VARS = {
  // sizes
  "--icon-stroke-lg": "3px",

  // colors
  "--site-bg-color-1": "var(--fallback-p, oklch(var(--p)))",
  "--site-bg-color-2": "var(--fallback-n, oklch(var(--n)))",

  // animations
  "--tw-animate-duration": "500ms",
  "--tw-animate-easing": "ease",
  "--tw-animate-delay": "0ms",
  "--tw-animate-iteration": "once",
  "--tw-animate-fill": "normal",

  "--fade-up-from": "20%",
  "--fade-up-to": "0%",
  "--fade-right-from": "-20%",
  "--fade-right-to": "0%",
  "--fade-left-from": "20%",
  "--fade-left-to": "0%",
  "--fade-down-from": "-20%",
  "--fade-down-to": "0%",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        touch: { raw: "(hover: none)" },
        "no-touch": { raw: "(hover: hover)" },
      },
      fontFamily: {
        title: ["poppins", ...defaultTheme.fontFamily.sans],
        sans: ["nunito", ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        ...defaultTheme.transitionDuration,
        load: "100ms",
      },
      animationDelay: {
        none: "0ms",
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      animationDuration: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
      },
      animationTimingFunction: {
        DEFAULT: "ease",
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animationIteration: {
        infinite: "infinite",
        once: "1",
        twice: "2",
        thrice: "3",
        1: "1",
        2: "2",
        3: "3",
      },
      animation: {
        ...defaultTheme.animation,
        // "rotate-y":
        //   "rotate-y var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        // "rotate-x":
        //   "rotate-x var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        // fade: "fade var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        // "fade-down":
        //   "fade-down var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-fuck":
          "fade-fuck var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        // "fade-left":
        //   "fade-left var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        // "fade-right":
        //   "fade-right var(--tw-animate-duration, 1s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
      },
      keyframes: {
        // ...defaultTheme.keyframes,
        // "rotate-y": {
        //   "0%": {
        //     transform: "rotateY(360deg)",
        //   },
        //   "100%": {
        //     transform: "rotateY(0)",
        //   },
        // },
        // "rotate-x": {
        //   "0%": {
        //     transform: "rotateX(360deg)",
        //   },
        //   "100%": {
        //     transform: "rotateX(0)",
        //   },
        // },
        // fade: {
        //   from: {
        //     opacity: "0",
        //   },
        //   to: {
        //     opacity: "1",
        //   },
        // },
        // "fade-down": {
        //   from: {
        //     opacity: "0",
        //     transform: "translateY(var(--fade-down-from))",
        //   },
        //   to: {
        //     opacity: "1",
        //     transform: "translateY(var(--fade-down-to))",
        //   },
        // },
        "fade-fuck": {
          "0%": {
            opacity: "0",
            // transform: "translateY(var(--fade-up-from))",
            transform: "translateY(20rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0rem)",
          },
        },
        // "fade-left": {
        //   from: {
        //     opacity: "0",
        //     transform: "translateY(var(--fade-left-from))",
        //   },
        //   to: {
        //     opacity: "1",
        //     transform: "translateY(var(--fade-left-to))",
        //   },
        // },
        // "fade-right": {
        //   from: {
        //     opacity: "0",
        //     transform: "translateY(var(--fade-right-from))",
        //   },
        //   to: {
        //     opacity: "1",
        //     transform: "translateY(var(--fade-right-to))",
        //   },
        // },
      },
    },
  },
  plugins: [
    // tailwindCssAnimated,
    plugin(function ({
      addBase,
      addUtilities,
      addComponents,
      addVariant,
      theme,
    }) {
      // console.log(`:::THEME::: `, theme("size"));
      addVariant("light", "@media (prefers-color-scheme: light)");
      addVariant("safari", "@supports (background: -webkit-named-image(i))");
      addBase({
        a: { textDecoration: "underline" },
      });
      addComponents({
        ".bracket-card": {
          position: "relative",
          border: "var(--icon-stroke-lg) solid transparent",
          width: "fit-content",
          "min-width": "108px",

          "&::before": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke-lg)*-1)",
            bottom: "calc(var(--icon-stroke-lg)*-1)",
            left: "calc(var(--icon-stroke-lg)*-1)",
            width: "calc(var(--icon-stroke-lg)*14)",

            "background-color": "currentColor",
            "clip-path": `polygon(
              100% 0,
              var(--icon-stroke-lg) var(--icon-stroke-lg),
              var(--icon-stroke-lg) calc(100% - var(--icon-stroke-lg)),
              100% 100%,
              0 100%,
              0 0
            )`,
          },
          "&::after": {
            content: "''",
            position: "absolute",
            top: "calc(var(--icon-stroke-lg)*-1)",
            bottom: "calc(var(--icon-stroke-lg)*-1)",
            right: "calc(var(--icon-stroke-lg)*-1)",
            width: "calc(var(--icon-stroke-lg)*14)",

            "background-color": "currentColor",
            "clip-path": `polygon(
              0 0,
              100% 0,
              100% 100%,
              0 100%,
              calc(100% - var(--icon-stroke-lg)) calc(100% - var(--icon-stroke-lg)),
              calc(100% - var(--icon-stroke-lg)) var(--icon-stroke-lg)
            )`,
          },
        },
      });
      addUtilities({
        ".site-width-content": {
          width: `min(100%, ${theme("screens.xl")})`,
          maxWidth: `min(100%, ${theme("screens.xl")})`,
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".img-fade-in": {
          opacity: theme("opacity.0"),
        },
        ".img-fade-in-loaded": {
          opacity: theme("opacity.100"),
        },
        ".site-px": {
          transitionProperty: "padding",
          transitionDuration: theme("transitionDuration.DEFAULT"),
          transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
          "@screen sm": {
            paddingLeft: theme("padding.8"),
            paddingRight: theme("padding.8"),
          },
        },
        ".site-py": {
          paddingTop: theme("padding.8"),
          paddingBottom: theme("padding.8"),
        },
        ".text-title-1": {
          fontSize: theme("fontSize.5xl"),
          fontFamily: theme("fontFamily.title"),
        },
        ".text-title-2": {
          fontSize: "2.5rem",
          fontFamily: theme("fontFamily.title"),
          fontWeight: 700,
        },
        ".text-title-3": {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.title"),
          fontWeight: 700,
          textTransform: "uppercase",
        },
        ".text-empty": {
          "--tw-text-opacity": "1",
          color: "oklch(var(--color-empty)/var(--tw-text-opacity))",
        },
        ".text-full": {
          "--tw-text-opacity": "1",
          color: "oklch(var(--color-full)/var(--tw-text-opacity))",
        },
        ".bg-empty": {
          "--tw-bg-opacity": "1",
          backgroundColor: "oklch(var(--color-empty)/var(--tw-bg-opacity))",
        },
        ".bg-full": {
          "--tw-bg-opacity": "1",
          backgroundColor: "oklch(var(--color-full)/var(--tw-bg-opacity))",
        },
        ".glass-base": {
          "--tw-bg-opacity": "0.66",
          backgroundColor:
            "var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)))",
          backdropFilter: "blur(50px)",
        },
        ".glass-empty": {
          "--tw-bg-opacity": "0.33",
          backgroundColor: "oklch(var(--color-empty)/var(--tw-bg-opacity))",
          backdropFilter: "blur(50px)",
        },
        ".glass-full": {
          "--tw-bg-opacity": "0.33",
          backgroundColor: "oklch(var(--color-full)/var(--tw-bg-opacity))",
          backdropFilter: "blur(50px)",
        },
      });
    }),
    typography,
    daisyui,
    tailwindCssIntersect,
  ],
  daisyui: {
    themes: [
      {
        light: {
          // ...require("daisyui/src/theming/themes")["light"],
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#D9AF72",
          // basically a color that should be dark on both light and dark, probably slightly lighter than base-300 on dark
          neutral: "#555",

          // "neutral-content": "#ffffff",
          "base-100": "#fafafa",
          // "base-content": "#758DAD",
          "base-content": "#253040",

          "--color-empty": "100% 0 0",
          "--color-full": "0% 0 0",
          "--site-logo-color-1": "#455270",
          "--site-logo-color-2": "#253040",
          "--site-logo-color-3": "#6E7B8C",
          ...COMMON_VARS,
        },
        dark: {
          primary: "#449FF4",
          secondary: "#455270",
          accent: "#D9AF72",
          neutral: "#aaa",
          "base-100": "#414141",
          // made up light blue
          // "base-content": "#E3E8EF",
          // "base-content": "#fff",
          "base-content": "#D9E4E9",

          "--color-empty": "0% 0 0",
          "--color-full": "100% 0 0",
          "--site-logo-color-1": "#6B7B8C",
          "--site-logo-color-2": "#D9E4E9",
          "--site-logo-color-3": "#AAB8C2",
          ...COMMON_VARS,
        },
      },
    ],
  },
  // darkMode: ["class", '[data-theme="dark"]'],
};
