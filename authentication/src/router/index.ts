import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import AuthFirebaseView from '../views/AuthFirebaseView.vue'
import AuthSocialLoginView from '../views/AuthSocialLoginView.vue'
import AuthAwsView from '../views/AuthAwsView.vue'
import AuthAzureView from '../views/AuthAzureView.vue'

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
    {
        path: "/authaws",
        name: "authaws",
        component: AuthAwsView,
    },
    {
        path: "/authazure",
        name: "authazure",
        component: AuthAzureView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
