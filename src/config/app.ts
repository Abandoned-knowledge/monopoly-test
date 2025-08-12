import { createApp } from "vue";

import Toast from "primevue/toast";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Aura from "@primeuix/themes/aura";

import { router } from "@config/router.ts";
import pinia from "@config/pinia.ts";

import App from "@pages/App.vue";
import "@css/index.css";

const app = createApp(App);

app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router);
app.use(pinia);

app.component("Toast", Toast);

app.mount("#app");
