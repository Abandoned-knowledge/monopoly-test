import {
  createMemoryHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

import IndexPage from "@pages/Index.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  { path: "/", component: IndexPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
