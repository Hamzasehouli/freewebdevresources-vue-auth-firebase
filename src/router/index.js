import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
// import { store } from "../store/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_, _1, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach(function (to, from, next) {
  if (to.meta.toBeAuthenticated && !window.localStorage.getItem("token")) {
    if (from.name === "Auth") return;

    return next({ name: "Auth" });
  }

  if (to.name === "Auth" && !!window.localStorage.getItem("token")) {
    if (from.name === "Main") return;

    return next({ name: "Main" });
  }

  next();
});

export default router;
