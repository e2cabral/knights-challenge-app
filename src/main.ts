import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BalmUI from 'balm-ui'
import 'balm-ui-css';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(BalmUI)
app.use(router)

app.mount('#app')
