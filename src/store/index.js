import { createStore } from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
import auth from "./auth/index.js";

const store = createStore({
  modules: { auth: auth },
  state() {
    return {
      isPending: false,
    };
  },
  actions,
  mutations,
  getters,
});

export { store };
