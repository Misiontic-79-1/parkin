import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nosotros from "../views/Nosotros.vue";
import Dashboard from "../views/Dashboard.vue";
import Gracias from "../views/Gracias.vue";
import DashboardUser from "../views/DashboardUser.vue";
import DashboardUser2 from "../views/DashboardUser2.vue";
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
  {
    path: "/DashboardUser",
    name: "DashboardUser",
    component: DashboardUser,
  },
  {
    path: "/DashboardUser2",
    name: "DashboardUser2",
    component: DashboardUser2,
  },
  {
    path: "/gracias",
    name: "Gracias",
    component: Gracias,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
