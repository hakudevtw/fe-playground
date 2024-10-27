import type { App } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";

const setupPrimeVue = (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });

  app.component("Button", Button);
};

export default setupPrimeVue;
