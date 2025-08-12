import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@config",
        replacement: fileURLToPath(new URL("./src/config", import.meta.url)),
      },
      {
        find: "@types",
        replacement: fileURLToPath(new URL("./src/types", import.meta.url)),
      },
      {
        find: "@ui",
        replacement: fileURLToPath(
          new URL("./src/components/ui", import.meta.url),
        ),
      },
      {
        find: "@elements",
        replacement: fileURLToPath(
          new URL("./src/components/elements", import.meta.url),
        ),
      },
    ],
  },
});
