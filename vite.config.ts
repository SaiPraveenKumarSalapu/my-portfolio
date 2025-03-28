import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: [
      'localhost', // Default
      '3f1f-2600-1011-a18f-66af-98fa-801e-9f19-2b79.ngrok-free.app',
      '218d-2600-1011-a18f-66af-98fa-801e-9f19-2b79.ngrok-free.app' // Your ngrok URL
    ],
  },
});
