import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3666 },
  plugins: [react(),
  VitePWA(
    {
      registerType: 'autoUpdate',
      includeAssets: ['icon-192.png'],
      manifest: {
        name: 'LaboruNET',
        short_name: 'LaboruNET',
        description: 'Admin laborunet',
        lang: 'es',
        id: '/',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon-192..png',
            sizes: '192x192',
            type: 'image/png'
          },
        ],
        workbox: {
          sourcemap: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],

        }
      }
    },
  )],
})
