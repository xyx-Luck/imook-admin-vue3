import { getLogin, getUserInfo } from "@/api/api";
import { setItem, getItem } from "@/utils/storage.js";
import md5 from "md5";
import { TOKEN } from "@/constant/index.js";
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
            console.log("~~~~", res);
            context.commit("setToken", res.token);
            resolve();
          })
          .catch((error) => {
            console.log(error);
            reject();
          });
      });
    },
    //获取用户信息
    async userinfo(context) {
      const res = await getUserInfo();
      context.commit("setUserInfo", res);
      return res;
    },
  },
};
