import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";
import NoteCreateView from "../views/NoteCreateView.vue";
import NoteListView from "../views/NoteListView.vue";
import RegisterView from "../views/RegisterView.vue";
import useAuth from "../store/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/notecreate",
    name: "notecreate",
    component: NoteCreateView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/",
    name: "notelist",
    component: NoteListView,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      requireAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuth();
  const isAuth = auth.token;
  if (to.meta.requireAuth && isAuth == null) {
    next("login");
  } else {
    next();
  }
});

export default router;
