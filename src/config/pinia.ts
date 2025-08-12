import { createPinia } from "pinia";
import piniaPluginPersistedstate, { createPersistedState } from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(createPersistedState({
  storage: localStorage
}));
pinia.use(piniaPluginPersistedstate);


export default pinia;
