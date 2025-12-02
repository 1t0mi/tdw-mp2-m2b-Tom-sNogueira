import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tdw-mp2-m2b-Tom-sNogueira/", // O nome exato do teu repositório entre barras
})
