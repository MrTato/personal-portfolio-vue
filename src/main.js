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
import * as Sentry from '@sentry/vue'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

Sentry.init({
  app,
  dsn: 'https://75e7e178b51822137a67f5a4e99d6d42@o4509285461065728.ingest.us.sentry.io/4509285469782016',
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
})
app.config.globalProperties.$axios = axios

app.config.globalProperties.$sanitize = DOMPurify.sanitize

app.use(router)

app.mount('#app')
