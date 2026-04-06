import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';
import { servicesIds } from './src/Data/ServicesId.js';

const serviceRoutes = servicesIds.map(s => `/seguro/${s.id}`);

export default defineConfig({
  assetsInclude: ['**/*.webp'],
  plugins: [
    react(),
    sitemap({
      hostname: 'https://segurosdesandro.es',
      routes: ['/', ...serviceRoutes],
    })
  ]
});
