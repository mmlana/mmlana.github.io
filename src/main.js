import Vue from "vue";
import App from "./App.vue";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/app.css";
import "./assets/css/custom.css";

import VueScrollReveal from "vue-scroll-reveal";
import VueScrollactive from "vue-scrollactive";
import VueScrollTo from "vue-scrollto";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faInstagram, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCog, faCopyright, faEnvelope, faRocket, faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faTwitter, faLinkedin, faInstagram, faGithub, faUserSecret, faCog, faCopyright, faEnvelope, faRocket);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueScrollReveal);
Vue.use(VueScrollactive);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
