import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nosotros from "../views/Nosotros.vue"
import Dashboard from "../views/Dashboard.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
