/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const buildDate = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export default defineConfig({
  base: "/",
  define: { __BUILD_DATE__: JSON.stringify(buildDate) },
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    passWithNoTests: true,
  },
});
