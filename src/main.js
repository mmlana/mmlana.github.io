import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/app.css";
import "./assets/css/custom.css";

import VueScrollReveal from "vue-scroll-reveal";
import VueScrollactive from "vue-scrollactive";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollReveal);
Vue.use(VueScrollactive);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
