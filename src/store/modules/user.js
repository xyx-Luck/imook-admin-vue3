// import { useRoute, useRouter } from "vue-router";
import { getLogin, getUserInfo } from "@/api/api";
import { setItem, getItem, clearItem } from "@/utils/storage.js";
import router from "@/router";
import md5 from "md5";
import { TOKEN } from "@/constant/index.js";
import { setTimeStamp } from "@/utils/auth.js";
// const router = useRouter();
// const route = useRoute();
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || "",
    userInfo: {},
  }),
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem(TOKEN, token);
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    //登录
    login(context, userinfo) {
      const { username, password } = userinfo;
      return new Promise((resolve, reject) => {
        // 调用接口
        getLogin({ username, password: md5(password) })
          .then((res) => {
            context.commit("setToken", res.token);
            //登陆成功后，保存登录时间
            setTimeStamp();
            resolve();
            router.push("/");
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      });
    },
    //获取用户信息
    async winUserInfo(context) {
      const res = await getUserInfo();
      context.commit("setUserInfo", res);
      return res;
    },
    //退出登录
    logout(context) {
      //清除TOKEN和userinfo
      context.commit("setToken", "");
      context.commit("setUserInfo", {});
      //清除全部数据
      clearItem();
      //页面跳转
      router.push("/login");
    },
  },
};
