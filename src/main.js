import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
const global = app.config.globalProperties

global.projectTitle = process.env.VUE_APP_TITLE
global.publicUrl = process.env.VUE_APP_PUBLIC_URL

app.mount('#app')