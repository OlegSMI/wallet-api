import { createApp } from "vue";

import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "./style.scss";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
