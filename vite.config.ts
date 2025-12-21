import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: process.env.NETLIFY ? '/' : (mode === 'production' ? '/skyline-group-texas/' : '/'),
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
    plugins: [react()],
    define: {
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
