/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "vite-plugin-fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [fs(), react() ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});