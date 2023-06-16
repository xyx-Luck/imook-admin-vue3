export default {
  namespaced: true,
  state: () => ({
    isCollapse: false,
  }),
  mutations: {
    expandMenu(state, collapse) {
      state.isCollapse = collapse;
    },
    flodMenu(state, collapse) {
      state.isCollapse = collapse;
    },
  },
};
