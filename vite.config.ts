import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url))
      },
      {
        find: "@config",
        replacement: fileURLToPath(new URL("./src/config", import.meta.url))
      },
      {
        find: "@types",
        replacement: fileURLToPath(new URL("./src/types", import.meta.url))
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("./src/components/ui", import.meta.url)
        )
      },
      {
        find: "@elements",
        replacement: fileURLToPath(
          new URL("./src/components/elements", import.meta.url)
        )
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url))
      },
      {
        find: "@css",
        replacement: fileURLToPath(
          new URL("./src/assets/css", import.meta.url)
        )
      },
      {
        find: "@images",
        replacement: fileURLToPath(
          new URL("./src/assets/images", import.meta.url)
        )
      },
      {
        find: "@utils",
        replacement: fileURLToPath(
          new URL("./src/utils", import.meta.url)
        )
      },
      {
        find: "@store",
        replacement: fileURLToPath(
          new URL("./src/store", import.meta.url)
        )
      },
      {
        find: "@constants",
        replacement: fileURLToPath(
          new URL("./src/constants", import.meta.url)
        )
      }
    ]
  }
});
