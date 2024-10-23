import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from "vite-plugin-qiankun-lite";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qiankun({ name, sandbox: !!process.env.VITE_SANDBOX })],
  server: {
    cors: true,
    origin: "//localhost:4201",
  },
});
