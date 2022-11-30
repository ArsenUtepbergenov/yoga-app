const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    hmr: {
      host: 'localhost',
    },
  },
  build: {
    commonjsOptions: {
      esmExternals: true,
    },
  },
  define: {
    'process.env': {},
  },
})
