import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        include: ['node_modules/flowbite-react/dist/flowbite.css'],
      },
    },
  },
});