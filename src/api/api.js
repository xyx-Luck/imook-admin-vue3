import server from "@/api/utils/request";

export const getLogin = (data) => {
  return request({
    url: "/sys/login",
    methods: "post",
    data: data,
  });
};
