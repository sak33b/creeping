import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: ["./*.html", "./src/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        parchment: "#fdfbf7",
        journal: "#f4efe6",
        ink: "#1a1a18",
        "ink-muted": "#969389",
        sickly: "#f3efe0",
        bruised: "#4a5320",
        "bruised-green": "#2b3013",
        mustard: "#d4ce5c",
        oxblood: "#cf2617",
        blood: "#8c271e",
        primary: "#ff0000",
        "background-light": "#f8f6f6",
        "background-dark": "#211211",
        "sickly-yellow": "#c8b400",
        "rotten-mustard": "#8a7c00",
        shadow: "#211211"
      },
      fontFamily: {
        display: ["Bodoni Moda", "serif"],
        body: ["EB Garamond", "serif"],
        gothic: ["IM Fell English", "serif"],
        madness: ["Nothing You Could Do", "cursive"],
        distressed: ["Creepster", "cursive"],
        bloody: ["Nosifer", "cursive"],
        mono: ["Courier Prime", "monospace"]
      },
      keyframes: {
        fadeOut: {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "#000" }
        },
        fadeOutText: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        jitter: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(1px)" }
        },
        shudder: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(1px, 1px)" }
        },
        flash: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "#d4ce5c" }
        },
        shake: {
          "0%, 100%": { transform: "translateX(0) rotate(-2deg)" },
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translateX(-4px) translateY(2px) rotate(-3deg)"
          },
          "20%, 40%, 60%, 80%": {
            transform: "translateX(4px) translateY(-2px) rotate(-1deg)"
          }
        },
        aggressivePulseRotate: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.2) rotate(5deg)" },
          "50%": { transform: "scale(0.8) rotate(-5deg)" },
          "75%": { transform: "scale(1.5) rotate(15deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" }
        },
        tremor: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "10%": { transform: "translate(-3px, 2px) rotate(-1deg)" },
          "20%": { transform: "translate(2px, -3px) rotate(1deg)" },
          "30%": { transform: "translate(-4px, -2px) rotate(0deg)" },
          "40%": { transform: "translate(3px, 4px) rotate(-2deg)" },
          "50%": { transform: "translate(-2px, 1px) rotate(2deg)" },
          "60%": { transform: "translate(4px, -1px) rotate(-1deg)" },
          "70%": { transform: "translate(-1px, 3px) rotate(1deg)" },
          "80%": { transform: "translate(2px, -4px) rotate(0deg)" },
          "90%": { transform: "translate(-3px, -2px) rotate(-2deg)" }
        },
        chromatic: {
          "0%, 100%": { textShadow: "2px 0 red, -2px 0 blue" },
          "50%": { textShadow: "-3px 0 red, 3px 0 blue" }
        },
        chromaticBox: {
          "0%, 100%": { boxShadow: "3px 0 0 red, -3px 0 0 blue" },
          "50%": { boxShadow: "-4px 0 0 red, 4px 0 0 blue" }
        }
      },
      animation: {
        "fade-out": "fadeOut 0.8s forwards",
        "fade-out-text": "fadeOutText 0.8s forwards",
        jitter: "jitter 0.2s infinite",
        shudder: "shudder 0.1s infinite",
        flash: "flash 0.1s ease-in-out",
        shake: "shake 0.3s infinite",
        "aggressive-bg": "aggressivePulseRotate 3s infinite ease-in-out",
        tremor: "tremor 0.1s infinite",
        chromatic: "chromatic 0.2s infinite",
        "chromatic-box": "chromaticBox 0.2s infinite"
      }
    }
  },
  plugins: [forms, containerQueries]
};
