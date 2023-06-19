import { createApp } from "vue";
import { createPinia } from 'pinia'

import App from "./App.vue";
const pinia = createPinia()

//VUE ROUTER
import router from "./router";

//GLOBAL STYLE
import "./style.css";

const app = createApp(App);

app.use(router);
app.use(pinia)
app.mount("#app");