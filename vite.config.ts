import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 👈 IMPORTANT for GitHub Pages deployment
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  build: {
    outDir: "docs", // Output to docs folder for GitHub Pages
  },
  // When using a custom domain, we use '/' as the base
  // because the site is served from the root of the domain
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
