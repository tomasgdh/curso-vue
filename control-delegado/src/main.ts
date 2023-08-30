import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);

app.use(VueLazyLoad, {}).use(router).mount("#app");
