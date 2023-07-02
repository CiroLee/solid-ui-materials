import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import autoprefixer from 'autoprefixer';
import path from 'path';
import Unocss from 'unocss/vite';
export default defineConfig({
  base: '/solid-ui-materials/',
  plugins: [solidPlugin(), Unocss()],
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
