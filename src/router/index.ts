import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NewWorldView from "../views/NewWorldView.vue";
import OtherView from "../views/OtherView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/new-world",
      name: "new-world",
      component: NewWorldView
    },
    {
      path: "/other",
      name: "other",
      component: OtherView
    }
  ],
});

export default router;
