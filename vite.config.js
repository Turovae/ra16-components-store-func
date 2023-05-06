import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://turovae.github.io/ra16-components-store-func/',
  plugins: [react()],
})
