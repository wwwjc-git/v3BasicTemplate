import { createApp, provide } from "vue";
import App from "./App.vue";
import './styles/index.less'
import 'element-plus/dist/index.css'
import { components, plugins } from "./plugins/element";
import echarts from "./plugins/echarts";
import router from "./router"
import store from './store'
const app = createApp(App);
// 按需引入elementui
components.forEach((component) => {
  app.component(component.name, component);
});
plugins.forEach((plugin) => {
  app.use(plugin);
});
app.use(router)
app.use(store)
app.config.globalProperties.$echarts = echarts
app.provide('$echarts', echarts)
app.mount("#app");
