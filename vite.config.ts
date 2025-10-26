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
  // When deploying to GitHub Pages under a repo (e.g. https://<user>.github.io/cocohub/)
  // set the base to the repo name for production builds. During development keep '/'.
  base: mode === "development" ? "/" : "/cocohub/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
