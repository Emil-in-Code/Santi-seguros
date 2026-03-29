import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { services } from './src/Data/Services.js';

const serviceRoutes = services.map(s => `/seguro/${s.id}`)

export default defineConfig({

  assetsInclude:['**/*.webp'],

  plugins: [
    react(),
    sitemap({
      hostname: 'https://segurosdesandro.es',
      routes:['/', ...serviceRoutes],
    })

  ],
  server: {
    allowedHosts: [
      '.tunnelmole.net',
        '.7zwdok-ip-181-45-177-54.tunnelmole.net'
    ]
  }
})
