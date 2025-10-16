import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Update this if your site is in a subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Using esbuild (faster and default)
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
