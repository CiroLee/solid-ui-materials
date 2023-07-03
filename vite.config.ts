import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import mdPlugin, { Mode } from 'vite-plugin-markdown';
import autoprefixer from 'autoprefixer';
import hljs from 'highlight.js/lib/common';
import path from 'path';
import Unocss from 'unocss/vite';
export default defineConfig({
  base: '/solid-ui-materials/',
  plugins: [
    solidPlugin(),
    Unocss(),
    mdPlugin({
      mode: [Mode.HTML],
      markdown: (body: string) => body,
      markdownIt: {
        highlight: function (str: string, lang = '') {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre class="hljs"><code>${
                hljs.highlight(str, {
                  language: hljs.getLanguage(lang)?.name || 'json',
                  ignoreIllegals: true,
                }).value
              }</code></pre>`;
            } catch (err) {
              console.log(err);
            }
          }
        },
      },
    }),
  ],
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
