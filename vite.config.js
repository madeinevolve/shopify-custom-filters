import { defineConfig } from "vite";
const path = require("path");
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "filters",
      fileName: () => `filters.js`,
    },
  },
});
