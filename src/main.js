import { createApp } from "vue";
import App from "./App.vue";

//VUE ROUTER
import router from "./router";

//GLOBAL STYLE
import "./style.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
