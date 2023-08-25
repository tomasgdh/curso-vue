import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PostListView from "../views/PostListView.vue";
import PostDetailView from "../views/PostDetailView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: (to) => {
            return { name: "PostList" };
        },
    },
    {
        path: "/post",
        name: "PostList",
        component: PostListView,
    },
    {
        path: "/post/:id",
        name: "PostDetail",
        component: PostDetailView,
    },
    /*{
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
*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
