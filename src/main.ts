import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import '@/assets/styles/global.less'
import '@/assets/styles/override.less' //重写样式

const app = createApp(App)

app.use(router)

app.mount('#app')
