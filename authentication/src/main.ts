import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { initializeApp } from "firebase/app";
import Emitter from "tiny-emitter";

const firebaseConfig = {
    apiKey: "AIzaSyAbuz4zq_t9pDUF27r2Mj8uLZ_n4EI84Tc",
    authDomain: "curso-vue-fb426.firebaseapp.com",
    projectId: "curso-vue-fb426",
    storageBucket: "curso-vue-fb426.appspot.com",
    messagingSenderId: "861902620049",
    appId: "1:861902620049:web:d74f3fc3077bb50bea4630",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.config.globalProperties.$msalInstance = {};
app.config.globalProperties.$emitter = new Emitter.TinyEmitter();

app.use(router).mount("#app");
