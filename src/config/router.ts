import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw
} from "vue-router";

import IndexPage from "@pages/Index.vue";
import GamePage from "@pages/Game.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  { path: "/", component: IndexPage },
  { path: "/game", component: GamePage }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
