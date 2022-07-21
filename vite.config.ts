import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
// import Markdown from 'vite-plugin-md';
//
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/blog': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://localhost:7001/blog/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blog/, ''), // 将 /api 重写为空
      },
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    // Markdown(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      cache: false,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/assets/style/main.scss";@import "./src/assets/style/const.scss";',
      },
    },
  },
});
