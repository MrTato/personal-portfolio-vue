import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add([faBars, faArrowRight])

axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')
