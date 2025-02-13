import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Avoids old browser issues
    }),
  ],
  build: {
    outDir: 'dist',
    target: 'esnext', // Better tree-shaking and smaller bundle size
    minify: 'esbuild', // Fast and efficient minification
    sourcemap: false, // Disable source maps for smaller build size
    chunkSizeWarningLimit: 500, // Avoid chunk size warnings
  },
})
