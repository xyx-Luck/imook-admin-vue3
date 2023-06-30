const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  isCollapse: (state) => state.menu.isCollapse,
  profileFunc: (state) => state.profile.func,
};

export default getters;
