export default {
  namespaced: true,
  state: () => ({
    isCollapse: "",
  }),
  mutations: {
    changeCollapse(state, collapse) {
      state.isCollapse = collapse;
    },
  },
};
