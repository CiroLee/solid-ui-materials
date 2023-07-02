import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import autoprefixer from 'autoprefixer';
import path from 'path';
export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },

  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
