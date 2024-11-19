import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import './assets/main.css'
const pinia = createPinia()
createApp(App).use(router).use(ArcoVue).use(ArcoVueIcon).use(pinia).mount('#app')
