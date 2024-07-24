import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/oshitimer",
    name: "oshitimer",
    component: () => import("../views/OshitimerView.vue"),
  },
  {
    path: "/national-gallery",
    name: "national-gallery",
    component: () => import("../views/National-galleryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
