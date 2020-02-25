import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    component: () => import("../views/Layout/index.vue"),
    // 在父component中（Layout/index）会展示children中的第一个
    children: [
      {
        path: "/console",
        name: "Console",
        component: () => import("../views/Console/index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
