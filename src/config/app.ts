import { createApp } from "vue";

import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

import { router } from "@config/router.ts";
import pinia from "@config/pinia.ts";

import App from "@pages/App.vue";
import "@css/index.css";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(pinia);

app.mount("#app");
