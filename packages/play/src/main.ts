import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import XierElement from 'xier-element'
// 创建 Vue 应用实例
const app = createApp(App);

// 使用插件
app.use(XierElement);

// 挂载应用到 DOM
app.mount('#app');
