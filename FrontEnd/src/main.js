import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import css from "./assets/sass/custom.css";
import script1 from "./../node_modules/bootstrap/js/dist/base-component.js";
import script2 from "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = "https://shrouded-ravine-66460.herokuapp.com/api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  css,
  script1,
  script2,
  render: (h) => h(App),
}).$mount("#app");
