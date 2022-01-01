export default {
  isLoggedIn(state, mode) {
    state.isLoggedIn = mode;
  },
  setUser(state, payload) {
    state.userInfo = payload;
  },
  setErrorMessage(state, payload) {
    state.errorMessage = payload;
  },
};
