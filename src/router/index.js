import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/Home.vue";
import ForumView from "@/views/Forum.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/forum",
    name: "Forum",
    component: ForumView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
