import { createApp } from 'vue'
import App from './App.vue'
// import XierElement from 'xier-element'
import 'xier-element/dist/index.css'
// 创建 Vue 应用实例
const app = createApp(App);

// 使用插件
// app.use(XierElement);

// 挂载应用到 DOM
app.mount('#app');
