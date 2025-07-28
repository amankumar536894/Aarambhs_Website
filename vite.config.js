import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This enables access from your local network
    port: 5173       // Optional: explicitly define the port
  }
})

