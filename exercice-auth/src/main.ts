import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).mount("#app");
