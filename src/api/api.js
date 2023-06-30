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

//个人中心——获取项目功能
export const getProjectFunction = () => {
  return request({
    url: "/user/feature",
    method: "get",
  });
};
