import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "stage-1-journal-2": resolve(__dirname, "stage-1-journal-2.html"),
        "stage-2-journal-1": resolve(__dirname, "stage-2-journal-1.html"),
        "stage-2-journal-2": resolve(__dirname, "stage-2-journal-2.html"),
        "stage-3-journal-1": resolve(__dirname, "stage-3-journal-1.html"),
        "stage-3-journal-2": resolve(__dirname, "stage-3-journal-2.html"),
        "stage-4-chaos": resolve(__dirname, "stage-4-chaos.html")
      }
    }
  }
});
