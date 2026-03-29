import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap form 'vite-plugin-sitemap'
import { services } from './src/Data/Services.js'

const serviceRoutes = servies.map(s => `/seguro/${s,id}`)

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname:'https://segurosdesandro.es',
      routes: [
        '/'
      ]
    })
  ],
  server: {
    allowedHosts: [
      '.tunnelmole.net',
      '.jv0fyt-ip-181-231-246-10.tunnelmole.net'
    ]
  }
})
