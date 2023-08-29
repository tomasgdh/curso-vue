import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ExamplePiniaPersistedstateView from "../views/ExamplePiniaPersistedstateView.vue";
import ExampleLocalStorage from "../views/ExampleLocalStorage.vue";
import ExampleWatchers from "../views/ExampleWatchers.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ExamplePiniaPersistedstateView,
  },
  {
    path: "/localStorage",
    name: "localStorage",
    component: ExampleLocalStorage,
  },
  {
    path: "/watcher",
    name: "watcher",
    component: ExampleWatchers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
