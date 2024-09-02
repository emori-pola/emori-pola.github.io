import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CaseStudyView from "@/views/CaseStudyView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "" },
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta: { title: "About - " },
  },
  {
    path: "/:id",
    name: "CaseStudy",
    component: CaseStudyView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const defaultTitle = "Yuka Yamada";
  if (to.meta.title) {
    document.title = to.meta.title + defaultTitle;
  } else {
    document.title = defaultTitle;
  }
  next();
});

export default router;
