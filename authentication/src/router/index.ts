import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import AuthFirebaseView from '../views/AuthFirebaseView.vue'
import AuthSocialLoginView from '../views/AuthSocialLoginView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/auth",
        name: "auth",
        component: AuthView,
    },
    {
        path: "/firebase",
        name: "firebase",
        component: AuthFirebaseView,
    },
    {
        path: "/authsocial",
        name: "authsocial",
        component: AuthSocialLoginView,
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
