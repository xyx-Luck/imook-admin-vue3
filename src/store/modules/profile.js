import { getProjectFunction } from "@/api/api";
export default {
  namespaced: true,
  state: () => ({
    func: [],
  }),
  mutations: {
    changefunc(state, func) {
      state.func = func;
    },
  },
  actions: {
    getfunc(context, payload) {
      console.log("payload", payload);
      getProjectFunction().then((res) => {
        console.log(res);
        context.commit("changefunc", res);
      });
    },
  },
};
