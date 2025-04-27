import './assets/main.css'
import 'font-awesome/css/font-awesome.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')
