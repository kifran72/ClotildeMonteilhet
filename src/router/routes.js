const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about", component: () => import("pages/AboutPage.vue") },
      { path: "method", component: () => import("pages/MethodPage.vue") },
      {
        path: "sophrology",
        component: () => import("pages/SophrologyPage.vue"),
      },
      {
        path: "session",
        component: () => import("pages/SessionPage.vue"),
      },
      {
        path: "ethics",
        component: () => import("pages/EthicsPage.vue"),
      },
      { path: "prices", component: () => import("pages/PricePage.vue") },
      { path: "contact", component: () => import("pages/ContactPage.vue") },
      {
        path: "blog",
        component: () => import("pages/BlogPage.vue"),
      },
      {
        path: "blog/:nameArticle",
        component: () => import("pages/ArticlePage.vue"),
      },
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
