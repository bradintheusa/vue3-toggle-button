import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';


export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'vue3-toggle-button',
      fileName: (format) => `vue3-toggle-button.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
