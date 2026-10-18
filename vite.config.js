import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  css: {
    lightningcss: {
      errorRecovery: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: './src/index.jsx',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
