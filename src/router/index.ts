import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Login from '@/views/Login/login.vue'
// import HomeView from '../views/HomeView.vue'
//私有路由表
const privateRoutes = [
  {
    path: "/user",
    component: () => import("../views/Layout/layout.vue"),
    redirect: "/user/manage",
    meta: {
      title: "user",
      icon: "personnel",
    },
    children: [
      {
        path: "/user/manage",
        component: () => import("../views/user-manage/index.vue"),
        meta: {
          title: "userManage",
          icon: "personnel-manage",
        },
      },
      {
        path: "/user/role",
        component: () => import("../views/role-list/index.vue"),
        meta: {
          title: "roleList",
          icon: "role",
        },
      },
      {
        path: "/user/permission",
        component: () => import("../views/permission-list/index.vue"),
        meta: {
          title: "permissionList",
          icon: "permission",
        },
      },
      {
        path: "/user/info/:id", //非菜单路由
        name: "userInfo",
        component: () => import("../views/user-info/index.vue"),
        meta: {
          title: "userInfo",
        },
      },
      {
        path: "/user/import", //非菜单路由
        name: "import",
        component: () => import("../views/import/index.vue"),
        meta: {
          title: "excelImport",
        },
      },
    ],
  },
  {
    path: "/article",
    component: () => import("../views/Layout/layout.vue"),
    redirect: "/article/ranking",
    meta: {
      title: "article",
      icon: "article",
    },
    children: [
      {
        path: "/article/ranking",
        component: () => import("../views/article-ranking/index.vue"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id", //非菜单路由
        component: () => import("../views/article-detail/index.vue"),
        meta: {
          title: "articleDetail",
        },
      },
      {
        path: "/article/create",
        component: () => import("../views/article-create/index.vue"),
        meta: {
          title: "articleCreate",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id", //非菜单路由
        component: () => import("../views/article-create/index.vue"),
        meta: {
          title: "articleEditor",
        },
      },
    ],
  },
];
//公开路由表
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    redirect: "/profile",
    component: () => import("../views/Layout/layout.vue"),
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/profile/index.vue"),
        meta: {
          title: "profile",
          icon: "el-icon-user",
        },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("../views/error-page/404.vue"),
      },
      {
        path: "/401",
        name: "401",
        component: () => import("../views/error-page/401.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
