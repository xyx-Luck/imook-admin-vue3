import request from "@/utils/request.js";
//登录
export const getLogin = (data) => {
  return request({
    url: "/sys/login",
    method: "POST",
    data: data,
  });
};

//获取用户信息

export const getUserInfo = () => {
  return request({
    url: "/sys/profile",
    method: "get",
  });
};
