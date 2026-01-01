import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  // 确保正确处理中文编码
  esbuild: {
    charset: 'utf8'
  },
  css: {
    preprocessorOptions: {
      less: {
        // 可以在这里添加 Less 的全局配置
        // 例如：全局变量、混入等
        additionalData: `@import "@/styles/variables.less";`
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
