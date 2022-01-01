export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
  },
  {
    path: "/home",
    name: "Main",
    meta: { toBeAuthenticated: true },
    component: () => import("../views/Main.vue"),
  },

  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];
