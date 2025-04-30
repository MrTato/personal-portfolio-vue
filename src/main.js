import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faArrowRight, faEnvelope, faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add([faBars, faArrowRight, faEnvelope, faGithub, faLinkedin, faSquareFull])

axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$axios = axios

app.use(router)

app.mount('#app')
