import { createApp } from 'vue'
import './tailwindcss.css'
import App from './App.vue'
import components from './index.js';

const app = createApp(App);

app.use(components);

app.mount("#app");

