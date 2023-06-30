import { createStore } from "vuex";
import user from "./modules/user.js";
import menu from "./modules/menu.js";
import profile from "./modules/profile.js";
import getters from "./getters.js";
export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    menu,
    profile,
  },
});
