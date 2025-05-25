import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
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
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faVuejs, faPython } from '@fortawesome/free-brands-svg-icons'

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
  faPython,
  faDatabase,
])
import 'firacode'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import DOMPurify from 'dompurify'
import * as Sentry from '@sentry/vue'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

if (import.meta.env.MODE === 'production') {
  Sentry.init({
    app,
    dsn: 'https://75e7e178b51822137a67f5a4e99d6d42@o4509285461065728.ingest.us.sentry.io/4509285469782016',
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
  })
}

axios.defaults.baseURL = import.meta.env.VITE_API_URL

app.config.globalProperties.$axios = axios

app.config.globalProperties.$sanitize = DOMPurify.sanitize

app.use(router)

app.mount('#app')
