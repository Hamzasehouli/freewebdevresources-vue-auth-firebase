export default {
  isLoggedIn(state) {
    return state.isLoggedIn;
  },
  getUser(state) {
    return state.userInfo;
  },
  getErrorMessage(state) {
    return state.errorMessage;
  },
};
