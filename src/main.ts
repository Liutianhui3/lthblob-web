import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

import '@/assets/styles/global.less'
import '@/assets/styles/override.less' //重写样式
import '@/assets/styles/antd.less'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

import AntdComponent from './plugins/antd'

const app = createApp(App)

AntdComponent(app)

app.use(router).use(VueVirtualScroller).mount('#app')
