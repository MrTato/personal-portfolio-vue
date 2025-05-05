import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import axios
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faArrowRight,
  faEnvelope,
  faSquareFull,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faVuejs } from '@fortawesome/free-brands-svg-icons'

library.add([
  faBars,
  faArrowRight,
  faEnvelope,
  faGithub,
  faLinkedin,
  faSquareFull,
  faMoon,
  faSun,
  faVuejs,
])
import 'firacode'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css' // or any theme you like
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import DOMPurify from 'dompurify'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$axios = axios

app.config.globalProperties.$sanitize = DOMPurify.sanitize

app.use(router)

app.mount('#app')
