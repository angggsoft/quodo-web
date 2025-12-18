import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// --- AÑADE ESTAS DOS LÍNEAS ---
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // --- AÑADE TODA ESTA SECCIÓN 'css' ---
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})