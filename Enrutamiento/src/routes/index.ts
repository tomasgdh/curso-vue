import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiciesView from "../views/ServiceView.vue";
import ContactView from "../views/ContactView.vue";
import BlogView from "../views/BlogView.vue";
import PostView from "../views/PostView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/servicies",
        name: "Servicies",
        component: ServiciesView,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactView,
    },
    {
        path: "/blog",
        name: "Blog",
        component: BlogView,
    },
    {
        path: "/blog/:id",
        name: "Post",
        component: PostView,
    },
    {
        path: "/about",
        name: "About",
        //route level code-splitting
        //this generates a separate chunk (about.[hash].js) for this route
        //wich is lasy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
