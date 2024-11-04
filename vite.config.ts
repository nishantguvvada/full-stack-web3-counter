// WSL USERS ON WINDOWS ONLY (NOT NECESSARY FOR LINUX/MACOS)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills()
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});