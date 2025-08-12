import { createApp } from "vue";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import Aura from "@primeuix/themes/aura";

import Button from "primevue/button";
import Toast from "primevue/toast";
import Select from "primevue/select";
import InputNumber from "primevue/inputnumber";

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
app.component("Button", Button);
app.component("Select", Select);
app.component("InputNumber", InputNumber);

app.mount("#app");
