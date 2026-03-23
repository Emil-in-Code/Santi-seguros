import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '.tunnelmole.net',
      '.jv0fyt-ip-181-231-246-10.tunnelmole.net'
    ]
  }
})
