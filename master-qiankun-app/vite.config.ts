import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import qiankun from 'vite-plugin-qiankun-lite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun({ name: 'sub-app', sandbox: true }),
  ],
});
