import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      userInfo: null,
      errorMessage: "",
    };
  },
  actions,
  mutations,
  getters,
};
