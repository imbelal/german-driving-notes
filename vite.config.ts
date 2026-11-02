import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'pwa-192.png', 'pwa-512.png', 'maskable-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'German Driving Notes',
        short_name: 'Driving Notes',
        description:
          'English notes, diagrams and quizzes for the German driving licence: junctions, turns, Autobahn, parking and exam preparation.',
        lang: 'en',
        theme_color: '#0c141c',
        background_color: '#0c141c',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: './',
        categories: ['education'],
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
      },
    }),
  ],
})
