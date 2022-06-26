import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ['vue'],
    preserveSymlinks: false,
  },
  logLevel: 'info',
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'vue3-toggle-button',
      fileName: (format) => `vue3-toggle-button.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue',],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'

        }
      },
    }
  }
})
