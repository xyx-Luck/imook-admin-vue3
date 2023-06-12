//路由导航首位
import router from "./router";
import store from "./store";

const whiteList = ["/login"];

router.beforeEach((to, from, next) => {
  //有token
  if (store.state.user.token) {
    //如果访问的是login
    if (to.path === "/login") {
      next("/"); //进入首页
    } else {
      //如果访问的不是登录页面，要判断是否获取到了用户信息
      console.log(store)
      if (JSON.stringify(store.state.user.userinfo) === "{}") {
        store.dispatch("user/userinfo");
      }
      //如果访问的不是login
      next(); //进入访问的页面
    }
  } else {
    //没有token
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next("/login");
    }
  }
});
