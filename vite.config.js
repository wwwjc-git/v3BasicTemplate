import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import ViteComponents, { ElementPlusResolver } from "vite-plugin-components";
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteComponents({
    //   customComponentResolvers: [ElementPlusResolver()],
    // }),
    //按需导入element-plus的css样式
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "element-plus",
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `element-plus/lib/theme-chalk/${name}.css`;
    //       },
    //     },
    //   ],
    // }),
  ],
  alias:{
    '@': '/src/'
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData:  `@import "${path.resolve(__dirname, './src/styles/variables.less')}";`,
        javascriptEnabled: true,
      }
    }
  }
});
