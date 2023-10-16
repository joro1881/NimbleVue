import { createApp } from 'vue'
import './tailwindcss.css'
import App from './App.vue'

const app = createApp(App);
app.config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("box-icon");
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("nv-btn");

app.mount("#app");

