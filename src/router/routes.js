const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "method", component: () => import("pages/MethodPage.vue") },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      { path: "prices", component: () => import("pages/PricePage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      { path: "blog", component: () => import("pages/BlogPage.vue") },
      { path: "account", component: () => import("pages/AccountPage.vue") },
      {
        path: "appointments",
        component: () => import("pages/AppointmentsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
