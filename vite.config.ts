import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import alias from "@rollup/plugin-alias";
import path from "path";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "MicroappUI",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      entryRoot: "src",
      outDir: "dist",
      include: ["src/**/*.ts", "src/**/*.tsx"],
    }),
    alias({
      entries: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
