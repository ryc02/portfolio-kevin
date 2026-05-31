import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {} // This empty object prevents Vite from searching for postcss configs in parent directories (like D:\postcss.config.mjs)
  }
})
