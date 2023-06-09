import { getLogin } from "@/src/api/api";
import md5 from "md5";
export default {
  namespaced: true,
  state: () => {},
  mutations: {},
  actions: {
    login(context, userinfo) {
      const { username, password } = userinfo;
      return new Promise((resolve, reject) => {
        //调用接口
        getLogin({ usernamr, password: md5(password) })
          .then((data) => {
            resolve();
          })
          .catch((error) => {
            reject();
          });
      });
    },
  },
};
