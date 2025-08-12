import {
  createRouter,
  type RouteRecordRaw,
  createMemoryHistory
} from "vue-router";

import IndexPage from "@pages/Index.vue";
import GamePage from "@pages/Game.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  { path: "/", component: IndexPage },
  { path: "/game", component: GamePage }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
