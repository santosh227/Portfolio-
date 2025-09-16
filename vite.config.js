import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'santoshkumar-portfolio-520a.onrender.com',
      '.onrender.com'  
    ]
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173
  }
})
