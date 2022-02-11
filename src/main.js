import { createApp, provide } from "vue";
import App from "./App.vue";
import './styles/index.less'
import 'element-plus/dist/index.css'
import { components } from "./plugins/element";
import echarts from "./plugins/echarts";
import router from "./router"
import store from './store'
import { ElMessage } from "element-plus";

const app = createApp(App);
// 按需引入elementui
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(router)
app.use(store)
app.provide('$echarts', echarts)
app.provide("$message", ElMessage);
app.mount("#app");
