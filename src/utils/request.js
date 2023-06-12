import axios from "axios";
import md5 from "md5";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
const store = useStore();
// import store from "./store";
// const store = useStore();
const server = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
//请求拦截器
server.interceptors.request.use(
  (config) => {
    const { icode, time } = getTestICode();
    config.headers.icode = icode;
    config.headers.codeType = time;
    //判断是否有token
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${store.state.user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
server.interceptors.response.use(
  (res) => {
    const { success, message, data } = res.data;
    if (success) {
      return data;
    } else {
      // 业务错误
      ElMessage.error(message); // 提示错误消息
      return false;
    }
  },
  (error) => {
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message); // 提示错误信息
    return false;
  }
);
/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = parseInt(Date.now() / 1000);
  const code = now + "LGD_Sunday-1991-12-30";
  return {
    icode: md5(code),
    time: now,
  };
}

export default server;
