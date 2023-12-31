import { defineConfig, presetAttributify, presetUno } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';
export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  theme: {
    colors: {
      sub: '#71717a',
    },
  },
  rules: [],
  shortcuts: {
    'flex-center': 'justify-center items-center',
  },
  transformers: [transformerVariantGroup()],
});
