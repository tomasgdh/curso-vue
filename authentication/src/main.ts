import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbuz4zq_t9pDUF27r2Mj8uLZ_n4EI84Tc",
    authDomain: "curso-vue-fb426.firebaseapp.com",
    projectId: "curso-vue-fb426",
    storageBucket: "curso-vue-fb426.appspot.com",
    messagingSenderId: "861902620049",
    appId: "1:861902620049:web:d74f3fc3077bb50bea4630",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
